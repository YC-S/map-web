import React from 'react';
import TopNavBar from "./TopNavBar"
import SearchCard from "./SearchCard"
import SearchBar from "./SearchBar"

class Landing extends React.Component {
    render() {
        return (
            <div className="landing">
                <TopNavBar />
                <SearchBar />
            </div>
        );
    }
}

export default Landing;