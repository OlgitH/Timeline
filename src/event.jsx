import React, { Component } from 'react';

class TimelineEvent extends Component {

  constructor(props) {
   super(props);
   this.state = {
    showPopup: false
   };
 }

  render() {

  const totaldays = 365 / 12;
  const start = this.props.start;
  const end = this.props.end;

  const duration = (end - start); //number of days spent on project
  const percentage = (duration / 365) * 100;

  const leftIndent = (start / 365) * 100; //number of days into the year converted to a precentage of the year


  const vertPos = this.props.top;
  const bgColor = this.props.background;
  const color = this.props.color;

  const width = percentage + '%';
  const style = {position:'absolute', color:color, background: bgColor, width: width, left:leftIndent+'%', top: vertPos + '%'};
    return (
        <div>
            <div className="timeline-event" style={style}>
              <h3>{this.props.title}</h3>
              <p>{this.props.description}</p>
              <span className="days">{duration} Days</span>
            </div>
        </div>



    );
  }
}

export default TimelineEvent;
