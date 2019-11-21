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
        });
    }

    showRegister = () => {
        this .setState({
            visibleRegister: true,
        });
    }

    hideForm = () => {
        this.setState({
            visibleLogin: false,
            visibleRegister: false
        })
    }
    render() {
        return (
            <div className="landing">
                <TopNavBar showLogin={this.showLogin} showRegister={this.showRegister}/>
                <SearchBar />
                <AuthorizationModal visibleLogin={this.state.visibleLogin} visibleRegister={this.state.visibleRegister} hideForm={this.hideForm}/>
            </div>
        );
    }
}

export default Landing;