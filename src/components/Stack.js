import React from "react";
import "../assets/paper-plane.png";

class Stack extends React.Component {
  render() {
    return (
      <div className="stack_container">
        <div className="stack-heading">My Tech Stack</div>

        <div className="stack-tech">
          HTML5 | CSS3 | SASS | JAVASCRIPT | WEBPACK | REACTJS | REDUX |
          STYLED-COMPONENTS | BABEL | GATSBY | REST-API | VERSION-CONTROL
        </div>
        <div className="button-container">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/13bLO98Byl_rGMwUZSQyL4HOqsr-PjtZb/view?usp=sharing"
          >
            <button className="actual-button">
              <img
                className="paper-plane"
                src={require("../assets/paper-plane.png")}
              />
              Resume
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default Stack;
