import { MemoryRouter } from "react-router-dom";
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import PostsList  from "./PostsList.jsx";
import * as postService from '../../service/postService.js'

jest.mock("../../constants.js", () => ({
    API_URL: "http://localhost:3000",
}));

jest.mock("../../service/postService.js", ()=>({
    fetchAllPost: jest.fn(),
    deletePost: jest.fn(),
}));

global.console.error = jest.fn();

describe("PostsList components", () => {
    const mockPost = [
        {id: 1, title: "Post One"},
        {id: 2, title: "Post Two"}
    ]

    beforeEach(() => {
        postService.fetchAllPost.mockResolvedValue(mockPost)
        postService.deletePost.mockResolvedValue();

    })
    test("Render post should render my component", async () => {
        render(<PostsList/>, {wrapper: MemoryRouter});

        await waitFor(() => screen.getByText("Post One"));
        expect(screen.getByText("Post One")).toBeInTheDocument();
        expect(screen.getByText("Post Two")).toBeInTheDocument();
    });

    test("Delete a post", async () => {
        render(<PostsList/>, {wrapper: MemoryRouter});
        const postText = "Post One"
        await waitFor(() => screen.getByText(postText));
        fireEvent.click(screen.getAllByText("Delete")[0])
        await waitFor(() => expect(postService.fetchAllPost).toHaveBeenCalled());
        expect(screen.queryByText(postText)).not.toBeInTheDocument();
    })

    test("set error and loading to false when fetching post fails", async () => {
        // Failed to fetch post, e => An error occurred while fetching data
        const error = new Error("An error occurred");
        postService.fetchAllPost.mockRejectedValue(error);

        render(<PostsList/>, {wrapper: MemoryRouter});

        await waitFor(() => {
            expect(console.error).toHaveBeenCalledWith(
                "Failed to fetch post",
                error
            );
        });
    });

    test("logs error when deleting a post fails", async () => {
        const error = new Error("An error occurred");
        postService.deletePost.mockRejectedValue(error);

        render(<PostsList/>, {wrapper: MemoryRouter});
        await waitFor(() => screen.getByText("Post One"));
        fireEvent.click(screen.getAllByText("Delete")[0]);
        await waitFor(() => {
            expect(console.error).toHaveBeenCalledWith(
                "Failed to fetch post",
                error
            );
        });
    });
    
});