import React from 'react';
import Roommate from './roommate.jsx';

class Roommates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: []
    }
    //bind here
  }

  render() {
    let roommates = this.props.roommates
    return (
      <div id="roommates">
        <h2>Roommates</h2>
        {roommates.map((roommate, index) => <Roommate roommate={roommate} key={`roommate - ${index}`} />)}
      </div>
    )
  }
}

export default Roommates;