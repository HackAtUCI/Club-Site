import React from "react";
import { Carousel } from "react-bootstrap";

import "./Home.scss";

function Home(props) {
  return (
    <div className="Home" style={props.style}>

        <div className="jumbotron jumbotron-fluid home-header">
            <h1 className="home-header-font"><b>Hack at UCI</b></h1>
            <div className="d-flex justify-content-center">
                <div className="involved-button"><b>Get Involved</b></div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="home-arrow-down"> </div>
            </div>
        </div>

        <div className="container text-left home-about home-contanier">
            <h1><b>About Us</b></h1>
            <p>Hack at UCI is an organization that promotes developer culture by encouraging people to think creatively,
                develop technology boldy, and pursue the leading edge of technical innovation.</p>
            <p><a><b>Read More About Us ></b></a></p>
        </div>
        <div className="container text-left home-contanier">
            <h1><b>Our Events</b></h1>
            <p>We aim to celebrate UC Irvine's spirit of innovation by organizing ZotHacks, a beginner friendly
                hackathon, and HackUCI, Orange County's largest hackathon. Furthermore, our organization regularly
                host technical and professional development workshops that teach students industry-relevant skills.</p>
            <p><a><b>View Upcoming Events ></b></a></p>
        </div>
        <div className="container text-left home-contanier">
            <Carousel> </Carousel>
        </div>
        <div className="container text-left home-sponsors home-contanier">
            <h1><b>Sponsors</b></h1>
            <p>Gummi bears gingerbread danish donut danish jelly jelly beans liquorice chocolate chips. Topping poweder
                desert oat cake. Chocolate jujubles pudding toffee candy canes. Chocolate bar candy cake icing.</p>
            <p><a><b>View Sponsorship Information ></b></a></p>
        </div>
    </div>
  );
}

export default Home;
