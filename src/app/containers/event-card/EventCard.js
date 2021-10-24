import React from 'react';
import Modal from 'react-modal';
import Moment from 'react-moment';
import Linkify from 'react-linkify';

import './EventCard.scss';

Modal.setAppElement(document.getElementById('root'));

function EventCard(props) {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  function openModal() {
    setModalIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function getCardType() {
    let currentDate = new Date();
    let eventDate = new Date(props.date);
    let timeInterval = currentDate.getTime() - eventDate.getTime();
    if (timeInterval > 0) {
      return 'eventcard';
    } else {
      return 'eventcard';
    }
  }

  function renderBotText() {
    let currentDate = new Date();
    let eventDate = new Date(props.date);
    let timeInterval = currentDate.getTime() - eventDate.getTime();
    if (timeInterval > 0) {
      return (
        <div>
          <Moment format='MMM D, YYYY'>{props.date}</Moment>
        </div>
      );
    } else {
      return (
        <div>
          <Moment format='MMM D, YYYY'>{props.date}</Moment>
          <span> · </span>
          <Moment format='h:mma'>{props.date}</Moment>
          <span> - </span>
          <Moment format='h:mma'>{props.end_date}</Moment>
        </div>
      );
    }
  }

  return (
    <div className={getCardType()}>
      <div className='parent-wrapper-event-card' onClick={openModal}>
        <div className='top-part-event-card'>
          <img
            className='top-part-event-card-img'
            src={props.image}
            alt='event'
          />
        </div>
        <div className='bottom-part-event-card'>
          <h3 className='top-text-event-card'>{props.title}</h3>
          <h4 className='bottom-text-event-card'>{renderBotText()}</h4>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className='modal-styling-event-card'
      >
        <div className='modal-top-part'>
          <div className='header-line-event-card'>
            <span className='popup-title-event-card'>{props.title}</span>
          </div>
          <p className='modal-subtext-date'>
            <div>
              <Moment format='MMM D, YYYY'>{props.date}</Moment>
              <span> · </span>
              <Moment format='h:mma'>{props.date}</Moment>
              <span> - </span>
              <Moment format='h:mma'>{props.end_date}</Moment>
            </div>
          </p>
          <button className='popup-button-event-card'>
            <a
              href={props.link}
              target='_blank'
              rel='noopener noreferrer'
              className='popup-button-event-card-link'
            >
              <span>View on Facebook</span>
            </a>
          </button>
        </div>
        <div className='desc-text-wrapper-event-card'>
          <p className='desc-text-event-card'>
            <Linkify> {props.description}</Linkify>
          </p>
        </div>
        <div className='modal-bottom-part'>
          <button onClick={closeModal} className='close-button-event-card'>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default EventCard;
