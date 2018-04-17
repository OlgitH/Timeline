import React, { Component } from 'react';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import FaAngleUp from 'react-icons/lib/fa/angle-up';
import Moment from 'react-moment';

class TimelineEvent extends Component {

  constructor(props) {
   super(props);
   this.state = {
    boxIsShowing: false
   };
   this.handleScroll = this.handleScroll.bind(this)
 }

 componentDidMount() {
     document.getElementById('App').addEventListener('scroll', this.handleScroll);
     document.getElementById('App').addEventListener('scroll', this.handleScroll);
 }

 componentWillUnmount() {
     document.getElementById('App').removeEventListener('wheel', this.handleScroll);
 }

 handleScroll(e) {
   const app = document.getElementById('App');
   var scrollPos = app.scrollLeft;
   console.log(scrollPos);
   // if scrollPos >=

   var timelineEvents = document.getElementsByClassName('timeline-event');
   var i;
   for (i = 0; i < timelineEvents.length; i++) {
       var rect = timelineEvents[i].getBoundingClientRect();
       console.log('rect ' + rect.right + 'px');
       if (rect.left <= 0 || rect.right >= 0) {
         timelineEvents[i].classList.add('offScreen');
       }
       if (rect.left >= 0 || rect.right <= 160 ) {
         timelineEvents[i].classList.remove('offScreen');
       }
   }
 }

 handleClick(e) {
   this.setState({
     boxIsShowing: !this.state.boxIsShowing,
   })
 }

  render() {

  //Date stuff

  const startDate = new Date(this.props.start);
  const endDate = new Date(this.props.end);
  const yearStart = new Date(startDate.getFullYear(), 0, 0);

  const numberOfDays = endDate - startDate;
  const daysToStartDate = startDate - yearStart;
  const oneDay = 1000 * 60 * 60 * 24;

  const durationToStart = Math.floor(daysToStartDate / oneDay); // number of days to project sart from the beginning of the year
  const projectDuration = Math.floor(numberOfDays / oneDay); // number of days the project lasts


  // convert number of days to percentages of total number of days in year

  const percentage = (projectDuration / 365) * 100;
  const leftIndent = (durationToStart / 365) * 100; //number of days into the year converted to a precentage of the year

  //other props

  const vertPos = this.props.top;
  const bgColor = this.props.background;
  const color = this.props.color;

  const width = percentage + '%';

  const style = {position:'absolute', color:color, background: bgColor, width: width, left:leftIndent+'%', top: vertPos + '%'};

    return (
        <div>
            <div className="timeline-event" style={style} >
              <div className="labelArea">
                  <h3>{this.props.title}</h3>
                  <span className="days">{projectDuration} Days</span>
                  <span className="showDetails" onClick={this.handleClick.bind(this)}> { this.state.boxIsShowing ? <FaAngleUp /> : <FaAngleDown />}
                  { this.state.boxIsShowing ?
                    <div className={ this.state.boxIsShowing ? 'detailBox toggled' : 'detailBox' }>
                      Project start:<br />
                      <Moment format='LL'>{this.props.start}</Moment><br /><br />
                      Project end:<br />
                      <Moment format='LL'>{this.props.end}</Moment>
                    </div>
                    : ''
                  }
                  </span>
              </div>

            </div>
        </div>



    );
  }
}

export default TimelineEvent;
