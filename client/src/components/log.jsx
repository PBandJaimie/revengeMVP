import React from 'react';
import $ from 'jquery';
import LogEntry from './logEntry.jsx';

class Log extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault()
    $.ajax({
      type: 'post',
      url: '/log',
      data: {
        name: this.state.value,
        chore: this.props.selected
      },
      success: (response) => {
        this.props.getLog(this.props.selected)
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
    let log = this.props.log;
    let roommates = this.props.roommates;
    if (this.props.log.length !== 0) {
      return (
        <div id="log">
          <div id="columnTitle"><u>{log[0].chore} Log</u></div>
          <ul>
            {log.map((entry, index) => <LogEntry completedBy={entry.roommate} date={entry.date} key={`logEntry - ${index}`} />)}
            <li id="individuals">
              <form onSubmit={this.handleSubmit}>
                <label>
                  <select value={this.state.value} onChange={this.handleChange}>
                    <option value='default'>
                      Select your name
                    </option>
                    {roommates.map((name, index) => {
                      return <option key={`rmLog - ${index}`} value={name}>{name}</option>
                    })};
                  </select>
                </label>
                <input className="hoverToClick" type="submit" value="+" />
              </form>
            </li>
          </ul>
        </div>
      )
    } else if (this.props.log.length === 0 && this.props.selected !== '') {
      return (
        <div className="log">
          <div id="columnTitle"><u>{this.props.selected} Log</u></div>
          <ul>
            <li id="individuals">
              <form onSubmit={this.handleSubmit}>
                <label>
                  <select value={this.state.value} onChange={this.handleChange}>
                    <option value='default'>
                      Select your name
                    </option>
                    {roommates.map((name, index) => {
                      return <option key={`rmLog - ${index}`} value={name}>{name}</option>
                    })};
                  </select>
                </label>
                <input className="hoverToClick" type="submit" value="+" />
              </form>
            </li>
          </ul>
        </div>
      )
    } else {
      return (
        <div id="log">
          <div id="columnTitle"><u>Log</u></div>
          <div id="individuals">Select a chore to view its log</div>
        </div>
      )
    }
  }
}


export default Log;