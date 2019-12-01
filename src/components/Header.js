import React from "react";
import "../assets/delta.png";

class Header extends React.Component {
  handleContact = () => {
    console.log("clcik");
    document.body.scrollTop = 1000000;
    document.documentElement.scrollTop = 100000000;
  };

  handleProjects = () => {
    document.body.scrollTop = 2000;
    document.documentElement.scrollTop = 2000;
  };

  render() {
    return (
      <div className="header_main">
        <div className="header_main-logo">
          <a href="https://abhinavanshul.com/">
            <img src={require("../assets/delta.png")} />
          </a>
        </div>
        <div className="header_main-nav">
          <div className="link link1">
            <button onClick={this.handleProjects} style={{ all: "unset" }}>
              projects
            </button>
          </div>
          <div className="link link2">
            <button onClick={this.handleContact} style={{ all: "unset" }}>
              contact
            </button>
          </div>
          <div className="link link3">
            <a target="_blank" href="https://github.com/abhinav-anshul">
              github
            </a>
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
