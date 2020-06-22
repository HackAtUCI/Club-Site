import React, {Component} from "react";
import { Link } from "react-router-dom";

import "./Home.scss";
import HeaderMicroUSB from "../../../assets/micro_usb_cord_kat.png";
import HeaderCoord from "../../../assets/cord_1_kat.png";
import HeaderAnt from "../../../assets/ant_kat.png"
import HackUCI from "../../../assets/previews/hackuci.png";
import ZotHacks from "../../../assets/previews/zothacks.png";
import HackNights from "../../../assets/previews/hacknights.jpg";
import Workshops from "../../../assets/previews/workshops.jpg";

class Home extends Component {
    state = {
        email : '',
        firstName : '',
        lastName : '',
        gradYear : '',
    };

    handleReset = event => {
        this.setState( {
            email : '',
            firstName : '',
            lastName : '',
            gradYear : '',
        })
    };

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    };

    handleFirstNameChange = event => {
        this.setState({
            firstName: event.target.value
        })
    };

    handleLastNameChange = event => {
        this.setState({
            lastName: event.target.value
        })
    };

    handleYearChange = event => {
        this.setState({
            gradYear: event.target.value
        })
    };

    handleSubmit = event => {
        event.preventDefault();

        let userData = {
            email : this.state.email,
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            gradYear : this.state.gradYear,
        };

        console.log(userData['gradYear'].length);

        // Form Validation
        let passAll = true;

        if (userData['email'] === "") {
            passAll = false;
        }
        else if (!userData['email'].includes("."))  {
            passAll = false;
        }
        if (userData['firstName'] === "") {
            passAll = false;
        }
        if (userData['lastName'] === "") {
            passAll = false;
        }
        if (userData['gradYear'] === "") {
            passAll = false;
        }

        if (passAll) {
            // send axios request
            document.getElementById("userEmail").className = "form-control is-valid";
            document.getElementById("userFName").className = "form-control is-valid";
            document.getElementById("userLName").className = "form-control is-valid";
            document.getElementById("userYear").className = "form-control is-valid";
            this.handleReset();
        }
        else {
            console.log("ERROR: invalid form input")
        }
    };
    render() {
        return (
            <div className="Home" style={this.props.style}>
                <div className="jumbotron jumbotron-fluid home-header">
                    <div className="home-header-usb" ><img src={HeaderMicroUSB} alt="micro_usb_coord"/></div>
                    <div className="home-header-coord"><img src={HeaderCoord} alt="usb-coord"/></div>
                    <div className="home-header-ants">
                        <img src={HeaderAnt} alt="ant"/>
                        <img src={HeaderAnt} alt="ant"/>
                        <img src={HeaderAnt} alt="ant"/>
                    </div>
                    <h1 className="home-header-font"><b>Hack at UCI</b></h1>
                    <div className="d-flex justify-content-center">
                        <div className="involved-button"><b><a href="#home-newsletter">Get Involved</a></b></div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="home-arrow-down"> </div>
                    </div>
                </div>

                <div className="home-content">
                    <div className="container text-left home-about home-container">
                        <h1><b>About Us</b></h1>
                        <p>Hack at UCI is an organization that promotes developer culture by encouraging people to think creatively,
                            develop technology boldy, and pursue the leading edge of technical innovation.</p>
                        <p><b><Link to="/about">Read More About Us ></Link></b></p>
                    </div>
                    <div className="container text-left home-container">
                        <h1><b>Our Events</b></h1>
                        <p>We aim to celebrate UC Irvine's spirit of innovation by organizing ZotHacks, a beginner friendly
                            hackathon, and HackUCI, Orange County's largest hackathon. Furthermore, our organization regularly
                            host technical and professional development workshops that teach students industry-relevant skills.</p>
                        <p><b><Link to="/event">View Upcoming Events ></Link></b></p>
                    </div>

                    <div className="container card-container">
                        <div className="card-deck">
                            <div className="card">
                                <div className="card-body text-left">
                                    <img src={HackUCI} alt="HackUCI" className="card-img-top"/>
                                    <p className="card-title"><b>HackUCI</b></p>
                                    <p className="card-text">This is a short description of the event. There will be a character limit
                                        to this description so that all event cards have a consistent size. This card can fit a few sentences.</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body text-left">
                                    <img src={ZotHacks} alt="ZotHacks" className="card-img-top"/>
                                    <p className="card-title"><b>ZotHacks</b></p>
                                    <p className="card-text">This is a short description of the event. There will be a character limit
                                        to this description so that all event cards have a consistent size. This card can fit a few sentences.</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body text-left">
                                    <img src={HackNights} alt="HackNights" className="card-img-top"/>
                                    <p className="card-title"><b>HackNights</b></p>
                                    <p className="card-text">This is a short description of the event. There will be a character limit
                                        to this description so that all event cards have a consistent size. This card can fit a few sentences.</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body text-left">
                                    <img src={Workshops} alt="Workshops" className="card-img-top"/>
                                    <p className="card-title"><b>Workshops</b></p>
                                    <p className="card-text">This is a short description of the event. There will be a character limit
                                        to this description so that all event cards have a consistent size. This card can fit a few sentences.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container text-left home-sponsors home-container">
                        <h1><b>Sponsors</b></h1>
                        <p>Gummi bears gingerbread danish donut danish jelly jelly beans liquorice chocolate chips. Topping poweder
                            desert oat cake. Chocolate jujubles pudding toffee candy canes. Chocolate bar candy cake icing.</p>
                        <p><b><Link to="/sponsors">View Sponsorship Information ></Link></b></p>
                    </div>

                    <div id="home-newsletter" className="jumbotron jumbotron-fluid home-newsletter">
                        <div className="container text-left home-newsletter-container">
                            <h1 className="home-newsletter-left"><b>Subscribe to our newsletter!</b></h1>
                            <div className="home-newsletter-left">
                                <p className="home-newsletter-info">Get Involved! By filling your information and clicking "Subscribe", Hack at UCI will send you
                                    emails about the club's updates and events. </p>
                                <p className="home-mailchimp-info">Some text that we have to put here about Mailchimp's terms of service or something like that.</p>
                            </div>
                            <form className="newsletter-form" onSubmit={this.handleSubmit}>
                                <label>Email Address</label>
                                <input id="userEmail" type="email" className="form-control" onChange={this.handleEmailChange}/> <br/>
                                <label>First Name</label>
                                <input id="userFName" type="text" className="form-control" onChange={this.handleFirstNameChange}/> <br/>
                                <label>First Name</label>
                                <input id="userLName" type="text" className="form-control" onChange={this.handleLastNameChange}/> <br/>
                                <label>Graduating Year</label>
                                <input id="userYear" type="text" maxLength="4" className="form-control" onChange={this.handleYearChange}/> <br/>
                                <div className="d-flex text-left">
                                    <button className="involved-button"><b>Subscribe</b></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
