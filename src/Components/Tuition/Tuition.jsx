import React, { useState } from "react";
import { tuitionData } from "./data/tuitionData.js";
import {tuitionNotes} from "./data/tuitionNotes";
import TuitionColumn from "./TuitionColumn/TuitionColumn.jsx";
import Title from "../Title/Title.jsx";
import Subtitle from "../Subtitle/Subtitle.jsx";
import Notes from "../Notes/Notes";
import "./style.scss";

const Tuition = () => {

    const [isWeekly, setIsWeekly] = useState(true);

    return (
        <div className="tuition-container">
            <div className="tuition-title-container" >
                <Title titleName="Tuition" />
                <div className="subtitles-container">
                    <Subtitle subtitle="Registration Fee: $110 per child at enrollment and every August." />
                    <Subtitle subtitle="Non-refundable" />
                </div>
                <div className="time-button-container" >
                    <div onClick={() => setIsWeekly(true)} className={`btn ${isWeekly ? "tuition-btn-selected" : "tuition-btn"} border-left`}>Weekly</div>
                    <div onClick={() => setIsWeekly(false)} className={`btn ${!isWeekly ? "tuition-btn-selected" : "tuition-btn"} border-right`}>Monthly</div>
                </div>
            </div>
            <div className="tuition-data">
                <div className="side-bar">
                    <div className="cluster border-margin">
                        <h5>Full Week</h5>
                        <h7>Mon - Fri</h7>
                    </div>
                    <div className="cluster border-margin">
                        <h5>3 Days</h5>
                        <h7>Mon, Wed, Fri</h7>
                    </div>
                    <div className="cluster">
                        <h5>2 Days</h5>
                        <h7>Tue, Thr</h7>
                    </div>
                    <div className="cluster margin-horizontal-row">
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
            <div className="tuition-notes">
                <Notes noteList={tuitionNotes} />
            </div>
        </div>
    )
}

export default Tuition;