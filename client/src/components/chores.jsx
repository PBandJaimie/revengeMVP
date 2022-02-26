import React from 'react';
import $ from 'jquery';
import Chore from './chore.jsx'
import Log from './log.jsx';

class Chores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
      log: [],
      value: ''
    }
    this.choreSelected = this.choreSelected.bind(this);
    this.getLog = this.getLog.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        }),
        this.props.getAllChores();
      },
      dataType: 'json'
    });
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault()

    let max = Math.floor(this.props.roommates.length) - 1;
    let min = 0
    let randomIndex = Math.floor(Math.random() * (max - min + 1) + min)
    let randomAssignee = this.props.roommates[randomIndex];

    $.ajax({
      type: 'post',
      url: '/chores',
      data: {
        name: this.state.value,
        assignee: randomAssignee
      },
      success: (response) => {
        this.props.getAllChores()
        this.setState({
          value: ''
        })
      },
      error: (err) => {
        alert('error!: ', err)
      }
    });
  }

  render() {
    let chores = this.props.chores
    return (
      <div id="choresAndLog">
        <div className="chores">
          <div id="columnTitle"><u>Chores</u></div>
          {chores.map((chore, assignee, key) =>
            <Chore chore={chore.name} assignee={chore.assignee} key={chore.name} choreSelected={this.choreSelected} selected={this.state.selected} getLog={this.getLog} />)}
            <form className="addForm" onSubmit={this.handleSubmit}>
            <label>
              <input placeholder='add a chore' type='text' value={this.state.value} onChange={this.handleChange} required/>
            </label>
            <input className="hoverToClick" type="submit" value="+" />
            </form>
        </div>
        <Log id="log" log={this.state.log} getLog={this.getLog} roommates={this.props.roommates} selected={this.state.selected} />
      </div>
    )
  }
}

export default Chores;