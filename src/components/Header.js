import React from "react";
import logo from "../images/travel.svg";
import user from "../images/user.svg";
import "../styles/header.css";
export function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="brand-logo" />
      <input type="text" placeholder="Search" className="searchBar" />
      <img src={user} className="user-logo" alt="user-logo" />
    </header>
  );
}
