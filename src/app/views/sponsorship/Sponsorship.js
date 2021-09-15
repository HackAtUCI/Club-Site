import React from "react";

import "./Sponsorship.scss";

import { CurrentSponsors } from "app/components";
import { Header } from "app/containers";
import People from "assets/People.svg";

function Sponsorship(props) {
  return (
    <div className="Sponsorship" style={props.style}>
      <Header title="Sponsor Information"/>

      <div className="container sponsor-content">
        <h2>HackUCI Profile</h2>
        <div className="sponsor-hackuci flex-center">
          <form action="https://hackuci.com">
              <input type="submit" value="hackuci.com" />
          </form>
        </div>
        <div className="sponsor-attendees">
          <img src={People} alt="people"/>
          <span>500+ Attendees</span>
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
          <h2 className="sponsor-content-heading">ZotHacks Profile</h2>
          <div className="sponsor-hackuci">
            <form action="https://zothacks.com">
                <input type="submit" class="zothacks-btn" value="zothacks.com" />
            </form>
          </div>
          <div className="sponsor-attendees">
            <img src={People} alt="people"/>
            <span>60+ Attendees</span>
          </div>
          <div className="sponsor-stats">
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
              <label>First-Time Hackers</label>
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
      <section className="container">
        <h2>Our Past Sponsors</h2>
        <CurrentSponsors />
      </section>
    </div>
  );
}

export default Sponsorship;
