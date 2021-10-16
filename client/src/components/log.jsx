import React from 'react';
import LogEntry from './logEntry.jsx';

class Log extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    }
    //bind here
  }

  render() {
    let log = this.props.log;
    if (this.props.log !== undefined) {
      return (
        <div id="log">
          <h2>{log[0].chore} Log</h2>
          <ul>
            {log.map((entry, index) => <LogEntry completedBy={entry.roommate} date={entry.date} key={`logEntry - ${index}`} />)}
          </ul>
        </div>
      )
    } else {
      return null
    }
  }
}


export default Log;