import React from "react";
import HeaderCord from "../../../assets/cord_1_kat.png";
import Newsletter from "../../components/newsletter/Newsletter";
import FacebookIcon from "../../../assets/FacebookIcon.png";
import InstagramIcon from "../../../assets/InstagramIcon.png";
import LinkedInIcon from "../../../assets/LinkedInIcon.png";

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
            <div className="align-content-center">
                <b>Social Media</b>
                <ul>
                    <li>Facebook<img src={FacebookIcon}/></li>
                    <li>Instagram<img src={InstagramIcon}/></li>
                    <li>LinkedIn<img src={LinkedInIcon}/></li>
                </ul>
            </div>
            <Newsletter/>
        </div>
    )
}

export default Contact;