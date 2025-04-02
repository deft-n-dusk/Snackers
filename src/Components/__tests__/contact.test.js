import Contact from "../Contact"
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact Us page test cases", () => {

test("Should load Contact Us Component", () => {
    render(<Contact/>);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})

test("Should load button inside Contact Us Component", () => {
    render(<Contact/>);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
})

test("Should load input name inside Contact Us Component", () => {
    render(<Contact/>);

    const name = screen.getByPlaceholderText("Your Name");

    expect(name).toBeInTheDocument();
})

it("Should load 2 input boxes inside Contact Us Component", () => {
    render(<Contact/>);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
})

})

