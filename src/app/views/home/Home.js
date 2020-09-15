import React from "react";
import { Link } from "react-router-dom";
import { Card, HomeCard } from "../../containers";

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
    <div className='Home' style={props.style}>
      <div className='jumbotron jumbotron-fluid global-header'>
        <div className='home-header-usb'>
          <img src={HeaderMicroUSB} alt='micro_usb_cord' />
        </div>
        <div className='home-header-cord'>
          <img src={HeaderCord} alt='usb-cord' />
        </div>
        <div className='home-header-ants'>
          <img src={HeaderAnt} alt='ant' />
          <img src={HeaderAnt} alt='ant' />
          <img src={HeaderAnt} alt='ant' />
          <img src={HeaderAnt} alt='ant' />
        </div>
        <h1 className='home-header-font'>
          <b>Hack at UCI</b>
        </h1>
        <div className='d-flex justify-content-center'>
          <div className='involved-button'>
            <b>
              <a href='#newsletter'>Get Involved</a>
            </b>
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          <div className='home-arrow-down'> </div>
        </div>
      </div>

      <div className='home-content'>
        <div className='container text-left home-about home-container'>
          <h1>
            <b>About Us</b>
          </h1>
          <p>
            Hack at UCI is a student-run organization established to provide
            students with a platform to learn, grow, and develop technology of
            the future. Established in 2013, our mission is to promote, educate,
            and enhance the community around us by giving students the platform
            to learn and create technology.
          </p>
          <p>
            <b>
              <Link to='/about'>Read More About Us ></Link>
            </b>
          </p>
        </div>
        <div className='container text-left home-container'>
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
              <Link to='/event'>View Upcoming Events ></Link>
            </b>
          </p>
        </div>

        <div className='container card-container'>
          <div className='card-deck'>
            <Card>
              <HomeCard
                image={HackUCI}
                title='HackUCI'
                description='This is a short description of the event. There will be a
                  character limit to this description so that all event cards
                  have a consistent size. This card can fit a few sentences.'
              />
            </Card>
            <Card>
              <HomeCard
                image={ZotHacks}
                title='ZotHacks'
                description='This is a short description of the event. There will be a
                  character limit to this description so that all event cards
                  have a consistent size. This card can fit a few sentences.'
              />
            </Card>
            <Card>
              <HomeCard
                image={HackNights}
                title='HackNights'
                description='This is a short description of the event. There will be a
                  character limit to this description so that all event cards
                  have a consistent size. This card can fit a few sentences.'
              />
            </Card>
            <Card>
              <HomeCard
                image={Workshops}
                title='Workshops'
                description='This is a short description of the event. There will be a
                  character limit to this description so that all event cards
                  have a consistent size. This card can fit a few sentences.'
              />
            </Card>
          </div>
        </div>

        <div className='container text-left home-sponsors home-container'>
          <h1>
            <b>Sponsors</b>
          </h1>
          <p>
            Hack at UCI’s hackathons and events wouldn’t be possible without the
            aid from our amazing sponsors that have helped us over the years.
            Each donation goes right back into creating an outstanding
            experience for everyone who attends.
          </p>
          <p>
            <b>
              <Link to='/sponsors'>View Sponsorship Information ></Link>
            </b>
          </p>
        </div>

        <Newsletter />
      </div>
    </div>
  );
}

export default Home;
