import React from "react";

import { EventCard } from "../../containers";

import "./Events.scss";

function Events(props) {
  return (
    <div className="events" style={props.style}>
      <EventCard title="This is the Name of the Event" date="May 24, 2020" time="3:00pm - 4:00pm" image="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/98072884_586665871967837_5414068385577172992_o.jpg?_nc_cat=105&_nc_sid=b386c4&_nc_ohc=87XVIYv1A3cAX_O2FWC&_nc_ht=scontent-sjc3-1.xx&oh=bee799bbbe4af87450a157c4ee4e0264&oe=5F199E8A"/>
    </div>
  );
}

export default Events;
