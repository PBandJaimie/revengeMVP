import React from 'react';

const Chore = (props) => (
  <div id="Chore">{props.chore} - {props.assignee}</div>
)

export default Chore;