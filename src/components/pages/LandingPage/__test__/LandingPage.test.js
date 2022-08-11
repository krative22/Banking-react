import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LandingPage from "../LandingPage";
import { BrowserRouter } from "react-router-dom";


const MockLandingPage = () => {
  return (
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>
  );
};

describe("Header", () => {
  it("Should render Landing Page Title", () => {
    render(<MockLandingPage />);
    const titleElement = screen.getByTestId("title");
    expect(titleElement).toBeInTheDocument;
  });

  it("Should render Tag line ", () => {
    render(<MockLandingPage />);
    const tagElement = screen.getByText(/Meeting All Your Needs/i);
    expect(tagElement).toBeInTheDocument;
  });

  it("Should render Login button", () => {
    render(<MockLandingPage />);
    const loginElement = screen.getByTestId("Login");
    fireEvent.click(loginElement);
    expect(loginElement).toBeInTheDocument;
  });
      it("Should render Login button", () => {
        render(<MockLandingPage />);
        const registerElement = screen.getByTestId("Register");
        fireEvent.click(registerElement);
        expect(registerElement).toBeInTheDocument;
      });
});
