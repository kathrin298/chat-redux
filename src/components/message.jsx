import React from 'react';

const Message = (props) => {
  return (
    <div className="message">
      <h5>{props.message.author}</h5>
      <p>{props.message.content}</p>
    </div>
  );
};

export default Message;
