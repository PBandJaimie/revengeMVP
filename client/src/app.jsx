import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Roommates from './components/roommates.jsx';
import Chores from './components/chores.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roommates: [],
      chores: []
    }
    this.getAllRoommates = this.getAllRoommates.bind(this);
    this.getAllChores = this.getAllChores.bind(this);
    // this.onRoommateSubmit = this.onRoommateSubmit.bind(this);
  }

  componentDidMount() {
    this.getAllRoommates();
    this.getAllChores();
  }

  // componentDidUpdate(prevState) {
  //   if (this.state !== prevState) {
  //     this.getAllRoommates();
  //     this.getAllChores();
  //   }
  // }

  getAllRoommates() {
    $.ajax({
      type: 'get',
      url: '/roommates',
      success: (response) => {
        this.setState({
          roommates: response
        });
      },
      dataType: 'json'
    });
  }

  getAllChores() {
    $.ajax({
      type: 'get',
      url: '/chores',
      success: (response) => {
        this.setState({
          chores: response
        });
      },
      dataType: 'json'
    });
  }

  // onRoommateSubmit(value) {
  //   $.ajax({
  //     type: 'post',
  //     url: '/roommates',
  //     data: {name: value},
  //     success: (res) => {
  //       this.getAllRoommates()
  //     },
  //     error: (err) => {
  //       alert('error!: ', err)
  //     }
  //   });
  //   event.preventDefault()
  // }

  render() {
    return (
      <div id="app">
        <h1>Dish, please!</h1><br></br>
        <Roommates roommates={this.state.roommates} getAllRoommates={this.getAllRoommates} uponAddingRoommate={this.onRoommateSubmit} /><br></br>
        <Chores chores={this.state.chores} getAllChores={this.getAllChores} /><br></br>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;