import React from "react";
import "../styles/header.css";

const HeaderBar = () => {
  return (
    <div className="header-bar">
      <a href="/signup">
        <img className="button-primary-with" alt="Button primary with" src="signup.png" />
      </a>
      <a href="/login">
        <img className="img" alt="Button primary with" src="signin.png"/>
      </a>
      <a href="/">
        <img className="logo" alt="Logo" src="logo.png" />
      </a>
    </div>
  );
};

export {HeaderBar};