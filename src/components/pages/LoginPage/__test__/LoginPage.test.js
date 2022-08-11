import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LoginPage from "../LoginPage";
import { BrowserRouter } from "react-router-dom";

const MockLoginPage = () => {
  return (
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>
  );
};

describe("LoginPage", () => {
  it("Should be able to render the title of login page", () => {
    render(<MockLoginPage />);
    const loginTitle = screen.getByText(/Sign in to us/i);
    expect(loginTitle).toBeInTheDocument;
  });
  it("Should be able to render the username or email address", () => {
    render(<MockLoginPage />);
    const userTitle = screen.getByText(/Username or email address/i);
    expect(userTitle).toBeInTheDocument;
  });
  it("Should be able to render the Password", () => {
    render(<MockLoginPage />);
    const passwordTitle = screen.getByText(/Password/);
    expect(passwordTitle).toBeInTheDocument;
  });
  it("Should be able to render the Forget password", () => {
    render(<MockLoginPage />);
    const passwordTitle = screen.getByText(/Forget password?/i);
    fireEvent.click(passwordTitle);
    expect(passwordTitle).toBeInTheDocument;
  });
  it("Should be able to render the Create an account", () => {
    render(<MockLoginPage />);
    const createAccount = screen.getByText(/Create an account/i);
    fireEvent.click(createAccount);
    expect(createAccount).toBeInTheDocument;
  });
  it("Should be able to render the Forget password", () => {
    render(<MockLoginPage />);
    const backToHomePage = screen.getByText(/Back to Homepage/i);
    fireEvent.click(backToHomePage);
    expect(backToHomePage).toBeInTheDocument;
  });
});
