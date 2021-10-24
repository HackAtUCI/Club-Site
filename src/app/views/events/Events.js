import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BeatLoader from 'react-spinners/BeatLoader';
import { Card, EventCard } from '../../containers';
import HeaderCord from '../../../assets/cord_1_kat.png';
import calendar from '../../../assets/calendar-alt-regular.svg';

import './Events.scss';

function Events() {
  const [pastEvents, setPastEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // API call to receive event data
  useEffect(() => {
    axios.get('/api/fbgraph').then((response) => {
      let data = response.data.events.data;
      let currentDate = new Date();
      let splicer = data.length;
      let todayCutOff = 0;
      // find cutoff between past events and current events
      for (let i = 0; i < data.length; i++) {
        let eventDate = new Date(data[i].start_time);
        if ((currentDate.getTime() - eventDate.getTime()) / 31536000000 > 0) {
          todayCutOff = i;
          break;
        }
      }
      for (let i = 0; i < data.length; i++) {
        let eventDate = new Date(data[i].start_time);
        if ((currentDate.getTime() - eventDate.getTime()) / 31536000000 > 1) {
          splicer = i;
          break;
        }
      }
      // set state to upcoming and past events depending on calculated cutoff
      setUpcomingEvents(data.slice(0, todayCutOff));
      setPastEvents(data.slice(todayCutOff, splicer));
      setIsLoading(false);
    });
  }, []);

  function upcomingEventsRender() {
    if (isLoading) {
      return (
        <div className='no-events'>
          <h2 className='title-events'>
            <b> Upcoming Events </b>
          </h2>
          <BeatLoader size={15} color={'#233b92'} />
        </div>
      );
    } else {
      return upcomingEvents.length === 0 ? (
        <div className='upcoming-events'>
          <div className='no-events'>
            <img className='calendar-icon' src={calendar} />
            <h2 className='title-events'>
              <b> No Upcoming Events </b>
            </h2>
            <span className='stay-tuned-text'>
              Stay tuned for upcoming events!
            </span>
          </div>
        </div>
      ) : (
        <div className='upcoming-events'>
          <h2 className='title-events'>
            <b> Upcoming Events </b>
          </h2>
          {upcomingEvents
            .map((event) => (
              <Card>
                <EventCard
                  title={event.name}
                  date={event.start_time}
                  end_date={event.end_time}
                  link={'https://www.facebook.com/events/' + event.id}
                  description={event.description}
                  image={event.cover.source}
                  time={event.pastOrFuture}
                  key={event.id}
                />
              </Card>
            ))
            .reverse()}
        </div>
      );
    }
  }

  function pastEventsRender() {
    if (isLoading) {
      return (
        <div className='no-events'>
          <BeatLoader size={15} color={'#233b92'} />
        </div>
      );
    } else {
      return pastEvents.length === 0 ? (
        <h2 className="no-events">No past events!</h2>
      ) : (
        pastEvents.map((event) => (
          <Card>
            <EventCard
              title={event.name}
              date={event.start_time}
              end_date={event.end_time}
              link={"https://www.facebook.com/events/" + event.id}
              description={event.description}
              image={event.cover.source}
              time={event.pastOrFuture}
              key={event.id}
            />
          </Card>
        ))
      );
    }
  }

  return (
    <div className='events-wrapper'>
      <Header title="Our Events" />
      <div className='events'>
        {upcomingEventsRender()}

        <div className='past-events'>
          <h2 className='title-events'>
            <b> Past Events </b>
          </h2>
          {pastEventsRender()}
        </div>
      </div>
    </div>
  );
}

export default Events;
