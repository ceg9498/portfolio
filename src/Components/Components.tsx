import React from 'react'

export function Navbar(){
  return(
    <nav id="main-nav">
      <ul role="navigation">
        <li>
          <a href="#welcome-section" id="a-welcome">Emily&nbsp;Gagne</a>
        </li><li>
          <a href="#projects" id="a-proj">Projects</a>
        </li><li>
          <a href="#connect">Connect</a>
        </li>
      </ul>
    </nav>
  );
}

export function Welcome(){
  return(
    <header id="welcome-section">
      <h1 id="welcome-grid">
        <span id="w-greeting">Hi!</span>
        <span id="w-name">I'm Emily.</span>
        <span id="w-tagline">It's nice to meet you.</span>
      </h1>
    </header>
  );
}

export function Footer(){
  return(
    <footer id="connect">
      <a href="https://github.com/ceg9498" id="github-profile-link" className="profile-link"
        target="_blank" rel="noopener noreferrer">
          View my work on Github
      </a>
      <a href="https://twitter.com/ceg9498" id="twitter-profile-link" className="profile-link"
        target="_blank" rel="noopener noreferrer">
          Twitter: @ceg9498
      </a>
    </footer>
  );
}