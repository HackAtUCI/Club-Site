import React, { useState } from "react";
import "./Recruit.scss";

import Collapse from "react-bootstrap/Collapse";

import { Header } from "app/containers";
import CommitteeDropdownButton from "app/views/recruit/CommitteeDropdownButton";

import LightbulbIcon from "assets/fa-icons/lightbulb.svg";
import MagnifyingGlassIcon from "assets/fa-icons/magnifying-glass.svg";
import GearIcon from "assets/fa-icons/gear.svg";


function Recruit(props) {

    return (
    <>
        <div className="Recruit" style={props.style}>
            <Header title="Recruiting" children="Deadline closes Month DD, YYYY 11:29PM" />
        </div>

        <div>
            <section className="container adjective-grid">
                <div className="adjective-card">
                    <img src={LightbulbIcon} alt="lightbulb" />
                    <h3>Learn</h3>
                    <p>We host workshops and hackathons that support people as they learn industry-relevant skills.</p>
                </div>
                <div className="adjective-card">
                    <img src={MagnifyingGlassIcon} alt="magnifying glass" />
                    <h3>Explore</h3>
                    <p>We provide professional events that help people to explore new technologies, ground-breaking ideas, and career paths.</p>
                </div>
                <div className="adjective-card">
                    <img src={GearIcon} alt="gear" />
                    <h3>Create</h3>
                    <p>We support the developer community at UCI to collaborate on innovative technical products that have meaning.</p>
                </div>
            </section>
            
                <div className="committee-section">
                    <h3>Our Committees</h3>
                    <CommitteeDropdownButton committeeName="Corporate"
                        aboutText="As a Corporate Outreach organizer, you will be responsible for contacting 
                        companies for financial sponsorship, hardware, swag, and mentorship. We build 
                        meaningful relationships with existing partners and reach out to other local 
                        companies to support HackUCI and Hack as a whole. Help us communicate with tech 
                        companies by using the following strategies: diligent emailing, scheduling phone 
                        calls, attending career fairs, participating at hackathons, and networking at 
                        professional events! Not only does this help us grow our professional network to 
                        have better experiences for our attendees, but this is also a great way for you to 
                        build lasting professional relationships with a wide breadth of companies and gain 
                        opportunities to get internships or full-time jobs."

                        keyQuals={[
                            "Strong written and verbal communication skills",
                            "Proficient in managing information through spreadsheets (MS Excel, Google Sheets)",
                            "Organized and responsive",
                            "Experience with drafting professional documents",
                            "High tolerance for rejection",
                            "Drive to work in a fast paced environment",
                            "Willing to dedicate ~5 hours per week to Hack (meeting, content creation, etc.)"
                        ]}
                    />
                    <CommitteeDropdownButton 
                        committeeName="Logistics"
                        aboutText="The logistics team organizes the operations of HackUCI and ZotHacks, as well as workshops during the year. We are a detail-oriented and impact-driven team, uniting diverse backgrounds and skill sets to ensure that events run smoothly and benefit all parties involved."
                        keyQuals={[
                            "Excellent time management skills",
                            "Great planning and organization skills",
                            "Attention to detail",
                            "Strong written and verbal communication skills, especially in a timely and efficient manner for issues",
                            "Drive to work in a fast paced environment",
                            "Work in a team based environment in order to meet goals",
                            "Handle a large budget in order to organize events efficiently",
                            "Proficient in managing information through folders (Google Drive), spreadsheets (Google Sheets), and documents (Google Docs)",
                            "Willing to dedicate ~4 hours per week to Hack (meeting, content creation, etc.)",
                            "Most importantly, willingness to adapt and learn new things"
                        ]}
                    />
                    <CommitteeDropdownButton 
                        committeeName="Marketing"
                        aboutText="As a general marketing organizer, your responsibilities vary from sending emails via to making posts on social media platforms in a witty and creative manner. You are required to meet strict deadlines and have exceptional communication skills since marketing is all about reaching out to the public."
                        keyQuals={[
                            "Exceptional communication and writing skills",
                            "Experience with email and social media marketing campaigns (MailChimp, SendGrid, Facebook, Instagram, Twitter)",
                            "Creative and critical thinking abilities",
                            "Drive to work in a fast-paced cross-functional team",
                            "Photography and videography skills (preferred)"
                        ]}
                    />
                    <CommitteeDropdownButton 
                        committeeName="Tech"
                        aboutText="As a general developer, your primary task is to design and develop an eye-catching user interface that delivers a good first impression to both attendees and sponsors. You will be streamlining the hackathon registration experience and utilize the latest frontend technologies to implement it. On occasion, you will be tasked with building onto our server-side application or setting up and maintaining databases."
                        
                        keyQuals={[
                            "Proficiency in HTML5, CSS3 and Javascript.",
                            "Experience in modern Javascript frameworks.",
                            "Ability to write clean, well documented code.",
                            "Experience with front-end styling frameworks (Bootstrap, Semantic UI, Material UI, etc.)"
                        ]}
                        prefQuals={[
                            "Experience in developing Node.js web applications.",
                            "Experience in setting up and maintaining MongoDB databases.",
                            "Experience with cloud technologies (AWS, GCP, Heroku)"
                        ]}
                    />
                    <CommitteeDropdownButton 
                        committeeName="Graphics"
                        aboutText="As a graphic designer, you will be responsible for creating graphics that represent our organization and events for various platforms, such as Facebook or Instagram. Designers also shape the theme and aesthetic for ZotHacks and HackUCI. Each design will follow general guidelines and have to be submitted for review before given deadlines. You must be detail-oriented and have proficient knowledge in visual design, color theory, and typography. You will also be working closely with the web development team, so experience with HTML and CSS is a plus, but not required."
                        keyQuals={[
                            "Proficiency in graphic design",
                            "Experience using a raster graphics editor (ex. Adobe Photoshop, Fire Alpaca, etc.)",
                            "Creative and critical thinking abilities",
                            "Experience using a vector graphics editor (ex. Adobe Illustrator, Inkscape, etc.)",
                            "Willing to dedicate ~4 hours per week to Hack (meeting, content creation, etc.)"
                        ]}
                    />
                </div>

        </div>
    </>
  );
}

export default Recruit;