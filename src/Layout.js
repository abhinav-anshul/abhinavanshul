import React from "react";
import Header from "./components/Header";
import Hello from "./components/Hello";
import Aboutme from "./components/Aboutme";
import Stack from "./components/Stack";
import Article from "./components/Article";
import Project from "./components/Project";
import Project2 from "./components/Project2";
import ProjectHeadingBio from "./components/ProjectHeadingBio";
import Contactme from "./components/Contactme";
import TopButton from "./components/TopButton";

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Hello />
        <Aboutme />
        <Stack />
        <Article />
        <ProjectHeadingBio />
        <Project2 />
        <TopButton />
        <Contactme />
      </React.Fragment>
    );
  }
}

export default Layout;
