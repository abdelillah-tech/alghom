import React,{Component} from 'react';
import batouch from '../svg/batouch-turfu.png';

class AboutContent extends Component {
    render(){
        return(
            <div className="about">
                <div className="photo">
                    <img src={batouch} alt="batouch" id="batouch" height="150px" width="150px"></img>
                    <svg id="circles-rot"width="300" height="303" viewBox="0 0 194 197" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                        <g id="Circles">
                            <path id="small-circle" d="M172 98C172 115.3 166.019 132.069 155.07 145.464C144.122 158.859 128.879 168.057 111.925 171.5C94.9706 174.943 77.3474 172.418 62.0414 164.354C46.7354 156.29 34.6878 143.183 27.94 127.253M43.967 44.967C52.7034 36.2305 63.4629 29.7877 75.2892 26.2112C87.1154 22.6346 99.6421 22.0351 111.756 24.4659" stroke="#164AFF" strokeWidth="2"/>
                        <g id="med-circle">
                        
                            <path d="M27.6225 144.837C37.149 158.793 50.6629 169.551 66.3991 175.707L65.6706 177.57C49.5597 171.267 35.7239 160.253 25.9707 145.965C16.2174 131.676 11 114.779 11 97.4793H13C13 114.377 18.0961 130.881 27.6225 144.837Z" fill="#164AFF"/>
                            <path d="M181 97.4793C181 80.815 176.043 64.5273 166.761 50.6878C157.478 36.8484 144.289 26.0827 128.871 19.7601L129.629 17.9096C145.415 24.3828 158.918 35.4048 168.422 49.5738C177.925 63.7427 183 80.4182 183 97.4793H181Z" fill="#164AFF"/>                            
                        </g>
                            <path id="big-circle" d="M192 98.5C192 151.795 149.467 195 97 195M2 98.5C2 45.2045 44.5329 2 97 2" stroke="#164AFF" strokeWidth="3"/>
                        </g>
                    </svg>
                </div>
                <div className="my-dis">
                    <p>
                        GHOMARI Abdelillah, 23 ans. 
                        Développeur et Data enthusiast avec de multiples compétences en informatique et en statistiques et une vision créative, 
                        j'ai une grande capacité en résolution de problèmes, 
                        passionné par différentes nouvelles technologies telles que développement web et Deep Learning, 
                        mon travail acharné, 
                        mon esprit critique et ma capacité d'adaptation me permettent de relever les défis qui se présentent à moi. 
                    </p>
                </div>
            </div>
        );
    }
}
export default AboutContent;