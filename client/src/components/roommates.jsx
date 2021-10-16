import React from 'react';
import $ from 'jquery';
import Roommate from './roommate.jsx';

class Roommates extends React.Component {
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
    $.ajax({
      type: 'post',
      url: '/roommates',
      data: {name: this.state.value},
      success: (response) => {
        this.props.getAllRoommates()
        this.setState({
          value: ''
        })
      },
      error: (err) => {
        alert('error!: ', err)
      }
    });
    event.preventDefault()
  }

  render() {
    let roommates = this.props.roommates
    return (
      <div id="roommates">
        <h2>Roommates</h2>
        {roommates.map((roommate, index) => <Roommate roommate={roommate} key={`roommate - ${index}`} />)}
        <form onSubmit={this.handleSubmit}>
          <label>
            <input placeholder='add a roommate' type='text' value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="+" />
        </form>
      </div>
    );
  }
}

export default Roommates;