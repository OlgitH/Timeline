import React, { Component } from 'react';

class TimelineEvent extends Component {

  constructor(props) {
   super(props);
   this.state = {
    showPopup: false
   };
 }

  render() {

    // for (i = 0; i < events.length; i++) {
    //
    //    var startDate = new Date(events[i].fields.startDate);
    //    var yearStart = new Date(startDate.getFullYear(), 0, 0);
    //    var diff = startDate - yearStart;
    //    var oneDay = 1000 * 60 * 60 * 24;
    //    var day = Math.floor(diff / oneDay);
    // }

  // const totaldays = 365 / 12;

  const startDate = new Date(this.props.start);
  const endDate = new Date(this.props.end);
  const yearStart = new Date(startDate.getFullYear(), 0, 0);

  const numberOfDays = endDate - startDate;
  const daysToStartDate = startDate - yearStart;
  const oneDay = 1000 * 60 * 60 * 24;

  const durationToStart = Math.floor(daysToStartDate / oneDay);
  const projectDuration = Math.floor(numberOfDays / oneDay);


  // const duration = (endDate - startDate);

  const percentage = (projectDuration / 365) * 100;
  const leftIndent = (durationToStart / 365) * 100; //number of days into the year converted to a precentage of the year

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
              <span className="days">{projectDuration} Days</span>
            </div>
        </div>



    );
  }
}

export default TimelineEvent;
