import React from 'react';

class TopNavBar extends React.Component {

    handleLoginClick = () => {
        this.props.showLogin();
    }

    handleRegisterLogin = () => {
        this.props.showRegister();
    }

    render() {
        return (
            <div>
                <header className="landing-header">
                    <a href="#">Home</a>
                    <a href="#" onClick={this.handleRegisterLogin}>Sign up</a>
                    <a href="#" onClick={this.handleLoginClick}>Login</a>
                </header>
            </div>
        );
    }
}

export default TopNavBar;