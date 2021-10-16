import React from 'react';

class Chore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (this.props.selected === '') {
      this.props.getLog(event.target.innerText);
      this.props.choreSelected(event.target.innerText)
    } else if (this.props.selected === event.target.innerText) {
      this.props.choreSelected(event.target.innerText)
    } else if (this.props.selected !== event.target.innerText) {
      this.props.choreSelected(event.target.innerText)
    }
  }

  render() {
      return (
        <div>
          <div id="chore">
            <h3 onClick={this.handleClick}>{this.props.chore}</h3><h4>-{this.props.assignee}</h4>
          </div>
        </div>
      )
    }
}

export default Chore;