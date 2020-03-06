import React, { Component } from 'react';
import './App.css';

import About from './svg/About.svg';
import Education from './svg/Education.svg';
import Hobies from './svg/Hobies.svg';
import Projects from './svg/Projects.svg';
import Contact from './svg/Contact.svg';
import Skills from './svg/Skills.svg';

import AboutContent from './components/AboutContent';
import ContactContent from './components/ContactContent';
import SkillsContent from './components/SkillsContent';
import EducationContent from './components/EducationContent';
import ProjectsContent from './components/ProjectsContent';
import HobiesContent from './components/HobiesContent';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      num: 1,
      toggle: true,
      show: <AboutContent />
    }
    this.IconsElement = React.createRef();
  }

  Toggle = () => {
    this.setState({toggle:!this.state.toggle})
  }

  handleClick = (numIcon, showContent) => {
    this.setState({
      num: numIcon,
    });
    this.getComponent();
  }

  getComponent() {
    let component;
    let icon;
    switch (this.state.num) {
      case 1:
        component = <AboutContent />;
        icon = About;
        break;
      case 2:
        component = <HobiesContent />;
        icon = Hobies;
        break;
      case 3:
        component = <SkillsContent />;
        icon = Skills; 
        break;
      case 4:
        component = <EducationContent />;
        icon = Education;
        break;
      case 5:
        component = <ProjectsContent />;
        icon = Projects;
        break;
      case 6:
        component = <ContactContent />;
        icon = Contact;
        break;
      default:
        component = <AboutContent />;
        icon = About;
        break;
    }
    return {0 : component, 1 : icon};
  }

  render() {
    return (
      <div className="App">
        <header>
          <div className="header-cont">
            <button onClick={this.Toggle}>
              <img src={this.getComponent()[1]} className="icon" alt="icon"></img>
            </button>
            <h1>AL/GHOM</h1>
          </div>
        </header>
        <div className="main-view">
          <div className={this.state.toggle ? "side-nav hide-nav" : "side-nav"}>
            <div className="nav-cont">
              <button onClick={() => this.handleClick(1)}>a propos</button>
              <button onClick={() => this.handleClick(2)}>passions</button>
              <button onClick={() => this.handleClick(3)}>competences</button>
              <button onClick={() => this.handleClick(4)}>parcours</button>
              <button onClick={() => this.handleClick(5)}>travaux</button>
              <button onClick={() => this.handleClick(6)}>contacts</button>
            </div>
          </div>
          <div className="description">{this.getComponent()[0]}</div>
          <div className="dir-icons">
            <div className="icon-cont">
              <img src={this.getComponent()[1]} className="icon" alt="icon"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
