import React from "react";
import "./TeamCard.scss";
import test from "../../../assets/linkedin-logo.png";
import linkedinLogo from "../../../assets/linkedin-logo.png";

function TeamCard(props) {
  const images = require.context("../../../assets/team", true);
  console.log(props.profpic);
  let image;
  if (props.profpic) {
    image = images(props.profpic);
  }

  return (
    <div className="teamcard" style={props.style}>
      <div className="images-container">
        <img className="profpic" src={image ? image : test} />
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
