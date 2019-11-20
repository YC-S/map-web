import React from 'react';
import TopNavBar from "./TopNavBar"
import SearchCard from "./SearchCard"

class Landing extends React.Component {
    render() {
        return (
            <div className="landing">
                <TopNavBar />
                <SearchCard />
            </div>
        );
    }
}

export default Landing;