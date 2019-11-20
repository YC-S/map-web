import React from "react";
import boy from "../images/boy.svg";
export const Profile = () => {
  return (
    <div className="profile">
      <img src={boy} alt="boy-head" className="head-profile" />
      <div>
        <h4>
          <span className="person-name">Johm Smith</span>
          <button className="edit-profile">Edit Profile</button>
        </h4>
        <p className="text-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
        <p className="post">
          <strong>0</strong> posts
        </p>
      </div>
    </div>
  );
};
