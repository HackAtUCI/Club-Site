import React from "react";

import './EventCard.scss';

function EventCard(props) {
  return (
    <div className="eventcard">
      <div className="parent-wrapper">
        <div className="top-part">
          <img className="top-part-img" src={props.image} alt="event"/>
        </div>
        <div className="bottom-part">
          <h2 className="top-text">
            <b>
              {props.title}
            </b>
          </h2>
          <h4 className="bottom-text">
            {props.date} {props.time}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
