import React from 'react';
import Chore from './chore.jsx'

class Chores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: []
    }
  }

  render() {
    let chores = this.props.chores
    return (
      <div id="chores">
         <h2>Chores</h2>
        {chores.map((chore, assignee, key) =>
          <Chore chore={chore.name} assignee={chore.assignee} key={chore.name} />)}
      </div>
    )
  }
}

export default Chores;