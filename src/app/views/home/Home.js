import React from 'react';
import { Link } from 'react-router-dom';
import { CurrentSponsors } from 'app/components';
import { Card, HomeCard, Header } from '../../containers';

import './Home.scss';
import HackUCI from '../../../assets/previews/hackuci.jpg';
import ZotHacks from '../../../assets/previews/zothacks.jpg';
import HackNights from '../../../assets/previews/hacknights.jpg';
import Workshops from '../../../assets/previews/workshops.jpg';
import Newsletter from '../../components/newsletter/Newsletter';

function Home(props) {
  // noinspection HtmlUnknownAnchorTarget
  return (
    <div className='Home' style={props.style}>
      <Header type="home"/>

      <div className='home-content'>
        <div className='text-left home-about home-container'>
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
              <Link to='/about'>Read More About Us &gt;</Link>
            </b>
          </p>
        </div>
        <div className='gray-background'>
          <div className='text-left home-container'>
            <h1>
              <b>Our Events</b>
            </h1>
            <p>
              We aim to celebrate UC Irvine's spirit of innovation by organizing
              ZotHacks, a beginner friendly hackathon, and HackUCI, Orange
              County's largest hackathon. Furthermore, our organization
              regularly host technical and professional development workshops
              that teach students industry-relevant skills.
            </p>
            <p>
              <b>
                <Link to='/events'>View Upcoming Events &gt;</Link>
              </b>
            </p>
          </div>

          <div className='container card-container'>
            <div className='card-deck'>
              <Card>
                <HomeCard
                  image={HackUCI}
                  title='HackUCI'
                  descrip tion='HackUCI is the largest collegiate hackathon in Orange County.
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
        </div>

        <div className='text-left home-sponsors home-container'>
          <h1>
            <b>Thank you to Our Sponsors</b>
          </h1>
          <p>
            Hack at UCI’s hackathons and events wouldn’t be possible without the
            aid from our amazing sponsors that have helped us over the years.
            Each donation goes right back into creating an outstanding
            experience for everyone who attends.
          </p>
          <p>
            <b>
              <Link to='/sponsors'>View Sponsorship Information &gt;</Link>
            </b>
          </p>
        </div>

        <CurrentSponsors />

        <Newsletter />
      </div>
    </div>
  );
}

export default Home;
