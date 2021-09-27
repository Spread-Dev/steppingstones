import React from "react";
import "./style.scss";
import Nav from "../Nav/Nav";
import TextParagraph from "../TextParagraph/TextParagraph";

const Footer = ({props}) => {

    return (
        <div className="footer-container" id="contact-hash">
            <div className="footer-top">
                <div className="nav-wrapper">
                    <Nav />
                </div>
            </div>
            <div className="footer-bottom">
                <div className="bottom-left">
                    <TextParagraph text="Content, including images, displayed on this website is protected by copyright laws. Downloading, republication, retransmission or reproduction of content on this website is strictly prohibited."/>
                </div>
                <div className="bottom-right">
                    <a href="tel:714-826-2311">
                        <p className="phone-number">714-826-2311</p>
                    </a>
                    <p>4460 Lincoln Ave. #5 Cypress, CA 90630</p>
                    <p>Monday-Friday 6:30 a.m.-6 p.m.</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;