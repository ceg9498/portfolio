import React from 'react'
import { faEye, faExternalLinkSquareAlt, faCode, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Popup from './popup'
import Example from './viewInternal'

import pomoImage from '../Images/pomodoroTimer.png'
import quoteImage from '../Images/quoteMachine.png'
import mdPrevImage from '../Images/markdownPreviewer.png'
import jsCalcImage from '../Images/jsCalculator.png'
import techDocPageImage from '../Images/techDocPage.png'
import translationImage from '../Images/translationPractice.png'


interface pTileProps {
  title:string;
  imgUrl:string;
  description:string;
  tech:string;
  exLink?:string;
  inLink?:string;
  codeLink?:string;
  gitLink?:string;
};

export class ProjectTile extends React.Component<any,any>{
  constructor(props:pTileProps){
    super(props);
    this.state = { isOpen: false, viewExample: false }
    this.handleHover = this.handleHover.bind(this);
  }
  handleHover(){
    if(this.state.isOpen){
      this.setState({
        isOpen: false,
      });
    } else {
      this.setState({
        isOpen: true,
      });
    }
  }
  render(){
    let { title, imgUrl, description, tech, exLink, inLink, codeLink, gitLink} = this.props.proj;
    
    return(
      <div className="project-tile" 
        style={{backgroundImage: 'url(' + imgUrl + ')'}}
        onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
        <div className="project-tile-info">
          <h3 className="project-tile-title">{title}</h3>
          { this.state.isOpen &&
            <>
              <p>{description}</p>
              <p>{tech}</p>
              <div className="project-tile-links">
                { inLink &&
                  <span className="internal-example-link" onClick={()=>this.props.openView(this.props.proj)}>
                    <Popup title={<FontAwesomeIcon icon={faEye} />} 
                    content="View this project within this page." />
                  </span>
                }
                { exLink &&
                  <a href={exLink} 
                    target="_blank" rel='noreferrer noopener'>
                      <Popup title={<FontAwesomeIcon icon={faExternalLinkSquareAlt} />}
                      content="View this project on an external page." />
                  </a>
                }
                { codeLink &&
                  <a href={exLink} 
                    target="_blank" rel='noreferrer noopener'>
                      <Popup title={<FontAwesomeIcon icon={faCode} />}
                      content="View the code for this project." />
                  </a>
                }
                { gitLink &&
                  <a href={exLink} 
                    target="_blank" rel='noreferrer noopener'>
                      <Popup title={<FontAwesomeIcon icon={faCodeBranch} />}
                      content="View the source for this project on GitHub." />
                  </a>
                }
              </div>
            </>
          }
        </div>
      </div>
    );
  }
}

export class ProjectSection extends React.Component<any,any>{
  projects:pTileProps[];
  constructor(props:any){
    super(props);
    this.state = { viewExample:false, viewLink: "" }
    this.projects = [
      {
        title:"Tech Doc Page",
        exLink:"https://codepen.io/ceg9498/full/pXbrqp",
        inLink: "", // techDocPage
        codeLink: "https://codepen.io/ceg9498/pen/pXbrqp",
        imgUrl:techDocPageImage,
        description:"A technical documentation style page.",
        tech:"HTML & CSS"
      },
      {
        title:"Translation Practice App",
        exLink:"https://thaliak.herokuapp.com/",
        inLink: "",
        gitLink: "https://github.com/ceg9498/thaliak-xltn",
        imgUrl:translationImage,
        description:"An app that facilitates practicing translation of natural languages.",
        tech:"React, TypeScript, & CSS"
      },
      {
        title:"Pomodoro Timer",
        exLink:"https://codepen.io/ceg9498/full/aboOYQG",
        inLink:"pomodoroTimer",
        codeLink:"https://codepen.io/ceg9498/pen/aboOYQG",
        imgUrl:pomoImage,
        description:"A simple timer app for measuring focused work time and break time.",
        tech:"React & Sass"
      },
      {
        title:"Random Quote Machine",
        exLink:"https://codepen.io/ceg9498/full/JjPYNjP",
        inLink:"quoteMachine",
        codeLink: "https://codepen.io/ceg9498/pen/JjPYNjP",
        imgUrl:quoteImage,
        description:"Generates a random quote from a predetermined list. Quote is displayed with a handwritten notecard aesthetic.",
        tech:"React & Sass"
      },
      {
        title:"Markdown Previewer",
        exLink:"https://codepen.io/ceg9498/full/vYBGVKB",
        inLink:"markdownPreviewer",
        codeLink: "https://codepen.io/ceg9498/pen/vYBGVKB",
        imgUrl:mdPrevImage,
        description:"Displays a preview of GitHub-flavor markdown as provided.",
        tech:"React, Sass, & Marked.js library"
      },
      {
        title:"JavaScript Calculator",
        exLink:"https://codepen.io/ceg9498/full/PoYNagj",
        inLink:"", //jsCalculator
        codeLink: "https://codepen.io/ceg9498/pen/PoYNagj",
        imgUrl:jsCalcImage,
        description:"A basic calculator built with React.js; utilizes immediate execution.",
        tech:"React & Sass"
      },
    ];
    this.openInlineView = this.openInlineView.bind(this);
    this.closeInlineView = this.closeInlineView.bind(this);
  }

  openInlineView(link:string){
    this.setState({
      viewExample: true,
      viewLink: link
    })
  }
  closeInlineView(){
    this.setState({
      viewExample: false,
      viewLink: ""
    })
  }

  render(){
    return(
      <section id="projects">
        {this.state.viewExample && 
          <Example proj={this.state.viewLink} close={this.closeInlineView} />
        }
        <h2 className="hidden">Projects</h2>
        <div className="proj-flex">
          {this.projects.map(item => 
            <ProjectTile proj={item} key={item.title} openView={this.openInlineView} />
          )}
        </div>
      </section>
    );
  }
}