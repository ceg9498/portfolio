import React from 'react'
import './quoteMachine.scss'
import { faHashtag, faRandom } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

let qList = [
    {
        author: "Dr. Seuss",
        text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams."
    },
    {
        author: "Mae West",
        text: "You only live once, but if you do it right, once is enough."
    },
    {
    author: "Ralph Waldo Emerson",
    text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."
    },
    {
    author: "Marilyn Monroe",
    text: "I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together."
    }
]

export default class Quotes extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            author: "",
            text: ""
        }
        this.getQuote = this.getQuote.bind(this);
    }

    componentWillMount(){
        this.getQuote();
    }

    getQuote(){
        let index = Math.floor(Math.random()*qList.length);
        this.setState({
            author: qList[index].author,
            text: qList[index].text
        });
    }

    render(){
        return(
            <div id="quote-box">
                <header id="quote-header">
                    <span id="author">{this.state.author}</span>
                    <a id="tweet-quote" 
                        href="https://twitter.com/intent/tweet" 
                        target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faHashtag} />
                    </a>
                    <button id="new-quote" 
                        onClick={this.getQuote}>
                        <FontAwesomeIcon icon={faRandom} />
                    </button>
                </header>
                <p id="text">{this.state.text}</p>
            </div>
        );
    }
}
