import React from 'react';
import AuthorizationModal from "./AuthorizationModal"

class TopNavBar extends React.Component {

    handleLoginClick = () => {
        this.props.showLogin();
    }

    render() {
        return (
            <div>
                <header className="landing-header">
                    <a href="#">Home</a>
                    <a href="#">Sign up</a>
                    <a href="#" onClick={this.handleLoginClick}>Login</a>
                </header>
            </div>
        );
    }
}

export default TopNavBar;