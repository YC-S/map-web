import React, { Component } from "react";
// const baseUrl = "../images/";
export class Images extends Component {
  constructor() {
    super();
    this.state = {
      imageList: [
        require("../images/1.jpg"),
        require("../images/2.jpg"),
        require("../images/3.jpg"),
        require("../images/4.jpg"),
        require("../images/5.jpg"),
        require("../images/6.jpg")
      ]
    };
  }
  render() {
    console.log(this.state.imageList[0]);
    return (
      <div className="imageContainer">
        {this.state.imageList.map((image, idx) => (
          <img
            src={this.state.imageList[1]}
            key={idx}
            alt={image}
            className="image"
          />
        ))}
        {/* <img src={this.state.imageList[2]} alt="test" /> */}
      </div>
    );
  }
}
