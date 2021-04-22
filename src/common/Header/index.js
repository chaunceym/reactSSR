import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ border: "10px solid red" }}>
      <h1>I am Header NavBar</h1>
      <h1>
        <Link to={"/"}>Home</Link>
      </h1>
      <h1>
        <Link to={"/login"}>Login</Link>
      </h1>
    </div>
  );
};

export default Header;
