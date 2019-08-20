import React from 'react'
import './viewInternal.scss'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Quotes from '../Examples/quoteMachine'
import MDPreviewer from '../Examples/markdownPreviewer'
//import TechDocPage from '../Examples/techDocPage'

var tdp = '../Examples/techDocPage.html'

export default class Example extends React.Component<any,any>{
  projects;
  constructor(props:any){
    super(props);
    this.state = {}
    this.projects = [
      {
        name: "Quote Machine",
        id: "quoteMachine",
      },
      {
        name: "Tech Doc Page",
        id: "techDocPage",
      },
      {
        name: "Pomodoro Timer",
        id: "pomodoroTimer",
      },
      {
        name: "Markdown Previewer",
        id: "markdownPreviewer",
      },
      {
        name: "JavaScript Calculator",
        id: "jsCalculator",
      }
    ];

    this.SetView = this.SetView.bind(this);
  }
  componentWillMount(){
    this.SetView(this.props.proj.inLink);
  }
  
  SetView(link:string){
    let nView;
    switch(link){
      case "quoteMachine":
        nView = <Quotes />;
        break;
      case "techDocPage":
        nView = <iframe src={tdp} title="tech-doc-page" name="tech-doc-page"></iframe>
        break;
      case "pomodoroTimer":
        // nView = < />;
        break;
      case "markdownPreviewer":
        nView = <MDPreviewer />;
        break;
      case "jsCalculator":
        // nView = < />;
        break;
      default:
        console.error("No such view available. View: " + link)
    }
    this.setState({
      view: nView
    })
  }

  render(){
    return(
      <div id="inline-viewport">
        <div id="inline-header">
          <h3>{this.props.proj.title}</h3>
          <span id="gap"></span>
          <span id="inline-close" onClick={this.props.close}>
            <FontAwesomeIcon icon={faTimesCircle} />
          </span>
        </div>
        <div id="inline-content">{this.state.view}</div>
      </div>
    );
  }
}