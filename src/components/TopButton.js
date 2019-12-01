import React from "react";
import "../assets/arrow-up.png";

class TopButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll, true);
    document.getElementById("buttonid").style.display = "none";
  };

  handleClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  handleScroll = () => {
    console.log("scroll");

    // console.log((document.getElementById("buttonid").style.display = "none"));

    // x.style.display = "none";

    // console.log(event.target.className);

    if (
      document.body.scrollTop > 800 ||
      document.documentElement.scrollTop > 800
    ) {
      console.log(
        (document.getElementById("buttonid").style.display = "block")
      );
    } else {
      console.log((document.getElementById("buttonid").style.display = "none"));
    }
  };

  render() {
    return (
      <div className="topbutton_container">
        <button
          id="buttonid"
          style={{ display: "block" }}
          onClick={this.handleClick}
          onScroll={this.handleScroll}
          className="topbutton_button"
        >
          <img src={require("../assets/arrow-up.png")} />
        </button>
      </div>
    );
  }
}

export default TopButton;
