import React from 'react';

class TopNavBar extends React.Component {
    render() {
        return (
            <header className="landing-header">
                        <a href="#">Home</a>
                        <a href="#">Sign up</a>
                        <a href="#">Login</a>
            </header>
        );
    }
}

export default TopNavBar;