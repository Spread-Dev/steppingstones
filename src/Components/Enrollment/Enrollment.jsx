import React from "react";
import "./style.scss";
import Title from "../Title/Title";
import BabbyPlayingBlocks from "../../images/BabbyPlayingBlocks.jpg";
import TextParagraph from "../TextParagraph/TextParagraph";

const Enrollment = ({props}) => {

    return (
        <div className="enrollment-container">
            <div className="enrollment-title-container">
                <Title titleName="Enrollment" />
            </div>
            <div className="enrollment-middle">
                <div className="enrollment-text-container">
                    <div className = "enrollment-first-paragraph">
                        <TextParagraph
                            text={"Enrollment is easy at Stepping Stones Learning Center. Print out the enrollment document, fill it out, and bring it in when you’re ready. We offer tours Monday through Friday from 8:00 AM to 5:00 PM. Make sure to call to ensure there is an opening in the age group you’re looking for."}
                        />
                    </div>
                    <TextParagraph
                        text={"You can save your child's spots by giving us a start date and leaving a two week deposit. The deposit will be applied to the first two weeks of your childs care. We will guarantee you a spot on the chosen date."}
                    />
                </div>
                <div className="enrollment-img-container">
                    <img src={BabbyPlayingBlocks} alt="Babby happily playing with some blocks."/>
                </div>
            </div>
            <div className="enrollment-bottom">
                <div className="btn enrollment-button packet">
                    ENROLLMENT PACKET
                </div>
                <div className="btn enrollment-button handbook">
                    PARENT HANDBOOK
                </div>
            </div>
        </div>
    )
}

export default Enrollment;