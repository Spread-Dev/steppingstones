import React from "react";
import "./style.scss";
import Squiggly from "../../images/Squiggly.jpg";

const TitleBox = ({ titleName }) => {

    return (
        <div className="title-box">
            <h1>{titleName}</h1>
            <img src={Squiggly} alt="squiggly" width="79px" height="7.5px" />
        </div>
    )
}

export default TitleBox;