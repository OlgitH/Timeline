import React, { Component } from 'react';

class TimelineEvent extends Component {
  render() {
  const bgColor = this.props.background;
  const style = {background: bgColor};
    return (

        <div className="timeline-event align-middle" style={style}>
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
          <span className="date">{this.props.date}</span>
        </div>

    );
  }
}

export default TimelineEvent;
