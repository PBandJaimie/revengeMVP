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
        <div id="chore">
          <div id="individuals" className="hoverToBold" onClick={this.handleClick}>{this.props.chore}</div><div id="assignee">*{this.props.assignee}</div>
        </div>
      )
    }
}

export default Chore;