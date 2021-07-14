import React from "react";
import GithubLogo from "../assets/github-logo.png";
import LinkedLogo from "../assets/linkedin-logo.png";
import TwitterLogo from "../assets/twitter-logo.png";
class Contactme extends React.Component {
  render() {
    return (
      <div className='contactme_container'>
        <div className='contactme-heading'>contact me</div>
        <div className='contactme-email'>contact.abhinavanshul@gmail.com</div>
        <div className='links-container'>
          <a
            rel='noreferrer'
            target='_blank'
            href='https://github.com/abhinav-anshul'
          >
            <img className='github-logo' src={GithubLogo} alt='Github Logo' />
          </a>
          <a
            rel='noreferrer'
            target='_blank'
            href='https://www.linkedin.com/in/abhinavanshul/'
          >
            <img className='linkedin-logo' src={LinkedLogo} alt='Linked Logo' />
          </a>
          {/* <a
            rel='noreferrer'
            target='_blank'
            href='https://twitter.com/AbhinavAnshul3'
          >
            <img
              className='twitter-logo'
              src={TwitterLogo}
              alt='Twitter Logo'
            />
          </a> */}
        </div>
        <div className='copyright'>COPYRIGHT &copy; 2021, abhinav anshul</div>
      </div>
    );
  }
}

export default Contactme;
