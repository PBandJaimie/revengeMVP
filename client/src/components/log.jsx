import React from 'react';

class Log extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: []
    }
    //bind here
  }

  render() {
    return (
      <div id="log">
        I am Log
      </div>
    )
  }
}

export default Log;