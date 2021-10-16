import React from 'react';

const LogEntry = (props) => {
  let fullDate = new Date(props.date);
  let month = fullDate.getMonth() + 1;
  let date = fullDate.getDate();
  let year = fullDate.getFullYear();
  let time = fullDate.toString().slice(16, 21);
  return (
    <li id="individuals">by {props.completedBy} on {month}.{date}.{year} @ {time}</li>
  )
}

export default LogEntry;