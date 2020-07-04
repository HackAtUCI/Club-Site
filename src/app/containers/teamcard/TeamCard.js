import React from "react";
import "./TeamCard.scss";
import test from "../../../assets/linkedin-logo.png";
import linkedinLogo from "../../../assets/linkedin-logo.png";

function TeamCard(props) {
  return (
    <div className="teamcard" style={props.style}>
      <div className="images-container">
        <img className="profpic" src={props.profpic ? props.profpic : test} />
        <a href={props.linkedinUrl}>
          <img className="linkedinLogo" src={linkedinLogo} />
        </a>
      </div>
      <b>
        {props.firstName} {props.lastName}
      </b>
      <p> {props.position} </p>
    </div>
  );
}

export default TeamCard;
