import React from 'react'
import './viewInternal.scss'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Quotes from '../Examples/quoteMachine'
import MDPreviewer from '../Examples/markdownPreviewer'

export default function Example(props:any){
  console.log("Example is loaded")
  return(
    <div id="inline-viewport">
      <div id="inline-header">
        <h3>{props.proj.title}</h3>
        <span id="gap"></span>
        <span id="inline-close" onClick={props.close}>
          <FontAwesomeIcon icon={faTimesCircle} />
        </span>
      </div>
      <div id="inline-content">{GetView(props.proj.inLink)}</div>
    </div>
  );
}

function GetView(link:string){
  let view;
  switch(link){
    case "quoteMachine":
      view = <Quotes />;
      break;
    case "techDocPage":
      // view = < />;
      break;
    case "pomodoroTimer":
      // view = < />;
      break;
    case "markdownPreviewer":
      view = <MDPreviewer />;
      break;
    case "jsCalculator":
      // view = < />;
      break;
    default:
      console.error("No such view available. View: " + link)
  }
  return view;
}