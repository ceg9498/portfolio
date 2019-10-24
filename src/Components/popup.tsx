import React from 'react'

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

	setLeft = () => {
		return {
			position: "absolute" as "absolute",
			left: "-305px",
			width: "300px"
		};
	};
	setRight = () => {
		return {
			position: "absolute" as "absolute",
			right: "-305px",
			width: "300px"
		};
	};
		
	render(){
		let isOpen = this.state.isOpen;
		let title = this.props.title;
		let content = this.props.content;
		let direction = this.props.direction;
		let style;
		switch(direction){
			case 'left':
				style = this.setLeft();
				break;
			case 'right':
				style = this.setRight();
				break;
			default:
				style = this.setRight();
		}
		
		return (
			<div className="popup" onMouseEnter={this.Open} onMouseLeave={this.Close}>
				{title}
				{isOpen && 
					<span className="popup-content" style={style}>
						{content}
					</span>
				}
			</div>
		);
	}
}