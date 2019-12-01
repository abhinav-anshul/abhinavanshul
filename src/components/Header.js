import React from "react";
import "../assets/delta.png";

class Header extends React.Component {
  render() {
    return (
      <div className="header_main">
        <div className="header_main-logo">
          <img src={require("../assets/delta.png")} />
        </div>
        <div className="header_main-nav">
          <div className="link link1">projects</div>
          <div className="link link2">contact</div>
          <div className="link link3">
            <a href="https://github.com/abhinav-anshul">github</a>
          </div>
          <div className="header_main-mode">
            <button className="header_main-mode-button">DARK</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
