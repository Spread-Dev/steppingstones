import React from "react";
import "./style.scss";
import Squiggly from "../../images/Squiggly.jpg";

const Title = ({ titleName }) => {

    return (
        <div className="title-box">
            <h1>{titleName}</h1>
            <div className="sqiggle-img-container">
                <img className="squiggle-img" src={Squiggly} alt="squiggly" />
            </div>
        </div>
    )
}

export default Title;