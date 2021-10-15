import React from 'react';
import $ from 'jquery';
import Log from './log.jsx';

class Chore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      log: []
    }
    this.getLog = this.getLog.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.getLog(event.target.innerText);
  }

  getLog(selectedChore) {
    $.ajax({
      type: 'get',
      url: '/log',
      data: {chore: selectedChore},
      success: (response) => {
        this.setState({
          log: response,
          selected: !this.state.selected
        })
      },
      dataType: 'json'
    });
  }

  render() {
    console.log('this state: ', this.state)
    if (!this.state.selected) {
      return (
        <div id="chore">
          <h3 onClick={this.handleClick}>{this.props.chore}</h3>-<h4>{this.props.assignee}</h4>
        </div>
      )
    } else {
      return (
        <div id="chore">
          <h3 onClick={this.handleClick}>{this.props.chore}</h3>-<h4>{this.props.assignee}</h4>
          <Log log={this.state.log} />
        </div>
      )
    }
  }
}

export default Chore;