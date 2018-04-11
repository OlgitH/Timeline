import React, { Component } from 'react';

class TimelineEvent extends Component {
  render() {
    return (

        <div className="timeline-event">
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
        </div>

    );
  }
}

export default TimelineEvent;
