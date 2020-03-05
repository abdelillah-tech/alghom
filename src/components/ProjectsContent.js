import React,{Component} from 'react';
import Portfo from '../svg/Portfo.gif';
import Talend from '../svg/Talend.png';
import Robot from '../svg/Robot.gif';
import Dataviz from '../svg/Dataviz.gif';

class ProjectsContent extends Component{
    render(){
        return(
            <div className="projects">
                <div className="card">
                    <span><img src={Portfo} alt="portfo gif"></img></span>
                    <div className="dis-pro">
                        <h2>Ce portfolio</h2>
                        <p>Compétences utilisées :</p>
                        <p>React, CSS, html, node, figma.</p>
                    </div>
                </div>
                <div className="card">
                    <span><img src={Talend} alt="talend project"></img></span>
                    <div className="dis-pro">
                        <h2>solution décisionnelle pour une entreprise portuaire</h2>
                        <p>Compétences utilisées :</p>
                        <p>Talend, Oracle SQL.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="dis-pro">
                        <h2>assistance d’un visiteur de parc d’attractions</h2>
                        <p>Compétences utilisées :</p>
                        <p>Java, Java RMI, Java swing.</p>
                    </div>
                </div>
                <div className="card">
                    <span><img src={Dataviz} alt="dataviz gif"></img></span>
                    <div className="dis-pro"> 
                        <h2>outil de visualisation dynamique pour les données à 4 variables</h2>
                        <p>Compétences utilisées :</p>
                        <p>Python, fichiers CSV.</p>
                    </div>
                </div>
                <div className="card">
                    <span><img src={Robot} alt="robot gif"></img></span>
                    <div className="dis-pro">
                        <h2>système de navigation intentionnelle dans un environnement connu</h2>
                        <p>Compétences utilisées :</p>
                        <p>Java, C Arduino, Arduino, Java swing, Bluetooth.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectsContent;