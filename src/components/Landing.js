import React from 'react';
import TopNavBar from "./TopNavBar"
import SearchCard from "./SearchCard"
import SearchBar from "./SearchBar"
import AuthorizationModal from "./AuthorizationModal"


class Landing extends React.Component {
    state = {
        visibleLogin: false,
        visibleRegister: false,
    }
    showLogin = () => {
        this.setState({
            visibleLogin: true
        })
    }

    hideLogin = () => {
        this.setState({
            visibleLogin: false
        })
    }
    render() {
        return (
            <div className="landing">
                <TopNavBar showLogin={this.showLogin}/>
                <SearchBar />
                <AuthorizationModal visibleLogin={this.state.visibleLogin} hideLogin={this.hideLogin}/>
            </div>
        );
    }
}

export default Landing;