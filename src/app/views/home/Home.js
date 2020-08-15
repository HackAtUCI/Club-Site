import React from "react";
import { Link } from "react-router-dom";

import "./Home.scss";
import HeaderMicroUSB from "../../../assets/micro_usb_cord_kat.png";
import HeaderCord from "../../../assets/cord_1_kat.png";
import HeaderAnt from "../../../assets/ant_kat.png";
import HackUCI from "../../../assets/previews/hackuci.png";
import ZotHacks from "../../../assets/previews/zothacks.png";
import HackNights from "../../../assets/previews/hacknights.jpg";
import Workshops from "../../../assets/previews/workshops.jpg";
import Newsletter from "../../components/newsletter/Newsletter";

function Home(props) {
  // noinspection HtmlUnknownAnchorTarget
  return (
    <div className="Home" style={props.style}>
      <div className="jumbotron jumbotron-fluid global-header">
        <div className="home-header-usb">
          <img src={HeaderMicroUSB} alt="micro_usb_cord" />
        </div>
        <div className="home-header-cord">
          <img src={HeaderCord} alt="usb-cord" />
        </div>
        <div className="home-header-ants">
          <img src={HeaderAnt} alt="ant" />
          <img src={HeaderAnt} alt="ant" />
          <img src={HeaderAnt} alt="ant" />
          <img src={HeaderAnt} alt="ant" />
        </div>
        <h1 className="home-header-font">
          <b>Hack at UCI</b>
        </h1>
        <div className="d-flex justify-content-center">
          <div className="involved-button">
            <b>
              <a href="#newsletter">Get Involved</a>
            </b>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="home-arrow-down"> </div>
        </div>
      </div>

      <div className="home-content">
        <div className="container text-left home-about home-container">
          <h1>
            <b>About Us</b>
          </h1>
          <p>
            Hack at UCI is an organization that promotes developer culture by
            encouraging people to think creatively, develop technology boldy,
            and pursue the leading edge of technical innovation.
          </p>
          <p>
            <b>
              <Link to="/about">Read More About Us ></Link>
            </b>
          </p>
        </div>
        <div className="container text-left home-container">
          <h1>
            <b>Our Events</b>
          </h1>
          <p>
            We aim to celebrate UC Irvine's spirit of innovation by organizing
            ZotHacks, a beginner friendly hackathon, and HackUCI, Orange
            County's largest hackathon. Furthermore, our organization regularly
            host technical and professional development workshops that teach
            students industry-relevant skills.
          </p>
          <p>
            <b>
              <Link to="/events">View Upcoming Events ></Link>
            </b>
          </p>
        </div>

        <div className="container card-container">
          <div className="card-deck">
            <div className="card">
              <div className="card-body text-left">
                <img className="card-img-top"  src={HackUCI} alt="HackUCI"/>
                <p className="card-title">
                  <b>HackUCI</b>
                </p>
                <p className="card-text">
                  This is a short description of the event. There will be a
                  character limit to this description so that all event cards
                  have a consistent size. This card can fit a few sentences.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body text-left">
                <img src={ZotHacks} alt="ZotHacks" className="card-img-top" />
                <p className="card-title">
                  <b>ZotHacks</b>
                </p>
                <p className="card-text">
                  This is a short description of the event. There will be a
                  character limit to this description so that all event cards
                  have a consistent size. This card can fit a few sentences.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body text-left">
                <img
                  src={HackNights}
                  alt="HackNights"
                  className="card-img-top"
                />
                <p className="card-title">
                  <b>HackNights</b>
                </p>
                <p className="card-text">
                  This is a short description of the event. There will be a
                  character limit to this description so that all event cards
                  have a consistent size. This card can fit a few sentences.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body text-left">
                <img src={Workshops} alt="Workshops" className="card-img-top" />
                <p className="card-title">
                  <b>Workshops</b>
                </p>
                <p className="card-text">
                  This is a short description of the event. There will be a
                  character limit to this description so that all event cards
                  have a consistent size. This card can fit a few sentences.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container text-left home-sponsors home-container">
          <h1>
            <b>Sponsors</b>
          </h1>
          <p>
            Gummi bears gingerbread danish donut danish jelly jelly beans
            liquorice chocolate chips. Topping poweder desert oat cake.
            Chocolate jujubles pudding toffee candy canes. Chocolate bar candy
            cake icing.
          </p>
          <p>
            <b>
              <Link to="/sponsors">View Sponsorship Information ></Link>
            </b>
          </p>
        </div>

        <Newsletter />
      </div>
    </div>
  );
}

export default Home;
