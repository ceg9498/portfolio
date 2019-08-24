import React from 'react'
import marked from 'marked'
import './markdownPreviewer.scss'
const DOMPurify = require('dompurify')

export default class MDPreviewer extends React.Component<any,any>{
  constructor(props:any){
   super(props);
   this.state = {};
   this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount(){
   marked.setOptions({
    gfm: true,
    breaks: true,
    xhtml: true,
   });
   let sample = "# Top-level header\n\n## Sub-header\n\nSome **bold** text\n\n";
   sample += "Visit my [portfolio](https://ceg9498.github.io/portfolio/)\n\n";
   sample += "`body { display: grid; }`\n\n";
   sample += "* List an item\n* Or two\n\n> Quote someone!\n\n";
   sample += "```css\ntextarea {\n width: 500px;\n height: 200px;\n}\n```\n\n";
   sample += "![An Image of my Quote Machine project](https://i.imgur.com/BzdnVqY.png)";
   let res = DOMPurify.sanitize(marked(sample));
   this.setState({
    markdown: sample,
    result: res
   });
  }
  
  handleChange(e){
    let md = e.target.value;
    let sani = DOMPurify.sanitize(marked(md));
    this.setState({
      markdown: md,
      result: sani
    })
  }
  markup(){
    return {__html: this.state.result};
  }
  
  render(){
   return(
    <div id="md-prev-body">
     <h1 id="md-title"><span id="md">Markdown</span> <span id="previewer">Previewer</span></h1>
     <div id="container">
      <textarea id="editor" onChange={(e)=>this.handleChange(e)} value={this.state.markdown}></textarea>
      <div id="preview" dangerouslySetInnerHTML={this.markup()} />
     </div>
    </div>
   );
  }
 }