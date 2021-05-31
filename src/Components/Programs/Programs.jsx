import React from "react";
import "./style.scss";
import Squiggly from "../../images/Squiggly.jpg";
import ProgramData from "./data/ProgramData.js";
import ProgramBlock from "./ProgramBlock/ProgramBlock.jsx";


const Programs = () => {

    return (

        <div className="programs-container">
            <div className="title-box">
                <h1>Programs</h1>
                <img src={Squiggly} alt="squiggly" width="79px" height="7.5px" />
            </div>
            <div className="program-features">
                {ProgramData.map(program => (
                    <ProgramBlock {...program} />
                ))}

            </div>
        </div>
    )
}



export default Programs;