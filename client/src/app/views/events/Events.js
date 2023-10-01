import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BeatLoader from 'react-spinners/BeatLoader';
import { Header, Card, EventCard } from '../../containers';
import calendar from '../../../assets/calendar-alt-regular.svg';

import './Events.scss';

const API_URL = process.env.REACT_APP_API_URL;

function Events() {
  const [pastEvents, setPastEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // API call to receive event data
  useEffect(() => {
    axios.get("/api/events", { baseURL: API_URL }).then((response) => {
      const events = response.data;

      for (const event of events) {
        event.start = new Date(event.start);
        event.end = new Date(event.end);
      }

      const today = new Date();
      let todayCutOff = events.length;

      // Find cutoff between past events and current events
      for (let i = 0; i < events.length; ++i) {
        if (today > events[i].end) {
          todayCutOff = i;
          break;
        }
      }

      // set state to upcoming and past events depending on calculated cutoff
      setUpcomingEvents(events.slice(0, todayCutOff));
      setPastEvents(events.slice(todayCutOff));
      setIsLoading(false);
    });
  }, []);

  function upcomingEventsRender() {
    if (isLoading) {
      return (
        <div className='no-events'>
          <h2 className='title-events'>Upcoming Events</h2>
          <BeatLoader size={15} color={'#233b92'} />
        </div>
      );
    } else {
      return upcomingEvents.length === 0 ? (
        <div className='upcoming-events'>
          <div className='no-events'>
            <img className='calendar-icon' src={calendar} alt='' />
            <h2 className='title-events'>No Upcoming Events</h2>
            <span className='stay-tuned-text'>
              Stay tuned for upcoming events!
            </span>
          </div>
        </div>
      ) : (
        <div className='upcoming-events'>
          <h2 className='title-events'>Upcoming Events</h2>
          {upcomingEvents
            .map((event) => (
              <Card key={event.id}>
                <EventCard
                  title={event.summary}
                  date={event.start}
                  end_date={event.end}
                  description={event.description}
                  image={event.attach?.[0].val}
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
        <h2 className='no-events'>No past events!</h2>
      ) : (
        pastEvents.map((event) => (
          <Card key={event.id}>
            <EventCard
              title={event.summary}
              date={event.start}
              end_date={event.end}
              description={event.description}
              image={event.attach?.[0].val}
            />
          </Card>
        ))
      );
    }
  }

  return (
    <div className='events-wrapper'>
      <Header title='Our Events' />
      <div className='events'>
        {upcomingEventsRender()}

        <div className='past-events'>
          <h2 className='title-events'>Past Events</h2>
          {pastEventsRender()}
        </div>
      </div>
    </div>
  );
}

export default Events;
