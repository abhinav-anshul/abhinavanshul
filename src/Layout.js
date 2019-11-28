import React from "react";
import Header from "./components/Header";
import Hello from "./components/Hello";
import Aboutme from "./components/Aboutme";
import Stack from "./components/Stack";
import Article from "./components/Article";

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Hello />
        <Aboutme />
        <Stack />
        <Article />
      </React.Fragment>
    );
  }
}

export default Layout;
