import React from 'react';
import { userService } from '../api/UserServices';
import {Redirect} from 'react-router-dom';
import { Link } from 'react-router-dom';
import profile_icon from '../assets/default-user-icon.jpg';

class TopNavBar extends React.Component {
    handleLoginClick = () => {
        this.props.showLogin();
    }

    handleRegisterLogin = () => {
        this.props.showRegister();
    }

    handleLogoutClick = () => {
        userService.logout();
    }

    componentDidMount() {
        // fetch all the information: user profile photo, username
        if (localStorage.getItem('user')) {
            
        }
    }

    render() {
        return (
            <div>
                <header className="landing-header">
                    {localStorage.getItem('user') ? 
                    <div>
                        <div id="welcome_message">Hi, {JSON.parse(localStorage.getItem('user')).username}!</div>
                                                {/* link to profile page through profile image */}
                                                <Link to="/"><div id="nav_profile_img"><img src={profile_icon} alt=" " width="30px" height="30px"></img></div></Link>
                        <Link className="navLink" to="/" onClick={this.handleLogoutClick}>Logout</Link>
                    </div> 
                    : 
                    <div>
                        <button onClick={this.handleRegisterLogin}>Sign up</button>
                        <button onClick={this.handleLoginClick}>Login</button>
                    </div>
                    
                    }
                    
                </header>
            </div>
        );
    }
}

export default TopNavBar;