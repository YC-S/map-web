import React from 'react';
import TopNavBar from "./top-nav-bar"
import SearchCard from "./search-card"
import SearchBar from "./search-bar"

class Landing extends React.Component {
  render() {
    return (
      <div className="landing">
        <TopNavBar/>
        <SearchBar/>
      </div>
    );
  }
}

export default Landing;