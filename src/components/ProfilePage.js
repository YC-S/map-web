import React from "react";
import { Header } from "./Header";
import { Profile } from "./Profile";
import { Images } from "./Images";
import { PlanView } from "./PlanView";
import { TempPlace } from "./TempPlace";
// import "../styles/Profile.css";

//profile page
class ProfilePage extends React.Component {
  constructor() {
    super();
    this.state = {
      //image list consist of all image user uploaded, will change once database is ready
      images: true,
      plans: false,
      tempPage: false,
      imageList: [
        require("../images/1.jpg"),
        require("../images/2.jpg"),
        require("../images/3.jpg"),
        require("../images/4.jpg"),
        require("../images/5.jpg"),
        require("../images/6.jpg")
      ],
      POIList: [
        "point of interest 1",
        "point of interest 2",
        "point of interest 3"
      ]
    };
    this.handleOnClickImage = this.handleOnClickImage.bind(this);
    this.handleOnClickPlans = this.handleOnClickPlans.bind(this);
    this.handleOnClickTemp = this.handleOnClickTemp.bind(this);
  }
  handleOnClickImage() {
    this.setState({ images: true, plans: false, tempPage: false });
  }
  handleOnClickPlans() {
    this.setState({ images: false, plans: true, tempPage: false });
  }
  handleOnClickTemp() {
    this.setState({ images: false, plans: false, tempPage: true });
  }
  render() {
    console.log(this.state.imagesOrPlans);
    return (
      <div className="App">
        <Header />
        <Profile numberOfImages={this.state.imageList.length} />
        <div className="buttonBackground">
          {/* <button onClick={this.handleOnClick} className="imageAndPlansButton">
            {this.state.imagesOrPlans ? "plans view" : "images view"}
          </button> */}
          <button
            onClick={this.handleOnClickImage}
            className="imageAndPlansButton"
          >
            {"images view"}
          </button>
          <button
            onClick={this.handleOnClickPlans}
            className="imageAndPlansButton"
          >
            {"plans view"}
          </button>
          <button
            onClick={this.handleOnClickTemp}
            className="imageAndPlansButton"
          >
            {"temp view"}
          </button>
        </div>
        {this.state.images && <Images imageList={this.state.imageList} />}
        {this.state.plans && <PlanView POIList={this.state.POIList} />}
        {this.state.tempPage && <TempPlace />}
      </div>
    );
  }
}

export default ProfilePage;
