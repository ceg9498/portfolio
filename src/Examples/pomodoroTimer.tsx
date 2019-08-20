import React from 'react'
import './pomodoroTimer.scss'

export default class Pomodoro extends React.Component<any,any> {
  interval;
  beep;
  constructor(props){
   super(props);
   this.state = {
    sessionTime: 25,
    breakTime: 5,
    remTime: {
     min: 25,
     sec: 0,
    },
    isRunning: false,
    curTimer: "session",
   };
   
   this.incrSession = this.incrSession.bind(this);
   this.decrSession = this.decrSession.bind(this);
   this.incrBreak = this.incrBreak.bind(this);
   this.decrBreak = this.decrBreak.bind(this);
   this.toggle = this.toggle.bind(this);
   this.reset = this.reset.bind(this);
   this.tick = this.tick.bind(this);
  }
  
  componentWillUnmount(){
   this.destroyTimer();
  }
  
  incrSession(){
   if(!this.state.isRunning){
    let update = this.state.sessionTime+1;
    if(update > 60){
     return;
    }
    this.setState({
     sessionTime: update
    });
    if(this.state.curTimer === "session"){
     this.setState({
      remTime: {
       min: update,
       sec: 0
      }
     })
    }
   }
  }
  decrSession(){
   if(!this.state.isRunning){
    let update = this.state.sessionTime-1;
    if(update < 1){
     return;
    }
    this.setState({
     sessionTime: update,
    });
    if(this.state.curTimer === "session"){
     this.setState({
      remTime: {
       min: update,
       sec: 0
      }
     })
    }
   }
  }
  incrBreak(){
   if(!this.state.isRunning){
    let update = this.state.breakTime+1;
    if(update > 60){
     return;
    }
    this.setState({
     breakTime: update,
    });
    if(this.state.curTimer === "break"){
     this.setState({
      remTime: {
       min: update,
       sec: 0
      }
     })
    }
   }
  }
  decrBreak(){
   if(!this.state.isRunning){
    let update = this.state.breakTime-1;
    if(update < 1){
     return;
    }
    this.setState({
     breakTime: update,
    });
    if(this.state.curTimer === "break"){
     this.setState({
      remTime: {
       min: update,
       sec: 0
      }
     })
    }
   }
  }
  toggle(){
   let nState = !this.state.isRunning;
   if(nState){
    // start timer
    this.interval = setInterval(()=>this.tick(), 1000);
   } else {
    // pause timer
    this.destroyTimer();
   }
   this.setState({
    isRunning: nState,
   });
  }
  reset(){
   this.beep.pause();
   this.beep.currentTime = 0;
   this.destroyTimer();
   this.setState({
    isRunning: false,
    curTimer: "session",
    sessionTime: 25,
    breakTime: 5,
    remTime: {
     min: 25,
     sec: 0
    }
   });
  }
  tick(){
   let nSec = this.state.remTime.sec-1;
   let nMin = this.state.remTime.min;
   
   // switch minute
   if(nMin > 0 && nSec < 0){
    nSec = 59;
    nMin -= 1;
   }
   
   // play timer alarm here
   if(nMin === 0 && nSec == 0){
    this.setState({
     remTime: {
      min: nMin,
      sec: nSec
     }
    });
    this.beep.play();
   }
   
   // switch current timer
   if(nMin === 0 && nSec < 0){
    if(this.state.curTimer === "break"){
     this.setState({
      curTimer: "session"
     });
     nMin = this.state.sessionTime;
     nSec = 0;
    } else {
     this.setState({
      curTimer: "break"
     });
     nMin = this.state.breakTime;
     nSec = 0;
    }
   }
   
   this.setState({
    remTime: {
     min: nMin,
     sec: nSec
    }
   });
  }
  destroyTimer(){
   clearInterval(this.interval);
  }
  
  render(){
   return(
    <>
     <h1>Pomodoro Timer</h1>
     <div id="settings">
      <SetTimer 
       timerType="session" 
       timerLength={this.state.sessionTime} 
       incr = {this.incrSession} 
       decr = {this.decrSession} />
      <SetTimer 
       timerType="break" 
       timerLength={this.state.breakTime} 
       incr = {this.incrBreak} 
       decr = {this.decrBreak} />
     </div>
     <TimerDisplay 
      timerType={this.state.curTimer} 
      remTime={this.state.remTime}
      toggle={this.toggle}
      reset={this.reset} />
     <audio id="beep" preload="auto" 
      src="https://goo.gl/65cBl1" 
      ref={(audio)=>{this.beep = audio;}} />
    </>
   );
  }
 }
 
 function SetTimer(props){
  return(
   <div className="setTimer" id={props.timerType+"-setting"}>
    <SetControls timerType={props.timerType} incr={props.incr} decr={props.decr}>
     <span id={props.timerType+"-label"}>{props.timerType}: </span>
     <span id={props.timerType+"-length"} className="time-text">{props.timerLength.toString().padStart(2,'0')}</span>
    </SetControls>
   </div>
  );
 }
 
 function SetControls(props){
  return(
   <div>
    {props.children}
    <button onClick={props.incr} class="incr"><i id={props.timerType+"-increment"} className="fas fa-angle-up"></i></button>
    <button onClick={props.decr} class="decr"><i id={props.timerType+"-decrement"} className="fas fa-angle-down"></i></button>
   </div>
  );
 }
 
 function TimerDisplay(props){
  return(
   <>
     <Countdown 
      timerType={props.timerType} 
      remTime={props.remTime} />
     <TimerControls 
      toggle={props.toggle} 
      reset={props.reset} />
   </>
  );
 }
 
 function Countdown(props){
  let min = props.remTime.min.toString().padStart(2,'0')
  let sec = props.remTime.sec.toString().padStart(2,'0');
  return(
   <>
    <span id="timer-label">{props.timerType}</span>
    <span id="time-left" className="time-text">{min}:{sec}</span>
   </>
  );
 }
 
 function TimerControls(props){
  return(
   <span>
    <button id="start_stop" onClick={props.toggle}>
     <i className="fas fa-play"></i>
     <i className="fas fa-pause"></i>
    </button>
    <button id="reset" onClick={props.reset}>
     <i className="fas fa-fast-backward"></i>
    </button>
   </span>
  );
 }