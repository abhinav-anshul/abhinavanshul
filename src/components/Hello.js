import React from "react";

class Hello extends React.Component {
  render() {
    return (
      <div className="hello_main">
        <h1>Hello,</h1>
        <h1>
          I'm <span className="firstname-span">Abhinav</span>
        </h1>
        <div className="hello_main-expertise">
          Software Developer | Frontend Engineer
        </div>
        <div className="hello_main-button">
          <button className="button">About Me</button>
        </div>
      </div>
    );
  }
}

export default Hello;
