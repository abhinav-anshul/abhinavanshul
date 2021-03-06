import React from "react";
import ArrowLogo from "../assets/arrow-down.png";

class Hello extends React.Component {
  handleClick = () => {
    console.log("clicked");
    document.body.scrollTop = 500;
    document.documentElement.scrollTop = 500;
  };

  render() {
    return (
      <div className='hello_main'>
        <h1>Hello,</h1>
        <h1>
          I'm <span className='firstname-span'>Abhinav</span>
        </h1>
        <div className='hello_main-expertise'>
          Software Developer | Frontend Engineer
        </div>
        <div className='hello_main-button'>
          <button onClick={this.handleClick} className='button'>
            About Me
          </button>
        </div>
        <div className='hello_main-arrowlogo'>
          <img alt='arrowlogo' className='arrow-logo' src={ArrowLogo} />
        </div>
      </div>
    );
  }
}

export default Hello;
