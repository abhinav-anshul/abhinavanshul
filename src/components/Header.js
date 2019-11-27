import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header_main">
        <div className="header_main-name">
          <div className="firstname">abhinav</div>
          <div className="lastname"> anshul</div>
        </div>
        <div className="header_main-nav">
          <div>Link1</div>
          <div>Link2</div>
          <div>Link3</div>
          <div>button</div>
        </div>
      </div>
    );
  }
}

export default Header;
