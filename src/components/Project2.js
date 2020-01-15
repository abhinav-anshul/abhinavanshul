import React from "react";
import "../assets/project1.PNG";
class Project2 extends React.Component {
  render() {
    return (
      <div className="project_container">
        <div className="project-heading">Portfolio</div>
        <div className="project-image-text-container">
          <div className="project-image-container">
            <img
              className="project1-image"
              src={require("../assets/project1.PNG")}
            />
          </div>
          <div className="project-text-container">
            <div className="actual_text">
              This very application you're on right now. I built it from scratch
              using ReactJS. I wanted to try the new CSS features, thus I
              integrated everything I could to make it more modern looking and
              very minimal. I have used SASS which is the CSS Pre-processor
              along with the modern CSS tools using CSS Grid and CSS Flexbox to
              positon various. I have also scaled down this application to a
              various range of mobile devices so that it can look great on
              smaller devices too.
            </div>
            <div className="actual_text-stack">
              REACTJS | CSS-FLEXBOX | CSS-GRID | SASS
            </div>
            <div className="button_container">
              <a target="_blank" href="https://abhinavanshul.com/">
                <button>Visit</button>
              </a>
              <a
                target="_blank"
                href="https://github.com/abhinav-anshul/abhinavanshul"
              >
                <button>Source</button>
              </a>
            </div>
          </div>
        </div>

        <div className="project-heading ">Rick & Morty Databse</div>
        <div className="project-image-text-container abc">
          <div className="project-text-container">
            <div className="actual_text">
              I have created this Rick & Morty Database application which is
              based on a really popular TV show which goes by the same name. In
              this application, I am rendering over more than 490 different
              characters which also differs in various stats. I have used REST
              API to fetch all the stats including the images from
              rickandmortyapi.com In addition, I wanted to play with the new
              Context-API which has been introduced in React v.16 for the global
              state management, so I built this toggle switch on the top of this
              application, which can toggle the theme between light/dark
            </div>
            <div className="actual_text-stack">
              REACTJS | CONTEXT-API | REST API
            </div>
            <div className="button_container">
              <a target="_blank" href="http://rickandmorty.abhinavanshul.com/">
                <button>Visit</button>
              </a>
              <a
                target="_blank"
                href="https://github.com/abhinav-anshul/Rick-and-Morty-Database"
              >
                <button>Source</button>
              </a>
            </div>
          </div>
          <div className="project-image-container">
            <img
              className="project1-image"
              src={require("../assets/project2.PNG")}
            />
          </div>
        </div>

        <div className="project-heading">Todos</div>
        <div className="project-image-text-container">
          <div className="project-image-container">
            <img
              className="project1-image"
              src={require("../assets/project3.PNG")}
            />
          </div>
          <div className="project-text-container">
            <div className="actual_text">
              A classic todo list, which takes two input fields, namely Title
              and details, where one can put todo item with a brief detail about
              it. I used only functional-based components in this application,
              along with hooks such as useState, useEffect, etc. I wanted to use
              Context-API in this one too as its comparatively new architecture
              in React v16. For the styling part, I have used plain old CSS, as
              it did not require much styling for a simple todo application.
            </div>
            <div className="actual_text-stack">
              REACTJS | CSS3 | CONTEXT-API | LOCALSTORAGE
            </div>
            <div className="button_container">
              <a target="_blank" href="http://todos.abhinavanshul.com/">
                <button>Visit</button>
              </a>
              <a target="_blank" href="https://github.com/abhinav-anshul/Todos">
                <button>Source</button>
              </a>
            </div>
          </div>
        </div>

        <div className="project-heading ab">Portofolio</div>
        <div className="project-image-text-container abc">
          <div className="project-text-container">
            <div className="actual_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
            <div className="actual_text-stack">HTML | CSS3 | JAVASCRIPT</div>
            <div className="button_container">
              <button>Visit</button>
              <button>Source</button>
            </div>
          </div>
          <div className="project-image-container">
            <img
              className="project1-image"
              src={require("../assets/project1.PNG")}
            />
          </div>
        </div>

        <div className="project-heading">Portofolio</div>
        <div className="project-image-text-container">
          <div className="project-image-container">
            <img
              className="project1-image"
              src={require("../assets/project1.PNG")}
            />
          </div>
          <div className="project-text-container">
            <div className="actual_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
            <div className="actual_text-stack">HTML | CSS3 | JAVASCRIPT</div>
            <div className="button_container">
              <button>Visit</button>
              <button>Source</button>
            </div>
          </div>
        </div>
        <div className="more-on-github_container">
          <div className="github-bio">Check out more on my Github</div>
          <a href="https://github.com/abhinav-anshul">
            <button>github</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Project2;
