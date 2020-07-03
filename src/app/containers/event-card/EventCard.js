import React from "react";
import Modal from 'react-modal';
import Moment from 'react-moment';

import './EventCard.scss';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : '50%',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor: '#233b92',
    color: 'white',
    borderRadius: '10px',
  }
};

Modal.setAppElement(document.getElementById('root'));

function EventCard(props) {
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.

  }
 
  function closeModal(){
    setIsOpen(false);
  }

  function renderBotText() {
    let x = new Date();
    let y = new Date(props.date);
    let z = x.getTime() - y.getTime();
    if (z > 0) {
      return (
        <div>        
        <Moment format="MMM D, YYYY">
        {props.date} 
      </Moment>
        </div>
      )
    }
    else {
      return (
      <div> 
      <Moment format="MMM D, YYYY">
      {props.date} 
    </Moment>
    <span> · </span>
    <Moment format="h:mma">
      {props.date}
    </Moment>
    <span> - </span>
    <Moment format="h:mma">
      {props.end_date}
    </Moment>
      </div>
      )
    }
  }
  return (
      <div className="eventcard" >
      <div className="parent-wrapper" onClick={openModal}>
        <div className="top-part">
          <img className="top-part-img" src={props.image} alt="event"/>
        </div>
        <div className="bottom-part">
          <h2 className="top-text">
            <b>
              {props.title}
            </b>
          </h2>
          <h4 className="bottom-text">
          {renderBotText()}
          </h4>
        </div>
      </div>
      <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          className="modal-styling"
          >

          <div className="header-line">
            <span className="popup-title"> <b>{props.title}</b></span>
            <button onClick={closeModal} className="close-button"> X </button>
          </div>
          <h4>
            <div> 
                  <Moment format="MMM D, YYYY">
                  {props.date} 
                </Moment>
                <span> · </span>
                <Moment format="h:mma">
                  {props.date}
                </Moment>
                <span> - </span>
                <Moment format="h:mma">
                  {props.end_date}
                </Moment>
            </div>
          </h4>
          <button className='popup-button'> <a href={props.link} target="_blank"> <h5>Facebook Event</h5> </a> </button>
          <div className='desc-text-wrapper'>
          <p className='desc-text'>
            {props.description}
          </p>
          </div>

        </Modal>
    </div>
    
  );
}

export default EventCard;
