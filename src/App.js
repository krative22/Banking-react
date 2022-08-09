import React from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./components/pages/LandingPage/LandingPage";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import RegisterPage from "./components/pages/RegisterPage/RegisterPage";
import ForgetPasswordPage from "./components/pages/ForgetPasswordPage/ForgetPasswordPage";
import HomePage from "./components/pages/HomePage/HomePage";
import TransactionPage from "./components/pages/Transaction/TransactionPage";
import NewAccountPage from "./components/pages/NewAccountPage/NewAccountPage";
import { RecoilRoot } from "recoil";

import "./App.css";

export default function App() {
  return (
    <RecoilRoot>
      <div>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forget-password" element={<ForgetPasswordPage />} />
          <Route path="/account" element={<HomePage />} />
          <Route path="/new-account" element={<NewAccountPage />} />
          <Route path="/transaction" element={<TransactionPage />} />
        </Routes>
      </div>
    </RecoilRoot>
  );
}
