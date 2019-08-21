import React from 'react'
import marked from 'marked'
import './markdownPreviewer.scss'

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
   let sample = "# Top-level header\n## Sub-header\nSome **bold** text\n\n";
   sample += "Visit my [portfolio](https://ceg9498.github.io/portfolio/)\n\n";
   sample += "`body { display: grid; }`\n\n";
   sample += "* List an item\n* Or two\n\n> Quote someone!\n\n";
   sample += "```css\ntextarea {\n width: 500px;\n height: 200px;\n}\n```\n\n";
   sample += "![An Image of a dog](https://i.imgur.com/EMEtj76.jpg)";
   let res = marked(sample);
   this.setState({
    markdown: sample,
    result: res
   });
  }
  
  handleChange(e){
    let res = marked(e.target.value);
    this.setState({
      markdown: e.target.value,
      result: res
    })
  }
  markup(){
   return {__html: this.state.result};
  }
  
  render(){
   return(
    <>
     <h1><span id="md">Markdown</span> <span id="previewer">Previewer</span></h1>
     <div id="container">
      <textarea id="editor" onChange={(e)=>this.handleChange(e)} value={this.state.markdown}></textarea>
      <div id="preview" dangerouslySetInnerHTML={this.markup()} />
     </div>
    </>
   );
  }
 }