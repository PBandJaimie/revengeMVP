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
          <h2>{log[0].chore} Log</h2>
          <ul>
            {log.map((entry, index) => <LogEntry completedBy={entry.roommate} date={entry.date} key={`logEntry - ${index}`} />)}
            <li>
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
                <input type="submit" value="+" />
              </form>
            </li>
          </ul>
        </div>
      )
    } else if (this.props.log.length === 0 && this.props.selected !== '') {
      return (
        <div id="log">
          <h2>{this.props.selected} Log</h2>
          <ul>
            <li>
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
                <input type="submit" value="+" />
              </form>
            </li>
          </ul>
        </div>
      )
    } else {
      return null;
    }
  }
}


export default Log;