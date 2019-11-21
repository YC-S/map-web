import React from "react";
// import { Header } from "./Header";
// import { Profile } from "./Profile";
// import { Images } from "./Images";
// import ProfilePage from "./ProfilePage";
import AppRouter from "./AppRouter";

import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <AppRouter />
      {/* <img src={require("../images/1.jpg")} /> */}
      {/* <Header />
      <Profile />
      <Images /> */}
    </div>
  );
}

export default App;
