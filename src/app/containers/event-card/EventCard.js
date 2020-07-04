import React from "react";
import Modal from "react-modal";
import Moment from "react-moment";

import "./EventCard.scss";

Modal.setAppElement(document.getElementById("root"));

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

  function renderBotText() {
    let x = new Date();
    let y = new Date(props.date);
    let z = x.getTime() - y.getTime();
    if (z > 0) {
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
    <div className='eventcard'>
      <div className='parent-wrapper-event-card' onClick={openModal}>
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
          <h4 className='bottom-text-event-card'>{renderBotText()}</h4>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className='modal-styling-event-card'
      >
        <div className='header-line-event-card'>
          <span className='popup-title'>
            {" "}
            <b>{props.title}</b>
          </span>
          <button onClick={closeModal} className='close-button-event-card'>
            {" "}
            X{" "}
          </button>
        </div>
        <h4>
          <div>
            <Moment format='MMM D, YYYY'>{props.date}</Moment>
            <span> · </span>
            <Moment format='h:mma'>{props.date}</Moment>
            <span> - </span>
            <Moment format='h:mma'>{props.end_date}</Moment>
          </div>
        </h4>
        <button className='popup-button-event-card'>
          {" "}
          <a href={props.link} target='_blank'>
            {" "}
            <h5>Facebook Event</h5>{" "}
          </a>{" "}
        </button>
        <div className='desc-text-wrapper-event-card'>
          <p className='desc-text-event-card'>{props.description}</p>
        </div>
      </Modal>
    </div>
  );
}

export default EventCard;
