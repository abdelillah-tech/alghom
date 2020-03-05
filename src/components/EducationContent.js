import React,{Component} from 'react';

class EducationContent extends Component{

    render(){
        return(
            <div className="education">
                <div className="titles">
                    <h1>master 2 (en cours)</h1>
                    <p>ingenieurie des systemes complexes (Industrie Numerique)</p>
                </div>
                <div className="titles">
                    <h1>master 1 (2018 - 2019)</h1>
                    <p>électronique, énergie électrique et automatique</p>
                </div>
                <div className="titles">
                    <h1>lisence (2015 - 2018)</h1>
                    <p>telecomunication et infomartique industrielle</p>
                </div>
                <div className="titles">
                    <h1>BAC (2014 - 2015)</h1>
                    <p>mathématique</p>
                </div>
            </div>
        );
    }
}

export default EducationContent;