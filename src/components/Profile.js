import React from "react";
import boy from "../images/boy.svg";
import { SettingProfile } from "./SettingProfile";
// import boy from "../images/boy.svg";


export class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      name: "John Smith",
      signature:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      loading: false,
      visible: false,
      headProfile: require("../images/boy.svg")
    };
    // this.handleOnClick = this.handleOnClick.bind(this);
  }
  // handleOnClick = () => {
  //   return <div>{alert("button clicked")}</div>;
  // };
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  // handleUsername = e => {
  //   console.log(e.target.value);
  // };

  handleOk = e => {
    let username = document.getElementById("inputUserName").value;
    let signature = document.getElementById("inputSignature").value;
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
    if (username) {
      this.setState({ name: username });
    }
    if (signature) {
      this.setState({
        signature: signature
      });
    }
    // return username || signature
    //   ? this.setState({ name: username, signature: signature })
    //   : this.state;
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  componentDidMount() {
    // get profile data and update states
    
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
        <div>
          {/* user information and button to let user change his/her profile */}
          <h4>
            
            {/* <button className="edit-profile" onClick={this.handleOnClick}>
              Edit Profile <i className="fa fa-cog"></i>
            </button> */}
            <SettingProfile
              passedDown={this.state}
              showModal={this.showModal}
              handleCancel={this.handleCancel}
              handleOk={this.handleOk}
              handleUsername={this.handleUsername}
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
