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
  direction:string;
};

export class ProjectTile extends React.Component<any,any>{
  constructor(props:pTileProps){
    super(props);
    this.state = { viewExample: false };
  }
  render(){
    let { title, imgUrl, description, tech, direction} = this.props.proj;
    
    return(
      <div className="project-tile">
        {direction === "left" &&
          <>
            <ProjectInfo title={title} tech={tech} description={description} />
            <span className="project-tile-gap"></span>
            <ProjectImage imgUrl={imgUrl} />
            <ProjectLinks proj={this.props.proj} openView={this.props.openView} />
          </>
        }
        {direction === "right" &&
          <>
            <ProjectLinks proj={this.props.proj} openView={this.props.openView} />
            <ProjectImage imgUrl={imgUrl} />
            <span className="project-tile-gap"></span>
            <ProjectInfo title={title} tech={tech} description={description} />
          </>
        }
        {direction === "top" &&
          <>
            <ProjectImage imgUrl={imgUrl} />
            <ProjectInfo title={title} tech={tech} description={description} />
            <ProjectLinks proj={this.props.proj} openView={this.props.openView} />
          </>
        }
      </div>
    );
  }
}

function ProjectLinks(props:{proj:pTileProps,openView:any}){
  let { inLink, exLink, codeLink, gitLink, direction } = props.proj;
  return(
    <div className="project-tile-links">
      { inLink &&
        <span className="internal-example-link" onClick={()=>props.openView(props.proj)}>
          <Popup title={<FontAwesomeIcon icon={faEye} />} 
          content="View this project within this page."
          direction={direction} />
        </span>
      }
      { exLink &&
        <a href={exLink} 
          target="_blank" rel='noreferrer noopener'>
            <Popup title={<FontAwesomeIcon icon={faExternalLinkSquareAlt} />}
            content="View this project on an external page."
            direction={direction} />
        </a>
      }
      { codeLink &&
        <a href={codeLink} 
          target="_blank" rel='noreferrer noopener'>
            <Popup title={<FontAwesomeIcon icon={faCode} />}
            content="View the code for this project."
            direction={direction} />
        </a>
      }
      { gitLink &&
        <a href={gitLink} 
          target="_blank" rel='noreferrer noopener'>
            <Popup title={<FontAwesomeIcon icon={faCodeBranch} />}
            content="View the source for this project on GitHub."
            direction={direction} />
        </a>
      }
    </div>
  );
}

function ProjectImage(props:{imgUrl:string}){
  return(
    <div className="project-tile-image" style={{backgroundImage: `url(${props.imgUrl})`}}>
      {/** Empty; let the bg image speak */}
    </div>
  );
}

function ProjectInfo(props:{title:string,tech:string,description:string}){
  let { title, tech, description } = props;
  return (
    <div className="project-tile-info">
      <h3 className="project-tile-title">{title}</h3>
      <div className="project-description">
        <p>{tech}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export class ProjectSection extends React.Component<any,any>{
  projects:pTileProps[];
  constructor(props:any){
    super(props);
    this.state = { viewExample:false, viewLink: "" }
    this.projects = [
      {
        title:"Translation Practice App",
        exLink:"https://thaliak.herokuapp.com/",
        inLink: "",
        gitLink: "https://github.com/ceg9498/thaliak-xltn",
        imgUrl:translationImage,
        description:"An app that facilitates practicing translation of natural languages.",
        tech:"React, TypeScript, & CSS",
        direction: "left"
      },
      {
        title: "Time-out To-dos",
        exLink: "",
        inLink: "",
        codeLink: "https://github.com/ceg9498/xiv-timers",
        imgUrl: "",
        description: "Keep track of your periodical to-do items",
        tech: "React, Sass, IndexedDB, MaterialUI",
        direction: "right"
      },
      {
        title:"Pomodoro Timer",
        exLink:"https://codepen.io/ceg9498/full/aboOYQG",
        inLink:"pomodoroTimer",
        codeLink:"https://codepen.io/ceg9498/pen/aboOYQG",
        imgUrl:pomoImage,
        description:"A simple timer app for measuring focused work time and break time.",
        tech:"React & Sass",
        direction: "left"
      },
      {
        title:"Random Quote Machine",
        exLink:"https://codepen.io/ceg9498/full/JjPYNjP",
        inLink:"quoteMachine",
        codeLink: "https://codepen.io/ceg9498/pen/JjPYNjP",
        imgUrl:quoteImage,
        description:"Generates a random quote from a predetermined list. Quote is displayed with a handwritten notecard aesthetic.",
        tech:"React & Sass",
        direction: "right"
      },
      {
        title:"Markdown Previewer",
        exLink:"https://codepen.io/ceg9498/full/vYBGVKB",
        inLink:"markdownPreviewer",
        codeLink: "https://codepen.io/ceg9498/pen/vYBGVKB",
        imgUrl:mdPrevImage,
        description:"Displays a preview of GitHub-flavor markdown as provided.",
        tech:"React, Sass, & Marked.js library",
        direction: "left"
      },
      {
        title:"Tech Doc Page",
        exLink:"https://codepen.io/ceg9498/full/pXbrqp",
        inLink: "", // techDocPage
        codeLink: "https://codepen.io/ceg9498/pen/pXbrqp",
        imgUrl:techDocPageImage,
        description:"A technical documentation style page.",
        tech:"HTML & CSS",
        direction: "right"
      },
      {
        title:"JavaScript Calculator",
        exLink:"https://codepen.io/ceg9498/full/PoYNagj",
        inLink:"", //jsCalculator
        codeLink: "https://codepen.io/ceg9498/pen/PoYNagj",
        imgUrl:jsCalcImage,
        description:"A basic calculator built with React.js; utilizes immediate execution.",
        tech:"React & Sass",
        direction: "left"
      },
    ];
    this.openInlineView = this.openInlineView.bind(this);
    this.closeInlineView = this.closeInlineView.bind(this);
    this.setWinWidth = this.setWinWidth.bind(this);
  }

  componentDidMount(){
    window.addEventListener('resize', this.setWinWidth);
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.setWinWidth);
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
  setWinWidth(){
    this.setState({
      winWidth: window.innerWidth
    });
  }

  render(){
    let mutated = this.projects;
    if(this.state.winWidth <= 700){
      mutated.forEach((proj)=>{
        proj.direction = "top"
      });
    } else {
      let isLeft = true;
      mutated.forEach((proj)=>{
        if(isLeft){
          proj.direction = "left";
        } else {
          proj.direction = "right";
        }
        isLeft = !isLeft;
      });
    }
    return(
      <section id="projects">
        {this.state.viewExample && 
          <Example proj={this.state.viewLink} close={this.closeInlineView} />
        }
        <h2 className="hidden">Projects</h2>
        <div className="proj-flex">
          {mutated.map(item => 
            <ProjectTile proj={item} key={item.title} openView={this.openInlineView} />
          )}
        </div>
      </section>
    );
  }
}