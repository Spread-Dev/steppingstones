import React from "react";
import { tuitionData } from "./data/tuitionData.js";
import TuitionColumn from "./TuitionColumn/TuitionColumn.jsx";
import "./style.scss";

const Tuition = () => {

    return (
        <div className="tuition-container">
            <div className="side-bar">
                <div className="cluster">
                    <h5>Full Week</h5>
                    <h7>Mon - Fri</h7>
                </div>
                <div className="cluster">
                    <h5>3 Days</h5>
                    <h7>Mon, Wed, Fri</h7>
                </div>
                <div className="cluster">
                    <h5>2 Days</h5>
                    <h7>Tue, Thr</h7>
                </div>
                {/* TODO ==> Add break here for half day row  */}
                <div className="cluster">
                    <h5>Full Week</h5>
                    <h7>Mon - Fri</h7>
                </div>
            </div>
            <div className="columns-container">
                {tuitionData.map(dataObj => (

                    <TuitionColumn {...dataObj} />

                ))}
            </div>
        </div>
    )
}

export default Tuition;