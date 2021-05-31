import React from "react";
import "./style.scss";
import "../../App.scss";

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
                <div className="btn enroll-btn header-btn">ENROLL NOW</div>
            </div>
            <div className="header-right">

            </div>
        </div>
    )
}

export default Header;