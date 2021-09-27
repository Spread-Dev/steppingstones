import React from "react";
import "./style.scss";

const BulletPoints = ({noteList}) => {

    return (
        <ul>
            {noteList.map(note => (
                <li className="note-item">{note}</li>
            ))}
        </ul>
    )
}

export default BulletPoints;