import React, { useState, useEffect } from "react";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";
import { EventCard } from "../../containers";

import "./Events.scss";

function Events() {
  const [pastEvents, setPastEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/fbgraph").then((response) => {
      console.log(response);
      let data = response.data.events.data;
      let x = new Date(); // current time
      let splicer = data.length;
      let todayCutOff = 0;
      for (let i = 0; i < data.length; i++) {
        let y = new Date(data[i].start_time);
        if ((x.getTime() - y.getTime()) / 31536000000 > 0) {
          todayCutOff = i;
          break;
        }
      }
      for (let i = 0; i < data.length; i++) {
        let y = new Date(data[i].start_time);
        if ((x.getTime() - y.getTime()) / 31536000000 > 1) {
          splicer = i;
          break;
        }
      }
      setUpcomingEvents(data.slice(0, todayCutOff));
      setPastEvents(data.slice(todayCutOff, splicer));
      setIsLoading(false);
    });
  }, []);

  function upcomingEventsRender() {
    if (isLoading) {
      return (
        <div className='no-events'>
          <BeatLoader size={15} color={"#233b92"} />
        </div>
      );
    } else {
      return upcomingEvents.length == 0 ? (
        <h1 className='no-events'> No upcoming events! Stay tuned.</h1>
      ) : (
        upcomingEvents.map((event) => (
          <EventCard
            title={event.name}
            date={event.start_time}
            end_date={event.end_time}
            link={"https://www.facebook.com/events/" + event.id}
            description={event.description}
            image={event.cover.source}
            image={event.cover.source}
            time={event.pastOrFuture}
            key={event.id}
          />
        ))
      );
    }
  }

  function pastEventsRender() {
    if (isLoading) {
      return (
        <div className='no-events'>
          <BeatLoader size={15} color={"#233b92"} />
        </div>
      );
    } else {
      return pastEvents.length == 0 ? (
        <h1 className='no-events'> No past events! </h1>
      ) : (
        pastEvents.map((event) => (
          <EventCard
            title={event.name}
            date={event.start_time}
            end_date={event.end_time}
            link={"https://www.facebook.com/events/" + event.id}
            description={event.description}
            image={event.cover.source}
            image={event.cover.source}
            time={event.pastOrFuture}
            key={event.id}
          />
        ))
      );
    }
  }

  return (
    <div className='events-wrapper'>
      <div className='events-description-wrapper'>
        <div className='events-description'>
          <p>
            We aim to celebrate UC Irvine's spirit of innovation by organizing
            ZotHacks, a beginner-friendly hackathon, and HackUCI, Orange
            County's largest hackathon. Futhermore, our organization regualrly
            hosts technical and professional development workshops that teach
            students industry relevant skills.
          </p>
        </div>
      </div>
      <div className='events'>
        <div className='upcoming-events'>
          <h2 className='title-events'>
            {" "}
            <b> Upcoming Events </b>{" "}
          </h2>
          <h4> Click on a upcoming event to view its description. </h4>
          {upcomingEventsRender()}
        </div>
        <div className='past-events'>
          <h2 className='title-events'>
            {" "}
            <b> Past Events </b>{" "}
          </h2>
          <h4> Click on a past event to view its description. </h4>
          {pastEventsRender()}
        </div>
      </div>
    </div>
  );
}

export default Events;
