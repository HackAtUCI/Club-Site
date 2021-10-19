import React from 'react';

import './HomeCard.scss';

function HomeCard(props) {
  return (
    <div className='home-card'>
      <div className='parent-wrapper-home-card'>
        <div className='top-part-home-card'>
          <img
            className='top-part-home-card-img'
            src={props.image}
            alt={props.title}
          />
        </div>
      </div>
      <div className='hover-text'>
        <h1>{props.title}</h1>
        <span>{props.description}</span>
      </div>
    </div>
  );
}

export default HomeCard;
