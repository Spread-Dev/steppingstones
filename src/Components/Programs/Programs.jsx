import React from "react";
import "./style.scss";
import ProgramData from "./data/ProgramData.js";
import ProgramBlock from "./ProgramBlock/ProgramBlock.jsx";
import TitleBox from "../Title/Title.jsx";


const Programs = () => {

    return (
        <div className="programs-container">
            <div className="title-container">
                <TitleBox titleName="Programs" />
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