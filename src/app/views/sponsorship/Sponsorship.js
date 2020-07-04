import React from "react";

import "./Sponsorship.scss";
import HeaderCord from "../../../assets/cord_1_kat.png";
import EightyFiveDegrees from "../../../assets/sponsors/85c.png";
import OneFiveOneSeven from "../../../assets/sponsors/1517.png";
import Ardent from "../../../assets/sponsors/ardent.png";
import Balsamiq from "../../../assets/sponsors/balsamiq.png";
import Bentley from "../../../assets/sponsors/bentley.png";
import Discord from "../../../assets/sponsors/discord.png";
import Edwards from "../../../assets/sponsors/edwards.png";
import Glidewell from "../../../assets/sponsors/glidewell.png";
import Insomnia from "../../../assets/sponsors/insomnia_cookies.png";
import Microsoft from "../../../assets/sponsors/microsoft.png";
import Sketch from "../../../assets/sponsors/sketch.png";
import TeaRiot from "../../../assets/sponsors/tea-riot.png";
import TexasInstrument from "../../../assets/sponsors/texas-instrument.png";
import Twilio from "../../../assets/sponsors/twilio-logo-red.png";
import UCIBren from "../../../assets/sponsors/ucibren.png";
import Vincit from "../../../assets/sponsors/vincit.png";
import HackStatHard from "../../../assets/hackStatPicture.png";
import ZotStatHard from "../../../assets/zotStatPicture.png";

function Sponsorship(props) {
  return (
    <div className="Sponsorship" style={props.style}>
        <div className="jumbotron jumbotron-fluid sponsor-header">
            <div className="home-header-cord"><img src={HeaderCord} alt="usb-cord"/></div>
            <div className="container sponsor-header-container text-left">
                <p className="sponsor-header-font"><b>Gummi bears gingerbread danish donut danish jelly jelly beans liquorice chocolate chips. Topping poweder
                    desert oat cake. Chocolate jujubles pudding toffee candy canes. Chocolate bar candy cake icing.</b></p>
            </div>
        </div>

        <div className="container sponsor-content sponsor-container">
            <div className="sponsor-content-heading"><b>HACKUCI PROFILE</b></div>
            <div className="sponsor-hackuci">
                <p className="sponsor-stat-left"><a href="https://www.hackuci.com">www.hackuci.com</a></p>
                <div className="sponsor-stat-graph"><img className="sponsor-stat-img" src={HackStatHard} alt="hack-stat"/></div>
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
                <p>"I really enjoyed the experience of working on a coding project with other people that wanted to
                    achieve the same goal! Though I was focused on coding the whole time, the environment itself was
                    actually very peaceful and friendly so I felt at ease. I really appreciated that there were so many
                    events that hackers could go to for de-stressing, like the Bob Ross painting or smash bros
                    tournament."</p>
                <div className="text-right"><b> - Bianca, Hacker</b></div>
            </div>
            <div className="sponsor-content-anecdote" id="Lizzie">
                <p> "Honestly, this was the best hackathon I've been to in a while.
                    HackUCI had a great community, was well-run, and we saw good hacks, as well as built some connections
                    with students for the future. I felt connected to more hackers than usual even though
                    I hadn't met them before."</p>
                <div className="text-right"><b>- Lizzie, Twilio</b></div>
            </div>
            <div className="sponsor-content-heading"><b>ZOTHACKS PROFILE</b></div>
            <div className="sponsor-hackuci">
                <p className="sponsor-stat-left"><a href="https://www.zothacks.com">www.zothacks.com</a></p>
                <div className="sponsor-stat-graph"><img className="sponsor-stat-img" src={ZotStatHard} alt="zot-stat"/></div>
            </div>
            <div className="sponsor-stats sponsor-zothacks-stats">
                <div className="sponsor-stat">
                    <p>32%</p>
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
            <div className="sponsor-content-anecdote sponsor-zothack-anecdote">
                <p> "ZotHacks wac my very first hackathon, and I really liked how the event leaned towards beginners.
                    I loved how helpful and enthusiastic my mentor was in guiding our group and the collaborative and
                    encouraging environment the other hackers and mentors helped create."</p>
                <div className="text-right"><b>- Cher, Hacker</b></div>
            </div>
        </div>

        <div className="container d-flex justify-content-center sponsor-previous"><b>Previous Sponsors</b></div>
        <div className="sponsor-list">
            <div className="sponsor-list-item"><img src={UCIBren} alt="UCIBren"/></div>
            <div className="sponsor-list-item"><img src={Bentley} alt="Bently"/></div>
            <div className="sponsor-list-item"><img src={Twilio} alt="Twilio"/></div>
            <div className="sponsor-list-item"><img src={TexasInstrument} alt="TexasInstrument"/></div>
            <div className="sponsor-list-item"><img src={Glidewell} alt="Glidewell"/></div>
            <div className="sponsor-list-item"><img src={Vincit} alt="Vincit"/></div>
            <div className="sponsor-list-item"><img src={Ardent} alt="Ardent"/></div>
            <div className="sponsor-list-item"><img src={Edwards} alt="Edwards"/></div>
            <div className="sponsor-list-item"><img src={Balsamiq} alt="Balsamiq"/></div>
            <div className="sponsor-list-item"><img src={OneFiveOneSeven} alt="OneFiveOneSeven"/></div>
            <div className="sponsor-list-item"><img src={TeaRiot} alt="TeaRiot"/></div>
            <div className="sponsor-list-item"><img src={Microsoft} alt="Microsoft"/></div>
            <div className="sponsor-list-item"><img src={Insomnia} alt="Insomnia"/></div>
            <div className="sponsor-list-item"><img src={Sketch} alt="Sketch"/></div>
            <div className="sponsor-list-item"><img src={Discord} alt="Discord"/></div>
            <div className="sponsor-list-item"><img src={EightyFiveDegrees} alt="EightyFiveDegrees"/></div>
        </div>
    </div>
  );
}

export default Sponsorship;
