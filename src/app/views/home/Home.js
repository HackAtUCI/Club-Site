import React from "react";
import { Link } from "react-router-dom";

import { CurrentSponsors, Newsletter } from "app/components";
import { Card, HomeCard, Header } from "app/containers";

import HackUCI from "assets/previews/hackuci.jpg";
import ZotHacks from "assets/previews/zothacks.jpg";
import HackNights from "assets/previews/hacknights.jpg";
import Workshops from "assets/previews/workshops.jpg";

import "./Home.scss";

function Home(props) {
  return (
    <div className='Home' style={props.style}>
      <Header type="home"/>

      <div className="home-content">
        <section className="container home-about">
          <h2>About Us</h2>
          <p>
            Hack at UCI is a student-run organization established to provide
            students with a platform to learn, grow, and develop technology of
            the future. Established in 2013, our mission is to promote, educate,
            and enhance the community around us by giving students the platform
            to learn and create technology.
          </p>
          <p>
            <Link to="/about">Read More About Us &gt;</Link>
          </p>
        </section>
        <div className="bg-gray">
          <section className="container home-events">
            <h2>Our Events</h2>
            <p>
              We aim to celebrate UC Irvine's spirit of innovation by organizing
              ZotHacks, a beginner friendly hackathon, and HackUCI, Orange
              County's largest hackathon. Furthermore, our organization
              regularly host technical and professional development workshops
              that teach students industry-relevant skills.
            </p>
            <p>
              <Link to="/events">View Upcoming Events &gt;</Link>
            </p>

            <div className='card-container'>
              <div className='card-deck'>
                <Card>
                  <HomeCard
                    image={HackUCI}
                    title='HackUCI'
                    description='HackUCI is the largest collegiate hackathon in Orange County.
                    Each year, we bring like minded individuals of different backgrounds and 
                    skill sets together to create something in 36 hours.'
                  />
                </Card>
                <Card>
                  <HomeCard
                    image={ZotHacks}
                    title='ZotHacks'
                    description='ZotHacks is a beginner-friendly hackathon where students with minimal 
                    computer science experience will learn new skills, take part in a community of 
                    creative people, and build projects.'
                  />
                </Card>
                <Card>
                  <HomeCard
                    image={HackNights}
                    title='HackNights'
                    description='HackNights is a hackathon-style event where you are welcome to come 
                    work on personal projects and team up with others. HackNights is a great opportunity 
                    to explore interests and meet new people.'
                  />
                </Card>
                <Card>
                  <HomeCard
                    image={Workshops}
                    title='Workshops'
                    description='Hack hosts several workshops each quarter which exposes attendees to numerous 
                    technologies, frameworks, and professional opportunities that will prepare them for their 
                    future careers.'
                  />
                </Card>
              </div>
            </div>
          </section>
        </div>

        <section className="container home-sponsors">
          <h2>Thank you to Our Sponsors</h2>
          <p>
            Hack at UCI’s hackathons and events wouldn’t be possible without the
            aid from our amazing sponsors that have helped us over the years.
            Each donation goes right back into creating an outstanding
            experience for everyone who attends.
          </p>
          <p>
            <Link to="/sponsors">View Sponsorship Information &gt;</Link>
          </p>
          <CurrentSponsors />
        </section>
      </div>

      <Newsletter />
    </div>
  );
}

export default Home;
