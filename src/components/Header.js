import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/travel.svg";
import user from "../images/user.svg";
import "../styles/Header.css";

export function Header() {
  return (
    //header components consist of logo on the left, search bar in the middle,
    //and user icon on the right
    <header className="App-header">
      <Link to="/">
        <img src={logo} className="App-logo" alt="brand-logo" />
      </Link>
      {/* input tag to let user input text to search */}
      <input type="text" placeholder="Search" className="searchBar" />
      <img src={user} className="user-logo" alt="user-logo" />
    </header>
  );
}
