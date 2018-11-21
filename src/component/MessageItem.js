import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import DefaultProfileImg from "../img/dfimage.png";



const MessageItem = ({
  date,
  profileImg,
  text,
  username,
  removeMessage,
  isCorrectUser
 }) => (
  <div className='timeline'>
  
    <li className="timeline-content">
      <img
        src={profileImg || DefaultProfileImg}
        alt={username}
        className="timeline-image"
      />
      <div className="message-area">
        <h6 >{username} </h6>
 
        <p className='msg-text'>{text}</p>
        <span className="text-muted">
        <Moment  format="Do MMM YYYY">
            {date}
          </Moment>
        </span>
      {isCorrectUser &&(
          <a  className='remove-btn' onClick={removeMessage}>Delete</a>
      )}
      </div>
    </li>
  </div>
);

export default MessageItem;
