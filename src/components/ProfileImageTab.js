import React, { Component } from "react";
// const baseUrl = "../images/";
export class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log(this.state.imageList[0]);
    return (
      //mapping each image and index to image html
      <div className="imageContainer">
        {this.props.imageList.map((image, idx) => (
          <img
            src={this.props.imageList[idx]}
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
