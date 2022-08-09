import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import Cards from "../../Cards/Card";
import { accounts } from "../../../atom/accountsAtom";

import { useRecoilState } from "recoil";

export default function HomePage() {
  const [uaccounts] = useRecoilState(accounts);
  console.log(uaccounts);
  const [allAccounts, setAllAccounts] = useState([]);
  useEffect(() => {
    getAccounts();
    // eslint-disable-next-line
  }, []);
  const getAccounts = () => {
    fetch("https://62d8f0df9c8b5185c78f338a.mockapi.io/Accounts", {
      method: "GET",
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setAllAccounts(() => [...result, ...uaccounts]);

          console.log(allAccounts);
        },

        (error) => {
          alert(error);
        }
      );
  };

  return (
    <div className="text-center ">
      <h1 className="main-title home-page-title">
        Welcome to Personal Banking
      </h1>
      <h2>Account Information</h2>
      <Link to="/new-account">
        <button className="home-button">New Account</button>
      </Link>
      <Link to="/">
        <button className="home-button">Log out</button>
      </Link>

      <div className="homePage__div">
        <div className="ui grid stackable">
          {allAccounts.map((account) => {
            return (
              <div className="four wide column" key={account.id}>
                <Cards
                  name={account.name}
                  description={account.description}
                  summary={account.summary}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
