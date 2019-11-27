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
          <div>projects</div>
          <div>contact</div>
          <div>github</div>
          <div className="header_main-mode">
            <button className="header_main-mode-button">dark</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
