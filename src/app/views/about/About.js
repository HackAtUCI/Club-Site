import React, { Component } from "react";
import { Link } from "react-router-dom";

import TeamCard from "../../containers/teamcard/TeamCard.js";

import "./About.scss";
import HeaderCord from "../../../assets/cord_1_kat.png";
import HeaderAnt from "../../../assets/ant_kat.png";

import Areeta from "../../../assets/team/corporate/areeta.jpg";
import Brandon from "../../../assets/team/corporate/brandon.jpg";
import Christian from "../../../assets/team/corporate/christian.jpg";
import Tedrick from "../../../assets/team/corporate/tedrick.jpg";

import Karen from "../../../assets/team/marketing/karen.jpg";
import Kathleen from "../../../assets/team/marketing/kathleen.jpg";
import Kevin from "../../../assets/team/marketing/kevin.jpg";
import Lasse from "../../../assets/team/marketing/lasse.jpg";
import Noreen from "../../../assets/team/marketing/noreen.jpg";
import Riley from "../../../assets/team/marketing/riley.jpg";
import Tiffany from "../../../assets/team/marketing/tiffany.jpg";
import Tingting from "../../../assets/team/marketing/tingting.jpg";

import Ameya from "../../../assets/team/logistics/ameya.jpg";
import JP from "../../../assets/team/logistics/jp.jpg";
import Kaeley from "../../../assets/team/logistics/kaeley.jpg";
import Kamesh from "../../../assets/team/logistics/kamesh.jpg";
import Sahil from "../../../assets/team/logistics/sahil.jpg";
import Zach from "../../../assets/team/logistics/zach.jpg";

