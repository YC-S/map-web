import React from "react";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div>
      <p style={{ color: "red" }}>
        Could not find the page you are trying to reach!{" "}
      </p>
      <Link to="/" style={{ "text-decoration": "underline" }}>
        Home Page
      </Link>
    </div>
  );
};

export default PageNotFound;
