import React from 'react'
import './popup.scss'

export default class Popup extends React.Component<any,any> {
    constructor(props:any){
     super(props);
     this.state = { isOpen:false };
    }
    
    Open = () => {
     this.setState({
      isOpen: true,
     });
    }
    Close = () => {
     this.setState({
      isOpen: false,
     });
    }
    
    render(){
        let isOpen = this.state.isOpen;
        let title = this.props.title;
        let content = this.props.content;
        
        return (
            <div className="popup" onMouseEnter={this.Open} onMouseLeave={this.Close}>
                {title}
                {isOpen && 
                <span className="popup-content">
                    {content}
                </span>
                }
            </div>
        );
    }
}