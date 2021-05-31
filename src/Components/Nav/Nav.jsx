import React from "react";
import "./style.scss";
import "../../App.scss";

const Nav = () => {

    return (
        <div className="nav-container" >
            <div className="nav-left">
                <h3>STEPPING STONES</h3>
                <h5>Learning Center & Infant Care</h5>
            </div>
            <div className="nav-right">
                <h3 className="nav-item">PROGRAMS</h3>
                <h3 className="nav-item">TUITION</h3>
                <h3 className="nav-item">CONTACT</h3>
                <div className="btn enroll-btn">ENROLL</div>
            </div>
        </div>
    )

}

export default Nav;