import React from 'react';

const LogEntry = (props) => {
  console.log(props.date)
  let date = new Date(props.date);
  let a = date.getMonth() + 1;
  let b = date.getDate();
  let c = date.getFullYear();
  let d = date.toString().slice(16, 21);
  console.log
  return (
    <li id="entry">by {props.completedBy} on {a}.{b}.{c} @ {d}</li>
  )
}

export default LogEntry;