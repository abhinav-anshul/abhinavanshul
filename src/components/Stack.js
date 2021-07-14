import React from "react";
import PaperPlane from "../assets/paper-plane.png";

class Stack extends React.Component {
  render() {
    return (
      <div className='stack_container'>
        <div className='stack-heading'>My Tech Stack</div>

        <div className='stack-tech'>
          HTML5 | CSS3 | SASS | JAVASCRIPT | WEBPACK | REACTJS | REDUX |
          STYLED-COMPONENTS | BABEL | GATSBY | REST-API | VERSION-CONTROL
        </div>
        <div className='button-container'>
          <a
            style={{ all: "unset" }}
            rel='noreferrer'
            target='_blank'
            href='https://drive.google.com/file/d/1-HWhixGvjs6n8N0OHNNjOSY2Ae3VMTcI/view?usp=sharing'
          >
            <button style={{ letterSpacing: "1px" }} className='actual-button'>
              <img alt='paper plane' className='paper-plane' src={PaperPlane} />
              Resume
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default Stack;
