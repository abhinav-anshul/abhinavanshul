import React from "react";
import "../assets/github-logo.png";
import "../assets/linkedin-logo.png";
import "../assets/twitter-logo.png";
class Contactme extends React.Component {
  render() {
    return (
      <div className="contactme_container">
        <div className="contactme-heading">contact me</div>
        <div className="contactme-email">contact.abhinavanshul@gmail.com</div>
        <div className="links-container">
          <a target="_blank" href="https://github.com/abhinav-anshul">
            <img
              className="github-logo"
              src={require("../assets/github-logo.png")}
              alt="Github Logo"
            />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/abhinavanshul/">
            <img
              className="linkedin-logo"
              src={require("../assets/linkedin-logo.png")}
              alt="Linked Logo"
            />
          </a>
          <a target="_blank" href="https://twitter.com/AbhinavAnshul3">
            <img
              className="twitter-logo"
              src={require("../assets/twitter-logo.png")}
              alt="Twitter Logo"
            />
          </a>
        </div>
        <div className="copyright">COPYRIGHT &copy; 2020, ABHINAV ANSHUL</div>
      </div>
    );
  }
}

export default Contactme;
