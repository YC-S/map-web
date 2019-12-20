import React from "react";
import boy from "../images/boy.svg";

export class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John Smith"
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick = () => {
    return <div>{alert("button clicked")}</div>;
  };

  render() {
    return (
      <div className="profile">
        {/* head profile */}
        <img src={boy} alt="boy-head" className="head-profile" />
        <div>
          {/* user information and button to let user change his/her profile */}
          <h4>
            <span id="person-name">{this.state.name}</span>
            <button className="edit-profile" onClick={this.handleOnClick}>
              Edit Profile
            </button>
          </h4>
          {/* text description which can let user personalize their expression */}
          <p className="text-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
          {/* number of posts that user has beed posted */}
          <p className="post">
            <strong>{this.props.numberOfImages}</strong> posts
          </p>
        </div>
      </div>
    );
  }
}
