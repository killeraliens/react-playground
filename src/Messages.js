import React from 'react';
// import ReactDOM from 'react-dom';
import './Messages.css';

function Messages(props) {
  const badge = props.unreadQty ? <span className="messages-alert">{props.unreadQty}</span> : null;

  return (
    <div className="Messages" >
      {badge}
      <span className="messages-name">{props.name}</span>
    </div>
  );
}

export default Messages;
