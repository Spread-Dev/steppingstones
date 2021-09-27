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
                <a href="#programs-hash">
                    <h3 className="nav-item">PROGRAMS</h3>
                </a>
                <a href="#tuition-hash">
                    <h3 className="nav-item">TUITION</h3>
                </a>
                <a href="#contact-hash">
                    <h3 className="nav-item">CONTACT</h3>
                </a>
                <a href="#enroll-hash">
                    <div className="btn enroll-btn">ENROLL</div>
                </a>
            </div>
        </div>
    )

}

export default Nav;