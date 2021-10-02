import React from "react";
import "./style.scss";
import "../../App.scss";
import ChildrenCTA from "../../images/ChildrenCTA.jpg";

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-left">
                <h1 className="header-cta">
                    A place for your<br />
                    little one to Learn<br />
                    and Grow
                </h1>
                <p>Positive environment, social activities, and healthy snacks!</p>
                <a href="#enroll-hash">
                    <div className="btn enroll-btn header-btn">ENROLL NOW</div>
                </a>
            </div>
            <div className="header-right">
                <img src={ChildrenCTA} alt="smiling children" />
            </div>
        </div>
    )
}

export default Header;