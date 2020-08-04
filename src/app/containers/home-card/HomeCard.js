import React from "react";

import "./HomeCard.scss";



function HomeCard(props) {

  
  return (
    <div className='homecard'>
      <div className='parent-wrapper-event-card'>
        <div className='top-part-event-card'>
          <img
            className='top-part-event-card-img'
            src={props.image}
            alt='event'
          />
        </div>
        <div className='bottom-part-event-card'>
          <h2 className='top-text-event-card'>
            <b>{props.title}</b>
          </h2>
          <h4 className='bottom-text-event-card'>{props.description}</h4>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
