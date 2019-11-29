import React from "react";
import Header from "./components/Header";
import Hello from "./components/Hello";
import Aboutme from "./components/Aboutme";
import Stack from "./components/Stack";
import Article from "./components/Article";
import Project from "./components/Project";
import Contactme from "./components/Contactme";

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Hello />
        <Aboutme />
        <Stack />
        <Article />
        <Project />
        <Contactme />
      </React.Fragment>
    );
  }
}

export default Layout;
