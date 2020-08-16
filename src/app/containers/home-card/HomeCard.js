import React from "react";

import "./HomeCard.scss";

function HomeCard(props) {
  return (
    <div className='home-card'>
      <div className='parent-wrapper-home-card'>
        <div className='top-part-home-card'>
          <img
            className='top-part-home-card-img'
            src={props.image}
            alt='event'
          />
        </div>
        <div className='bottom-part-home-card'>
          <h2 className='top-text-home-card'>
            <b>{props.title}</b>
          </h2>
          <h4 className='bottom-text-home-card'>{props.description}</h4>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
