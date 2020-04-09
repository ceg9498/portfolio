import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithubSquare, faTwitterSquare} from '@fortawesome/free-brands-svg-icons'

export function Navbar(){
  return(
    <nav id="main-nav">
      <ul role="navigation" id="nav-links">
        <li>
          <a href="#welcome-section" id="a-welcome">Emily&nbsp;Gagne</a>
        {/* </li><li>
          <a href="#experience">Experience</a> */}
        </li><li>
          <a href="#skills">Skills</a>
        </li><li>
          <a href="#projects" id="a-proj">Projects</a>
        </li><li>
          <a href="#contact" id="a-contact">Contact</a>
        </li>
      </ul>
      <div className="flex-grow" />
      <ul id="connect">
        <li>
          <a href="https://linkedin.com/in/ceg9498" id="linkedin-profile-link" className="profile-link"
            target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://github.com/ceg9498" id="github-profile-link" className="profile-link"
            target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/ceg9498" id="twitter-profile-link" className="profile-link"
            target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitterSquare} />
          </a>
        </li>
      </ul>
    </nav>
  );
}