import React from "react";
import { SettingProfile } from "./SettingProfile";
import { ProfileService } from '../api/ProfileServices';
// import boy from "../images/boy.svg";


export class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John Smith",
      signature:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      headProfile: require("../images/boy.svg"),
      profile: null,
    };
  }

  componentDidMount() {
    // get profile data and update states
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      ProfileService.getProfile(user.cores_profile.id)
      .then(profile => {
        const name = (profile.firstName ? profile.firstName : "") + (profile.lastName ? (" " + profile.lastName) : "");
        this.setState(prevState => ({
          name: name === "" ? prevState.name : name,
          signature: profile.description || prevState.description,
          profile: profile,
        }));
      })
      .catch(err => console.log(err));

      ProfileService.getProfileImage(user.cores_profile.id)
      .then(imgURL => {
        this.setState({headProfile: imgURL});
      })
      .catch(err => {console.log("Profile Image retrieval failed: " + err)});
    }
  }

  render() {
    return (
      <div className="profile">
        {/* head profile */}

        <img
          src={this.state.headProfile}
          alt="boy-head"
          className="head-profile"
        />
        <div id="profile-right">
          {/* user information and button to let user change his/her profile */}
          <h4>
            <SettingProfile
              passedDown={this.state}
            />
          </h4>
          {/* text description which can let user personalize their expression */}
          <p className="text-description">{this.state.signature}</p>
          {/* number of posts that user has beed posted */}
          <p className="post">
            <strong>{this.props.numberOfImages}</strong> posts
          </p>
        </div>
      </div>
    );
  }
}
