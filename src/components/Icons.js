import React,{Component} from 'react';
import About from '../svg/About.svg';
import Education from '../svg/Education.svg';
import Hobies from '../svg/Hobies.svg';
import Projects from '../svg/Projects.svg';
import Contact from '../svg/Contact.svg';
import Skills from '../svg/Skills.svg';

class Icons extends Component{
    state = {
        icon : About
    };
    changeIcon = (icoNum)=>{
        switch(icoNum){
            case 1 :
                this.setState({
                    icon: About
                });
                break;
            case 2 :
                this.setState({
                    icon: Hobies
                });
                break;
            case 3 :
                this.setState({
                    icon: Skills
                });
                break;
            case 4 :
                this.setState({
                    icon: Education
                });
                break;
            case 5 :
                this.setState({
                    icon: Projects
                });
                break;
            case 6 :
                this.setState({
                    icon: Contact
                });
                break;
            default:
                this.setState({
                    icon: About
                });
                break;
        }
    };
    render(){
        return(
            <div className="icon-cont">
                <img src={this.state.icon} className="icon" alt="icon"></img>
            </div>
        );
    }
}

export default Icons;