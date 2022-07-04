import React from "react";
import { Link } from "react-router-dom";

import { CurrentSponsors, Newsletter } from "app/components";
import { Header } from "app/containers";

import HomeCards from "./HomeCards";
import "./Home.scss";

function Home() {
  return (
    <div className="Home">
      <Header title="Hack at UCI">
        <a className="involved-button" href="#newsletter">
          Get Involved
        </a>
      </Header>

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
            <HomeCards />
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
