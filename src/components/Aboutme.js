import React from "react";
import Emoji from "a11y-react-emoji";

class Aboutme extends React.Component {
  render() {
    return (
      <div className="aboutme_container">
        <div className="aboutme-firstpara">
          Hey!! I'm <span>Abhinav,</span> a 22 years old Front-end developer,
          based in India. I graduated in <span>Computer Science</span> from
          <span> Kalinga Institute of Industrial Technology,</span> Bhubaneswar.
        </div>
        <div className="aboutme-secondpara">
          Immediately after the end of my 7th semester I secured a campus job
          offer in a well-known company called <span>"Accenture"</span> where I
          worked for around 6 months, while the workplace was great I was not
          learning anything new, I was very much hesitant to work on support and
          consulting projects and I felt stuck. Thus I decided to resign the
          company in November'19 to search for new interesting roles and
          opportunities related to <span>Frontend and JavaScript</span> in
          particular which I <span>love</span> coding in, and creating new
          things.
        </div>
        <div className="aboutme-thirdpara">
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
