import React from 'react'

export function Navbar(){
  return(
    <nav id="navbar">
      <ul role="navigation">
        <li>
          <a href="#welcome-section" id="a-welcome">Emily&nbsp;Gagne</a>
        </li><li>
          <a href="#projects" id="a-proj">Projects</a>
        </li><li>
          <a href="#profile-link">Connect</a>
        </li>
      </ul>
    </nav>
  );
}

export function Welcome(){
  return(
    <header id="welcome-section">
      <h1 id="welcome-grid">
        <span id="greeting">Hi!</span>
        <span id="name">I'm Emily.</span>
        <span id="tagline">It's nice to meet you.</span>
      </h1>
    </header>
  );
}

function ProjectTile(props:any){
  return(
    <a href={props.link}>
      <div className="project-tile" style={{backgroundImage: 'url(' + props.imgSrc + ')'}}>
      <span>{props.title}</span>
      </div>
    </a>
  );
}

export function ProjectSection(){
  return(
    <section id="projects">
      <h2>Projects</h2>
      <div className="proj-flex">
        <ProjectTile title="Translation Practice App" link="https://thaliak.herokuapp.com/" imgSrc="https://i.imgur.com/NUPeg62.png" />
        <ProjectTile title="Survey Form" link="https://codepen.io/ceg9498/full/ewzJrr" imgSrc="https://i.imgur.com/AFWxD1W.png" />
        <ProjectTile title="Tech Doc Page" link="https://codepen.io/ceg9498/full/pXbrqp" imgSrc="https://i.imgur.com/ZJ92yGh.png" />
      </div>
    </section>
  );
}

export function Footer(){
  return(
    <footer>
      <a href="https://github.com/ceg9498" id="profile-link" target="_blank" rel="noopener noreferrer">View my work on Github</a>
      <a href="https://twitter.com/ceg9498">Twitter: @ceg9498</a>
    </footer>
  );
}