import React from "react";
import "../assets/project1.PNG";
class Project extends React.Component {
  render() {
    return (
      <div className="project_container">
        <div className="project_container-heading">Projects</div>
        <div className="project_container-bio">
          I have open-sourced almost all my work on Github. Here are a
          collection of few projects, not necessarily the best, but the projects
          that I enjoyed doing and learned new things in the way.
        </div>
        <div className="project-name">Project Name</div>
        <div className="project_container-one-container">
          <img
            className="project1-image"
            src={require("../assets/project1.PNG")}
          />
          <div className="project1-text-container">
            <div className="actual-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
            <div className="actual-text-stack">HTML | CSS3 | JAVASCRIPT</div>
            <div className="actual-text-buttons-container">
              <button className="button-view">View</button>
              <button className="button-source">Source</button>
            </div>
          </div>
        </div>

        <div className="project-name">Project Name</div>
        <div className="project_container-one-container">
          <div className="project1-text-container">
            <div className="actual-text">
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum
            </div>
            <div className="actual-text-stack">HTML | CSS3 | JAVASCRIPT</div>
            <div className="actual-text-buttons-container">
              <button className="button-view">View</button>
              <button className="button-source">Source</button>
            </div>
          </div>
          <img
            className="project1-image"
            src={require("../assets/project1.PNG")}
          />
        </div>

        <div className="project-name">Project Name</div>
        <div className="project_container-one-container">
          <img
            className="project1-image"
            src={require("../assets/project1.PNG")}
          />
          <div className="project1-text-container">
            <div className="actual-text">
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum
            </div>
            <div className="actual-text-stack">HTML | CSS3 | JAVASCRIPT</div>
            <div className="actual-text-buttons-container">
              <button className="button-view">View</button>
              <button className="button-source">Source</button>
            </div>
          </div>
        </div>

        <div className="project-name">Project Name</div>
        <div className="project_container-one-container">
          <div className="project1-text-container">
            <div className="actual-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
            <div className="actual-text-stack">HTML | CSS3 | JAVASCRIPT</div>
            <div className="actual-text-buttons-container">
              <button className="button-view">View</button>
              <button className="button-source">Source</button>
            </div>
          </div>
          <img
            className="project1-image"
            src={require("../assets/project1.PNG")}
          />
        </div>

        <div className="project-name">Project Name</div>
        <div className="project_container-one-container">
          <img
            className="project1-image"
            src={require("../assets/project1.PNG")}
          />
          <div className="project1-text-container">
            <div className="actual-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
            <div className="actual-text-stack">HTML | CSS3 | JAVASCRIPT</div>
            <div className="actual-text-buttons-container">
              <button className="button-view">View</button>
              <button className="button-source">Source</button>
            </div>
          </div>
        </div>
        <div className="more-bio">Check out more on my GitHub</div>
        <div className="more-button">
          <a href="https://github.com/abhinav-anshul">
            <button className="more-button-actual-button">Github</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Project;
