import Rest_card from "../Rest_card"
import { render, screen } from "@testing-library/react"
import MOCK_DATA from "../mocks/rest_card_mock.json"
import "@testing-library/jest-dom"

test("Should render Rest Card component with mock data", () => {
    render(<Rest_card resData = {MOCK_DATA}/>)

    const name = screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument();
})