import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import AppRoutes from "../AppRoutes/index.jsx";

jest.mock("../Posts/PostsList.jsx", () => {
   const MockPostsList = () => (
       <div>Your matcher for PostList components here</div>
   );
    return MockPostsList;
});

jest.mock("../Posts/PostDetails.jsx", () => {
    const MockPostDetails = () => (
        <div>Post Details</div>
    );
    return MockPostDetails;
});

jest.mock("../Posts/NewPostForm.jsx", () => {
    const MockNewPostForm = () => (
        <div>New Post</div>
    );
    return MockNewPostForm;
});

jest.mock("../Posts/PostEditForm.jsx", () => {
    const MockEditForm = () => (
        <div>Edit Form</div>
    );
    return MockEditForm;
});

jest.mock("../../constants", () => ({
    API_URL: "http://localhost:3000",
}));
describe("AppRoutes", () => {
    const renderWithRouter = (ui, { initialEntries = ["/"] } = {}) => {
        return render(ui, {
                wrapper: ({ children }) =>(
                    <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
                ),
            });
    };

    test ("should render my component PosstList", () => {
        renderWithRouter(<AppRoutes />, { initialEntries: ["/"] });
        const expectedText = "Your matcher for PostList components here";
        expect(screen.getByText(expectedText)).toBeInTheDocument();
    });

    test ("should render my component PostDetails", () => {
        renderWithRouter(<AppRoutes />, { initialEntries: ["/posts/1"] });
        const expectedText = "Post Details";
        expect(screen.getByText(expectedText)).toBeInTheDocument();
    });

    test ("should render my component NewPostForm", () => {
        renderWithRouter(<AppRoutes />, { initialEntries: ["/posts/new"] });
        const expectedText = "New Post";
        expect(screen.getByText(expectedText)).toBeInTheDocument();
    });

    test ("/posts/:id/edit edit for PostEditForm", () => {
        renderWithRouter(<AppRoutes />, { initialEntries: ["/posts/1/edit"] });
        const expectedText = "Edit Form";
        expect(screen.getByText(expectedText)).toBeInTheDocument();
    });
});
