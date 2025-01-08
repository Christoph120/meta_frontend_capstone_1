import { fireEvent, render, screen } from "@testing-library/react";
import App from './App'
import { BrowserRouter } from "react-router-dom";

//Test for Booking Form validation
//Test was passed successfully

describe("Booking Form", () => {
  test("User uses Booking Form", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText('Bookings'));
    const submitButton = screen.getByRole('button');
    expect(submitButton).toHaveAttribute('disabled'); 
    });
  });