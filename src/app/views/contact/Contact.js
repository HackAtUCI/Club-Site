import React from "react";
import "./Contact.scss";

import HeaderCord from "../../../assets/cord_1_kat.png";
import Newsletter from "../../components/newsletter/Newsletter";
import FacebookIcon from "../../../assets/FacebookIconPink.png";
import InstagramIcon from "../../../assets/InstagramIconPink.png";
import LinkedInIcon from "../../../assets/LinkedInLogoPink.png";


function Contact(props) {
    return (
        <div className="Contact" style={props.style}>
            <div className="jumbotron jumbotron-fluid global-header">
                <div className="home-header-cord">
                    <img src={HeaderCord} alt="usb-cord" />
                </div>
                <div className="global-description-container container">
                    <p className="global-description-font">
                        Gummi bears gingerbread danish donut danish jelly jelly beans liquorice chocolate cake.
                        Topping powder dessert oat cake (btw, this looks scarily similar to design@uci's contact page lol):
                        <br/>
                        <a href="mailto:hackuci@gmail.com">HackUCI@gmail.com</a>
                    </p>
                </div>
            </div>
            <div className="contact-body align-content-center">
                <label id="sm-title">Social Media</label>
                <div>
                    <div className="contact-icon d-inline-block">
                        <a href="https://www.facebook.com/UCI.Hack/">Facebook</a>
                        <div className="contact-icon-image">
                            <a href="https://www.facebook.com/UCI.Hack/">
                                <img src={FacebookIcon}/>
                            </a>
                        </div>
                    </div>
                    <div className="contact-icon d-inline-block">
                        <a href="https://www.instagram.com/hackatuci/">Instagram</a>
                        <div className="contact-icon-image">
                            <a href="https://www.instagram.com/hackatuci/">
                                <img src={InstagramIcon}/>
                            </a>
                        </div>
                    </div>
                    <div className="contact-icon d-inline-block">
                        <a href="https://www.linkedin.com/company/hackuci">LinkedIn</a>
                        <div className="contact-icon-image">
                            <a href="https://www.linkedin.com/company/hackuci">
                                <img src={LinkedInIcon}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Newsletter/>
        </div>
    )
}

export default Contact;