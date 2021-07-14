import React from "react";
import Project11 from "../assets/project1.PNG";
import Project22 from "../assets/project2.PNG";
import Project33 from "../assets/project3.PNG";
import Project44 from "../assets/project4.PNG";
import Project55 from "../assets/project5.PNG";

import "../assets/project1.PNG";
class Project2 extends React.Component {
  render() {
    return (
      <div className='project_container'>
        <div className='project-heading'>Portfolio</div>
        <div className='project-image-text-container'>
          <div className='project-image-container'>
            <img
              loading='lazy'
              alt=''
              className='project1-image'
              src={Project11}
            />
          </div>
          <div className='project-text-container'>
            <div className='actual_text'>
              This very application you're on right now. I built it from scratch
              using ReactJS. I wanted to try the new CSS features, thus I
              integrated everything I could to make it more modern looking and
              very minimal. I have used SASS which is the CSS Pre-processor
              along with the modern CSS tools using CSS Grid and CSS Flexbox to
              positon various. I have also scaled down this application to a
              various range of mobile devices so that it can look great on
              smaller devices too.
            </div>
            <div className='actual_text-stack'>
              REACTJS | CSS-FLEXBOX | CSS-GRID | SASS
            </div>
            <div className='button_container'>
              {/* <a target='_blank' href='https://abhinavanshul.com/'>
                <button>Visit</button>
              </a> */}
              <a
                rel='noreferrer'
                target='_blank'
                href='https://github.com/abhinav-anshul/abhinavanshul'
              >
                <button>Source</button>
              </a>
            </div>
          </div>
        </div>

        <div className='project-heading '>Rick & Morty Databse</div>
        <div className='project-image-text-container abc'>
          <div className='project-text-container'>
            <div className='actual_text'>
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
            <div className='actual_text-stack'>
              REACTJS | CONTEXT-API | REST API
            </div>
            <div className='button_container'>
              {/* <a
                rel='noreferrer'
                target='_blank'
                href='http://rickandmorty.abhinavanshul.com/'
              >
                <button>Visit</button>
              </a> */}
              <a
                rel='noreferrer'
                target='_blank'
                href='https://github.com/abhinav-anshul/Rick-and-Morty-Database'
              >
                <button>Source</button>
              </a>
            </div>
          </div>
          <div className='project-image-container'>
            <img
              loading='lazy'
              alt=''
              className='project1-image'
              src={Project22}
            />
          </div>
        </div>

        <div className='project-heading'>Todos</div>
        <div className='project-image-text-container'>
          <div className='project-image-container'>
            <img
              loading='lazy'
              alt=''
              className='project1-image'
              src={Project33}
            />
          </div>
          <div className='project-text-container'>
            <div className='actual_text'>
              A classic todo list, which takes two input fields, namely Title
              and details, where one can put todo item with a brief detail about
              it. I used only functional-based components in this application,
              along with hooks such as useState, useEffect, etc. I wanted to use
              Context-API in this one too as its comparatively new architecture
              in React v16. For the styling part, I have used plain old CSS, as
              it did not require much styling for a simple todo application.
            </div>
            <div className='actual_text-stack'>
              REACTJS | CSS3 | CONTEXT-API | LOCALSTORAGE
            </div>
            <div className='button_container'>
              {/* <a
                rel='noreferrer'
                target='_blank'
                href='http://todos.abhinavanshul.com/'
              >
                <button>Visit</button>
              </a> */}
              <a
                rel='noreferrer'
                target='_blank'
                href='https://github.com/abhinav-anshul/Todos'
              >
                <button>Source</button>
              </a>
            </div>
          </div>
        </div>

        <div className='project-heading ab'>Weathery</div>
        <div className='project-image-text-container abc'>
          <div className='project-text-container'>
            <div className='actual_text'>
              A Weather Application built using ReactJs and tons of API
              services. In this application we can have a forecast or even
              historical weather details sorted using a date picker. I have used
              two popular REST API called 'DarkSky' and 'OpenWeather' to fetch
              weather details, including forecast and historical events.By
              default it renders out the weather condition for a city
              'Bangalore,India' when this application is first loaded.
            </div>
            <div className='actual_text-stack'>REACTJS | CSS3 | REST-API</div>
            <div className='button_container'>
              {/* <a
                rel='noreferrer'
                target='_blank'
                href='http://weathery.abhinavanshul.com/'
              >
                <button>Visit</button>
              </a> */}
              <a
                rel='noreferrer'
                target='_blank'
                href='https://github.com/abhinav-anshul/Cuebook-weather-api'
              >
                <button>Source</button>
              </a>
            </div>
          </div>
          <div className='project-image-container'>
            <img
              loading='lazy'
              alt=''
              className='project1-image'
              src={Project44}
            />
          </div>
        </div>

        <div className='project-heading'>Taskboard - A Trello Clone</div>
        <div className='project-image-text-container'>
          <div className='project-image-container'>
            <img
              loading='lazy'
              alt=''
              className='project1-image'
              src={Project55}
            />
          </div>
          <div className='project-text-container'>
            <div className='actual_text'>
              A Taskboard Application, cloning the functionality and aesthetics
              of Trello Board, including local storage feature. All the tasks
              are draggable within and movable to different boards too. This
              application is mainly built using ReactJS. For state management, I
              have used Redux and Redux Persist.
            </div>
            <div className='actual_text-stack'>
              REACTJS | REDUX | REDUX-PERSIST | LOCALSTORAGE
            </div>

            <div className='button_container'>
              {/* <a
                rel='noreferrer'
                target='_blank'
                href='https://taskboard.abhinavanshul.com/'
              >
                <button>Visit</button>
              </a> */}
              <a
                rel='noreferrer'
                target='_blank'
                href='https://github.com/abhinav-anshul/consensolabs'
              >
                <button>Source</button>
              </a>
            </div>
          </div>
        </div>
        <div className='more-on-github_container'>
          <div className='github-bio'>Check out more on my Github</div>
          <a href='https://github.com/abhinav-anshul'>
            <button>github</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Project2;
