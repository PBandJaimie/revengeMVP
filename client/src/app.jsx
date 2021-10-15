import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Roommates from './components/roommates.jsx';
import Chores from './components/chores.jsx';
import Log from './components/log.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roommates: [],
      chores: [],
      log: []
    }
    this.getAllRoommates = this.getAllRoommates.bind(this);
    this.getAllChores = this.getAllChores.bind(this);
    this.getLog = this.getLog.bind(this);
  }

  componentDidMount() {
    this.getAllRoommates();
    this.getAllChores();
  }

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
        console.log('RESPONSE: ', response)
        this.setState({
          chores: response
        });
      },
      dataType: 'json'
    });
  }

  getLog() {
    $.ajax({
      type: 'get',
      url: '/log',
      success: (response) => {
        this.setState({
          log: response
        });
      },
      dataType: 'json'
    });
  }

  render() {
    return (
      <div id="app">
        <h1>Dish, please!</h1><br></br>
        <Roommates roommates={this.state.roommates} /><br></br>
        <Chores chores={this.state.chores} /><br></br>
        <Log log={this.state.log} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;