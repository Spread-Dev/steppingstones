import React from "react";
import "./style.scss";
import ColorTitle from "../../ColorTitle/ColorTitle.jsx";
import Subtitle from "../../Subtitle/Subtitle.jsx";

const ProgramBlock = ({ imgSrc, imgAlt, title, subtitle, noteList }) => {

    return (
        <div className="block-container">
            <div className="block-left">
                <img src={imgSrc} alt={imgAlt} />
            </div>
            <div className="block-right">
                <div className="text-container">
                    <div className="top">
                        <div className="program-title">
                            <ColorTitle title={title} />
                        </div>
                        <Subtitle subtitle={subtitle} />
                    </div>
                    <div className="bot">
                        <ul>
                            {noteList.map(note => (
                                <li className="note-item">{note}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgramBlock;