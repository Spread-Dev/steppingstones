import React from "react";
import "./style.scss";

const ProgramBlock = ({ imgSrc, imgAlt, title, subtitle, noteList }) => {

    return (
        <div className="block-container">
            <div className="block-left">
                <img src={imgSrc} alt={imgAlt} />
            </div>
            <div className="block-right">
                <div className="text-container">
                    <div className="top">
                        <h3 className="program-title">{title}</h3>
                        <h6 className="program-subtitle">{subtitle}</h6>
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