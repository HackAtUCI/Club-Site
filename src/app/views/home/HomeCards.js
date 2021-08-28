import React from "react";

import { HomeCard } from "app/containers";

import HackUCI from "assets/previews/hackuci.jpg";
import ZotHacks from "assets/previews/zothacks.jpg";
import HackNights from "assets/previews/hacknights.jpg";
import Workshops from "assets/previews/workshops.jpg";

function HomeCards() {
  return (
    <div className="home-cards">
      <HomeCard image={HackUCI} title="HackUCI">
        HackUCI is the largest collegiate hackathon in Orange County. Each year, we bring
        like-minded individuals of different backgrounds and skill sets together to create something
        in 36 hours.
      </HomeCard>
      <HomeCard image={ZotHacks} title="ZotHacks">
        ZotHacks is a beginner-friendly hackathon where students with minimal computer science
        experience will learn new skills, take part in a community of creative people, and build
        projects.
      </HomeCard>
      <HomeCard image={HackNights} title="HackNights">
        HackNights is a hackathon-style event where you are welcome to come work on personal
        projects and team up with others. HackNights is a great opportunity to explore interests and
        meet new people.
      </HomeCard>
      <HomeCard image={Workshops} title="Workshops">
        Hack hosts several workshops each quarter which exposes attendees to numerous technologies,
        frameworks, and professional opportunities that will prepare them for their future careers.
      </HomeCard>
    </div>
  );
}

export default HomeCards;
