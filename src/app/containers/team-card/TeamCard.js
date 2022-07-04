import React from 'react';

import linkedinLogo from 'assets/linkedin-logo.png';
import blank from 'assets/team/blank.png';

import './TeamCard.scss';

function TeamCard({ name, position, image, linkedInUrl }) {
  return (
    <div className='team-card'>
      <div className='images-container'>
        <img src={image || blank} className='profpic' alt={name} />
        <a href={linkedInUrl}>
          <img alt='LinkedIn' className='linkedinLogo' src={linkedinLogo} />
        </a>
      </div>

      <h5 className={name.length > 16 ? 'name-sizing' : ''}>{name}</h5>

      <h6>{position}</h6>
    </div>
  );
}

export default TeamCard;
