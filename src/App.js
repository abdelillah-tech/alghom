import React, { Component } from 'react';
import './App.css';
import AboutContent from './components/AboutContent';
import ContactContent from './components/ContactContent';
import Icons from './components/Icons';
import SkillsContent from './components/SkillsContent';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      num: 1,
      show: <AboutContent />
    }
    this.IconsElement = React.createRef();
  }

  handleClick = (numIcon, showContent)=>{
    this.setState({
      num: numIcon,
    });
    this.IconsElement.current.changeIcon(numIcon);
    this.getComponent();
  }

  getComponent(){
    let component;
    switch(this.state.num){
      case 1 :
          component = <AboutContent />
          break;
      case 2 :
          
          break;
      case 3 :
          component = <SkillsContent />
          break;
      case 4 :
          
          break;
      case 5 :

          break;
      case 6 :
          component = <ContactContent />
          break;
      default:
          component = <AboutContent />
          break;
    }
    return component;
  }

  render(){
    return (
      <div className="App">
            <header>
              <h1>AL/GHOM</h1>
            </header>
            <div className="main-view">
              <div id="side-nav">
                <button onClick={() => this.handleClick(1)}>about</button>
                <button onClick={() => this.handleClick(2)}>hobies</button>
                <button onClick={() => this.handleClick(3)}>skills</button>
                <button onClick={() => this.handleClick(4)}>education</button>
                <button onClick={() => this.handleClick(5)}>projects</button>
                <button onClick={() => this.handleClick(6)}>contact</button>
              </div>
              <div className="description">{this.getComponent()}</div>
              <div id="dir-icons"><Icons ref={this.IconsElement}/></div>
            </div>
      </div>
    );
  }
}
export default App;
