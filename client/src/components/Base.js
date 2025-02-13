import React from "react";
import Logo from "../assets/images/wigglesLogo.png";

function Base() {
  return (
    <a href="/verify/login">
      <div className="baseContainer">
        <img
          className="logoImg"
          src={Logo}
          alt="website-logo"
          loading="lazy"
        ></img>
        <h2 className="logoHeading">Pawradise</h2>
      </div>
    </a>
  );
}

export default Base;
