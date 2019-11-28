import React from "react";
import Header from "./components/Header";
import Hello from "./components/Hello";
import Aboutme from "./components/Aboutme";
import Stack from "./components/Stack";

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Hello />
        <Aboutme />
        <Stack />
      </React.Fragment>
    );
  }
}

export default Layout;
