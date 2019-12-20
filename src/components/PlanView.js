import React, { Component } from "react";

export class PlanView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul className="planView">
          {this.props.POIList.map((POI, idx) => (
            <li key={idx} className="listView">
              {POI}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
