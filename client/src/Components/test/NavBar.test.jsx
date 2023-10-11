import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar/index.jsx";
import { MemoryRouter } from "react-router-dom";


describe("Navbar", () => {
    const renderNavbar = () => {
        render(<Navbar />, { wrapper: MemoryRouter });
    }

  test("should render my component", () => {
      // Render the Navbar component
       renderNavbar();
       // expect the navbar to be in the document
         expect(screen.getByText("Post List")).toBeInTheDocument();
         expect(screen.getByText("New Post")).toBeInTheDocument();
  });
});