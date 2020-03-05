import React,{Component} from 'react';

class SkillsContent extends Component{
    render(){
        return(
            <div className="skills">
                <div className="titles">
                    <h1>langages de programmation</h1>
                    <p>java&nbsp;&nbsp;&nbsp;python&nbsp;&nbsp;&nbsp;javascript&nbsp;&nbsp;&nbsp;php</p>
                </div>
                <div className="titles">
                    <h1>technologies backend</h1>
                    <p>springboot&nbsp;&nbsp;&nbsp;django</p>
                </div>
                <div className="titles">
                    <h1>technologies frontend</h1>
                    <p>react&nbsp;&nbsp;&nbsp;html&nbsp;&nbsp;&nbsp;css</p>
                </div>
                <div className="titles">
                    <h1>bases de donnees </h1>
                    <p>postgress&nbsp;&nbsp;&nbsp;mysql&nbsp;&nbsp;&nbsp;monogodb</p>
                </div>
                <div className="titles">
                    <h1>data science</h1>
                    <p>machine&nbsp;learning&nbsp;&nbsp;&nbsp;data&nbsp;viz</p>
                </div>
                <div className="titles">
                    <h1>autres</h1>
                    <p>figma&nbsp;&nbsp;&nbsp;git&nbsp;&nbsp;&nbsp;bash</p>
                </div>
            </div>
        );
    }
}
export default SkillsContent;