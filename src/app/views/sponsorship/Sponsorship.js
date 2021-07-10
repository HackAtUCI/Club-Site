import React from "react";

import "./Sponsorship.scss";

import { CurrentSponsors } from "app/components";

import HeaderCord from "../../../assets/cord_1_kat.png";
import HackStatHard from "../../../assets/hackuci_years_text.png";
import ZotStatHard from "../../../assets/zothacks_years_text.png";
import HackUCIButton from "../../../assets/hackuci_button.png";
import ZotHacksButton from "../../../assets/zothacks_button.png";

function Sponsorship(props) {
  return (
    <div className="Sponsorship" style={props.style}>
      <div className="jumbotron jumbotron-fluid global-header">
        <div className="home-header-cord">
          <img src={HeaderCord} alt="usb-cord" />
        </div>
        <div className="container global-description-container">
          <h1 class="home-header-font">Sponsor Information</h1>
        </div>
      </div>

      <div className="container sponsor-content">
        <div className="sponsor-content-heading flex-center">
          <b>HackUCI Profile</b>
        </div>
        <div className="sponsor-hackuci flex-center">
          <a href="https://www.hackuci.com">
            <img src={HackUCIButton} alt="hackUCI-button" />
          </a>
        </div>
        <div className="sponsor-stat-graph">
          <img
            className="sponsor-stat-img"
            src={HackStatHard}
            alt="hack-stat"
          />
        </div>
        <div className="sponsor-stats sponsor-hackuci-stats">
          <div className="sponsor-stat">
            <p>35%</p>
            <label>Female</label>
          </div>
          <div className="sponsor-stat">
            <p>92%</p>
            <label>Submitted a Project</label>
          </div>
          <div className="sponsor-stat">
            <p>46%</p>
            <label>First Time Hackers</label>
          </div>
          <div className="sponsor-stat">
            <p>17</p>
            <label>Majors</label>
          </div>
          <div className="sponsor-stat">
            <p>15</p>
            <label>Colleges</label>
          </div>
        </div>
        <div className="sponsor-content-anecdote" id="Bianca">
          <p>
            "I really enjoyed the experience of working on a coding project with
            other people that wanted to achieve the same goal! Though I was
            focused on coding the whole time, the environment itself was
            actually very peaceful and friendly so I felt at ease. I really
            appreciated that there were so many events that hackers could go to
            for de-stressing, like the Bob Ross painting or smash bros
            tournament."
          </p>
          <div className="text-right">
            <b> - Bianca, Hacker</b>
          </div>
        </div>
        <div className="sponsor-content-anecdote" id="Lizzie">
          <p>
            {" "}
            "Honestly, this was the best hackathon I've been to in a while.
            HackUCI had a great community, was well-run, and we saw good hacks,
            as well as built some connections with students for the future. I
            felt connected to more hackers than usual even though I hadn't met
            them before."
          </p>
          <div className="text-right">
            <b>- Lizzie, Twilio</b>
          </div>
        </div>
        
        <div>
          <div className="sponsor-content-heading flex-center">
            <b>Zothacks Profile</b>
          </div>
          <div className="sponsor-hackuci">
            <a href="https://zothacks.com/#/">
              <img src={ZotHacksButton} alt="Zothacks-button" />
            </a>
          </div>
          <div className="sponsor-stat-graph">
            <img className="sponsor-stat-img" src={ZotStatHard} alt="zot-stat" />
          </div>
          <div className="sponsor-stats sponsor-stats">
            <div className="sponsor-stat">
              <p>58%</p>
              <label>Female</label>
            </div>
            <div className="sponsor-stat">
              <p>90%</p>
              <label>Submitted a Project</label>
            </div>
            <div className="sponsor-stat">
              <p>92%</p>
              <label>Would Attend Another Hackathon</label>
            </div>
            <div className="sponsor-stat">
              <p>78%</p>
              <label>First Time Hackers</label>
            </div>
            <div className="sponsor-stat">
              <p>10</p>
              <label>Majors</label>
            </div>
          </div>
          <div
            className="sponsor-content-anecdote sponsor-zothack-anecdote"
            id="Cher"
          >
            <p>
              {" "}
              "ZotHacks was my very first hackathon, and I really liked how the
              event leaned towards beginners. I loved how helpful and enthusiastic
              my mentor was in guiding our group and the collaborative and
              encouraging environment the other hackers and mentors helped
              create."
            </p>
            <div className="text-right">
              <b>- Cher, Hacker</b>
            </div>
          </div>
        </div>
      </div>
      <CurrentSponsors />
    </div>
  );
}

export default Sponsorship;
