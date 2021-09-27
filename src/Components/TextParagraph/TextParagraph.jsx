import React from "react";
import "./style.scss";

const TextParagraph = ({text}) => {

    return (
        <>
            <p className="text-paragraph">
                {text}
            </p>
        </>
    )
}

export default TextParagraph;