class About extends Component {
  render() {
    // noinspection HtmlUnknownAnchorTarget
    return (
      <div className="about" style={this.props.style}>
        <div className="jumbotron jumbotron-fluid home-header">
          <div className="home-header-cord">
            <img src={HeaderCord} alt="usb-cord" />
          </div>
          <div className="home-header-ants">
            <img src={HeaderAnt} alt="ant" />
            <img src={HeaderAnt} alt="ant" />
            <img src={HeaderAnt} alt="ant" />
          </div>
          <div className="description-container container">
            <p className="about-description-font">
              Hack at UCI is an organization that promotes developer culture by
              encouraging people to think creatively, develop technology boldly,
              and pursue the leading edge of technical innovation.
            </p>
          </div>
        </div>

        <div className="about-content">
          <div className="container about-description">
            <p>
              There might be some text here explaining Hack at UCI’s mission
              statement, or maybe some general information about the different
              teams we have (Corporate, Marketing, Logistics, Graphics, Tech).
              I’m not sure. But I’m just going to put this placeholder text here
              so that I have a better idea of what things might look like lol.
              I’m also not too sure how we should organize our members. By team?
              Or maybe just put the directors near the top?
            </p>
          </div>
          <div className="container about-teams">
            <h1>
              <b>Our Teams</b>
            </h1>
            <div>
              <h1 className="team-title">
                <b> Corporate</b>
              </h1>
              <div className="team-grid">
                <TeamCard
                  firstName="Areeta"
                  lastName="Wong"
                  profpic={Areeta}
                  linkedinUrl="https://www.linkedin.com/in/areetaw/"
                  position="Director"
                />
                <TeamCard
                  firstName="Christian"
                  lastName="Chung"
                  profpic={Christian}
                  linkedinUrl="https://www.linkedin.com/in/christian-chun-57a88313a/"
                  position="Corporate Organizer"
                />
                <TeamCard
                  firstName="Brandon"
                  lastName="Khong"
                  profpic={Brandon}
                  position="Corporate Organizer"
                />
                <TeamCard
                  firstName="Lauren"
                  lastName="Yoo"
                  linkedinUrl="http://www.linkedin.com/in/laurenyoo620"
                  position="Corporate Organizer"
                />
                <TeamCard
                  firstName="Kingsley"
                  lastName="Szeto"
                  linkedinUrl="https://www.linkedin.com/in/kingsley-szeto/"
                  position="Corporate Organizer"
                />
                <TeamCard
                  firstName="Mingjia"
                  lastName="Wang"
                  linkedinUrl="https://www.linkedin.com/in/mingjia-wang/"
                  position="Corporate Organizer"
                />
                <TeamCard
                  firstName="Crystal"
                  lastName="Lee"
                  linkedinUrl="https://www.linkedin.com/in/crystalleesf/"
                  position="Corporate Organizer"
                />
                <TeamCard
                  firstName="Sarang"
                  lastName="Vadali"
                  position="Corporate Organizer"
                />
                <TeamCard
                  firstName="Anuj"
                  lastName="Shah"
                  position="Alumni Mentor"
                />
                <TeamCard
                  firstName="Tedrick"
                  lastName="Wong"
                  profpic={Tedrick}
                  position="Alumni Mentor"
                />
                <TeamCard
                  firstName="Sean"
                  lastName="Victory"
                  position="Alumni Mentor"
                />
              </div>
            </div>
            <div>
              <h1 className="team-title">
                <b> Marketing</b>
              </h1>
              <div className="team-grid">
                <TeamCard
                  firstName="Riley"
                  lastName="Champion"
                  profpic={Riley}
                  position="Marketing Director"
                />
                <TeamCard
                  firstName="Karen"
                  lastName="Vu"
                  profpic={Karen}
                  position="Marketing Organizer"
                />
                <TeamCard
                  firstName="Sylvester"
                  lastName="Yue"
                  position="Marketing Organizer"
                />
                <TeamCard
                  firstName="Hannah"
                  lastName="Limary"
                  linkedinUrl="https://www.linkedin.com/in/hannah-limary/"
                  position="Marketing Organizer"
                />
                <TeamCard
                  firstName="Tyler"
                  lastName="Au"
                  linkedinUrl="https://www.linkedin.com/in/tylerau/"
                  position="Marketing Organizer"
                />
                <TeamCard
                  firstName="Maya"
                  lastName="Schwartz"
                  linkedinUrl="https://www.linkedin.com/in/maya-schwarz/"
                  position="Marketing Organizer"
                />
                <TeamCard
                  firstName="Tiffany"
                  lastName="Liang"
                  profpic={Tiffany}
                  position="Marketing Intern"
                />
                <TeamCard
                  firstName="Lasse"
                  lastName="Nordahl"
                  profpic={Lasse}
                  linkedinUrl="https://www.linkedin.com/in/lassenordahl/"
                  position="Tech Organizer"
                />
                <TeamCard
                  firstName="Kevin"
                  lastName="Fang"
                  profpic={Kevin}
                  position="Tech Organizer"
                />
                <TeamCard
                  firstName="Abhi"
                  lastName="Tumu"
                  linkedinUrl="https://www.linkedin.com/in/abhinav-tumu-863635170/"
                  position="Tech Organizer"
                />
                <TeamCard
                  firstName="Nathan"
                  lastName="Tang"
                  linkedinUrl="https://www.linkedin.com/in/nathanwtang"
                  position="Tech Organizer"
                />
                <TeamCard
                  firstName="Kathleen"
                  lastName="Zhou"
                  profpic={Kathleen}
                  linkedinUrl="https://www.linkedin.com/in/kathleen-zhou/"
                  position="Graphics Organizer"
                />
                <TeamCard
                  firstName="Noreen"
                  lastName="Delossantos"
                  profpic={Noreen}
                  position="Graphics Organizer"
                />
                <TeamCard
                  firstName="Ryan"
                  lastName="Hartanto"
                  linkedinUrl="https://www.linkedin.com/in/ryan-hartanto-b49072171/"
                  position="Graphics Organizer"
                />
                <TeamCard
                  firstName="Wesley"
                  lastName="Tseng"
                  position="Alumni Mentor"
                />
                <TeamCard
                  firstName="Wei-Wern (Vivienne)"
                  lastName="Ooi"
                  position="Alumni Mentor"
                />
                <TeamCard
                  firstName="Ryan"
                  lastName="Luu"
                  position="Alumni Mentor"
                />
                <TeamCard
                  firstName="Ting Ting"
                  lastName="Huang"
                  profpic={Tingting}
                  position="Alumni Mentor"
                />
              </div>
            </div>
            <div>
              <h1 className="team-title">
                <b> Logistics</b>
              </h1>
              <div className="team-grid">
                <TeamCard
                  firstName="Ameya"
                  lastName="Mandalik"
                  profpic={Ameya}
                  position="Logistics Director"
                />
                <TeamCard
                  firstName="Zachary"
                  lastName="Pinto"
                  profpic={Zach}
                  linkedinUrl="https://www.linkedin.com/in/zacharypinto/"
                  position="Logistics Director"
                />
                <TeamCard
                  firstName="Kaeley"
                  lastName="Lenard"
                  profpic={Kaeley}
                  linkedinUrl="https://www.linkedin.com/in/kaeleylenard"
                  position="Logistics Organizer"
                />
                <TeamCard
                  firstName="Sahil"
                  lastName="Railkar"
                  profpic={Sahil}
                  position="Logistics Organizer"
                />
                <TeamCard
                  firstName="Tristan"
                  lastName="Jogminas"
                  linkedinUrl="https://www.linkedin.com/in/tristan-jogminas/"
                  position="Logistics Organizer"
                />
                <TeamCard
                  firstName="Rieko"
                  lastName="Konishi"
                  linkedinUrl="www.linkedin.com/in/rieko-konishi"
                  position="Logistics Organizer"
                />
                <TeamCard
                  firstName="Ellise"
                  lastName="Limjoco"
                  linkedinUrl="https://www.linkedin.com/in/ell-ml/"
                  position="Logistics Organizer"
                />
                <TeamCard
                  firstName="Chase"
                  lastName="Carnaroli"
                  linkedinUrl="https://www.linkedin.com/in/ChaseCarnaroli/"
                  position="Logistics Organizer"
                />
                <TeamCard
                  firstName="Jeremy"
                  lastName="Yang"
                  position="Alumni Mentor"
                />
                <TeamCard
                  firstName="Jean-Paul (JP)"
                  lastName="Nguyen"
                  profpic={JP}
                  position="Alumni Mentor"
                />
                <TeamCard
                  firstName="Vedula"
                  lastName="Kamesh"
                  profpic={Kamesh}
                  position="Alumni Mentor"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
