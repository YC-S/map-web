import React from "react";
import { Header } from "./Header";
import { Profile } from "./Profile";
import { Images } from "./Images";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Images />
      {/* <img src={require("../images/1.jpg")} /> */}
    </div>
  );
}

export default App;
