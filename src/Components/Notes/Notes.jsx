import React from "react";
import "./style.scss";

const Notes = ({noteList}) => {

    return (
        <ul>
            {noteList.map(note => (
                <li className="note-item">{note}</li>
            ))}
        </ul>
    )
}

export default Notes;