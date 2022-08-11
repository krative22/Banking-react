import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import HomePage from "../HomePage";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

const MockHomePage = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <HomePage />
      </RecoilRoot>
    </BrowserRouter>
  );
};

describe("Home Page", () => {
  it("Should be able to render the title of Home Page", () => {
    render(<MockHomePage />);
    const homePageTitle = screen.getByText(/WELCOME TO PERSONAL BANKING/i);
    expect(homePageTitle).toBeInTheDocument;
  });
  it("Should be able to render the title of Account Information title", () => {
    render(<MockHomePage />);
    const InformationTitle = screen.getByText(/Account Information/i);
    expect(InformationTitle).toBeInTheDocument;
  });
  it("Should be able to render the New Account Button", () => {
    render(<MockHomePage />);
    const NewAccount = screen.getByRole("button", { name: /New Account/i });
    fireEvent.click(NewAccount);
    expect(NewAccount).toBeInTheDocument;
  });
  it("Should be able to render the New Account Button", () => {
    render(<MockHomePage />);
    const LogOut = screen.getByRole("button", { name: /Log Out/i });
    fireEvent.click(LogOut);
    expect(LogOut).toBeInTheDocument;
  });

});
