import React from 'react';
import { userService } from '../api/UserServices';
import {Redirect} from 'react-router-dom';
import { Link } from 'react-router-dom';
import profile_icon from '../assets/default-user-icon.jpg';
import logo from "../assets/images/youtuan-logo.png";
import { ProfileService } from '../api/ProfileServices';

class TopNavBar extends React.Component {
    state = {
        name: null,
        profileImg: require('../assets/default-user-icon.jpg'),
    }
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
        const user = JSON.parse(localStorage.getItem("user"));
        // fetch all the information: user profile photo, username
        if (user) {
            ProfileService.getProfile(user.cores_profile.id)
            .then(profile => {
                console.log(profile);
                const name = (profile.firstName ? profile.firstName : "") + (profile.lastName ? (" " + profile.lastName) : "");
                this.setState({name: name});
            })
            .catch(err => {console.log('Failed to fetch profile: ' + err)});

            ProfileService.getProfileImage(user.cores_profile.id)
            .then(imgURL => {
                console.log(imgURL);
                this.setState({profileImg: imgURL});
            })
            .catch(err => {console.log("Profile Image retrieval failed: " + err)});
        }
    }

    render() {
        const { landing } = this.props;
        return (
            <div>
                <header className="landing-header" style={{backgroundColor: landing ? "transparent" : "#09d3ac"}}>
                    <div id="header-img-div">
                        <img src={logo} className="landing-logo" alt="logo" />
                    </div>
                    {localStorage.getItem('user') ? 
                    <div>
                        <div id="welcome_message">Hi {this.state.name ? `, ${this.state.name}!` : null}</div>
                                                {/* link to profile page through profile image */}
                                                <Link to="/profile"><div id="nav_profile_img"><img src={this.state.profileImg} alt=" " width="30px" height="30px"></img></div></Link>
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