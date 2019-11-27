import React from "react";
import Header from "./components/Header";
import Hello from "./components/Hello";

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Hello />
      </React.Fragment>
    );
  }
}

export default Layout;
