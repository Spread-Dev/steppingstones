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
            <PriceCell price={fullWeekPriceFullDay} divider={true} />
            <PriceCell price={threeDaysPrice} divider={true} />
            <PriceCell price={twoDaysPrice} divider={false} />
            {
                fullWeekPriceHalfDay != null
                    ? (
                        <>
                            <div className="horizontal-bar">
                                <p>{halfDay}</p>
                            </div>
                            <PriceCell price={fullWeekPriceHalfDay} divider={false} />
                        </>
                    )
                    : null
            }

        </div>
    )
}

const PriceCell = ({price, divider}) => {
    return (
        <>
            <div className={`price-cell${divider ? " divider" : ""}`}>
                <p>${price}</p>
            </div>
        </>

    )
}

export default TuitionColumn;