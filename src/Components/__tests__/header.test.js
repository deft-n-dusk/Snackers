import { render, screen } from "@testing-library/react"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"

jest.spyOn(console, 'warn').mockImplementation(() => {}); 

test("Should render header component with Cart (0)", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText("Cart (0)");
    expect(cartItems).toBeInTheDocument();
})