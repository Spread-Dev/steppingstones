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
            <div className="column-header">
                <div className="column-header-top">
                    <div className="color-title-container" >
                        <ColorTitle title={groupName} />
                    </div>
                    <SubTitle subtitle={groupAge} />
                </div>
                <div className="column-header-bottom">
                    <div className="horizontal-bar">
                        <p>{fullDay}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TuitionColumn;