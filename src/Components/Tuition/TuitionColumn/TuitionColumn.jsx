import React from "react";
import "./style.scss";
import ColorTitle from "../../ColorTitle/ColorTitle.jsx";
import SubTitle from "../../Subtitle/Subtitle.jsx";

const TuitionColumn = ({ groupName,
    groupAge,
    fullDay,
    fullWeekPriceFullDay,
    threeDaysPrice,
    twoDaysPrice,
    halfDay,
    fullWeekPriceHalfDay }) => {

    return (

        <div className="column-container">
            <div className="color-title-container" >
                <ColorTitle title={groupName} />
            </div>
            <SubTitle subtitle={groupAge} />

        </div>
    )
}

export default TuitionColumn;