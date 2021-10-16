import React from 'react';
import $ from 'jquery';
import Chore from './chore.jsx'
import Log from './log.jsx';

class Chores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
      log: []
    }
    this.choreSelected = this.choreSelected.bind(this);
    this.getLog = this.getLog.bind(this);
  }

  choreSelected(chore) {
    if (this.state.selected === chore) {
      this.setState({
        selected: '',
        log: []
      })
    } else {
      this.getLog(chore);
      this.setState({
        selected: chore
      })
    }
  }

  getLog(selectedChore) {
    $.ajax({
      type: 'get',
      url: '/log',
      data: {chore: selectedChore},
      success: (response) => {
        this.setState({
          log: response
        })
      },
      dataType: 'json'
    });
  }

  render() {
    let chores = this.props.chores
    if (this.state.log.length === 0) {
      return (
        <div id="chores">
           <h2>Chores</h2>
          {chores.map((chore, assignee, key) =>
            <Chore chore={chore.name} assignee={chore.assignee} key={chore.name} choreSelected={this.choreSelected} selected={this.state.selected} getLog={this.getLog} />)}
        </div>
      )
    } else {
      return (
        <div>
          <div id="chores">
             <h2>Chores</h2>
            {chores.map((chore, assignee, key) =>
              <Chore chore={chore.name} assignee={chore.assignee} key={chore.name} choreSelected={this.choreSelected} selected={this.state.selected} getLog={this.getLog} />)}
          </div>
          <Log log={this.state.log} />
        </div>
      )
    }
  }
}

export default Chores;