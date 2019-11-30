import React from "react";
import "../assets/arrow-down.png";
class ProjectHeadingBio extends React.Component {
  render() {
    return (
      <div className="projectheadingbio_container">
        <div className="projectheadingbio-heading">projects</div>
        <div className="projectheadingbio-bio">
          I have open-sourced almost all my work on Github. Here are a
          collection of few projects, not necessarily the best, but the projects
          that I enjoyed doing and learned new things in the way.
        </div>
      </div>
    );
  }
}

export default ProjectHeadingBio;
