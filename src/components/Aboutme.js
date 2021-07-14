import React from "react";

class Aboutme extends React.Component {
  render() {
    return (
      <div className='aboutme_container'>
        <div className='aboutme-firstpara'>
          I'm <span>Abhinav,</span> a 22 years old FrontEnd Engineer, based in
          India, working for Consenso Labs. I graduated in{" "}
          <span>Computer Science</span> from
          <span> Kalinga Institute of Industrial Technology,</span> Bhubaneswar.
        </div>
        <div className='aboutme-secondpara'>
          I have been primarily working with JavaScript since I graduated, and
          picked up ReactJS for most of my professional work and personal
          projects. You can also find me writing Tech articles, engaging with
          Frontend communities, sharing, and developing ideas!
        </div>
        <div className='aboutme-thirdpara'>
          This personal web application is all about me and the{" "}
          <span>
            projects I built and things that I've learned while doing so!
          </span>
        </div>
      </div>
    );
  }
}

export default Aboutme;
