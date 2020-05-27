import React from 'react';

const Message = (props) => {
  return (
    <div>
      <h5>{props.message.author}</h5>
      <p>{props.message.content}</p>
    </div>
  );
};

export default Message;
