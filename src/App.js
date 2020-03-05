import React, { Component } from 'react';
import './App.css';
import Icons from './components/Icons';
import AboutContent from './components/AboutContent';
import ContactContent from './components/ContactContent';
import SkillsContent from './components/SkillsContent';
import EducationContent from './components/EducationContent';
import ProjectsContent from './components/ProjectsContent';
import HobiesContent from './components/HobiesContent';

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
          component = <HobiesContent />
          break;
      case 3 :
          component = <SkillsContent />
          break;
      case 4 :
          component = <EducationContent />
          break;
      case 5 :
          component = <ProjectsContent />
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
              <div className="header-cont">
                <h1>AL/GHOM</h1>
              </div>
            </header>
            <div className="main-view">
              <div className="side-nav">
                <div className="nav-cont">
                  <button onClick={() => this.handleClick(1)}>a propos</button>
                  <button onClick={() => this.handleClick(2)}>passions</button>
                  <button onClick={() => this.handleClick(3)}>competences</button>
                  <button onClick={() => this.handleClick(4)}>parcours</button>
                  <button onClick={() => this.handleClick(5)}>travaux</button>
                  <button onClick={() => this.handleClick(6)}>contacts</button>
                </div>
              </div>
              <div className="description">{this.getComponent()}</div>
              <div className="dir-icons"><Icons ref={this.IconsElement}/></div>
            </div>
      </div>
    );
  }
}
export default App;
