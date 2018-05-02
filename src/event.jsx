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
 }

 componentDidMount() {
     document.getElementById('App').addEventListener('scroll', this.handleScroll);
     document.getElementById('App').addEventListener('scroll', this.handleScroll);
 }

 handleClick(e) {
   const toggled = document.getElementsByClassName('detailBox');
   var i;
    for (i = 0; i < toggled.length; i++) {
      if ( !this.state.boxIsShowing ) {
        toggled[i].style.display = "none";
      }
    }
   this.setState({
     boxIsShowing: !this.state.boxIsShowing,
   })
 }

  render() {

  //DATE STUFF
  //Timeframe variables
  const timeframeStartDate = new Date(2018, 5, 1, 0, 0, 0); //month is month before for some reason -e.g. 5 = June  10=November
  const timeframeEnd = new Date(2019, 10, 30, 0, 0, 0);
  const timeframe = timeframeEnd - timeframeStartDate;

  //Project date variables -  All dates in JS are in as milliseconds from January 1, 1970
  const projectStartDate = new Date(this.props.start);
  const projectEndDate = new Date(this.props.end);
  const projectLength = projectEndDate - projectStartDate;
  const msToStartDate = projectStartDate - timeframeStartDate; // in milliseconds

  const oneDay = 1000 * 60 * 60 * 24; // Day in milliseconds

  const timeframeDays = Math.floor(timeframe / oneDay); // number of days to project sart from the beginning of the year
  const daysToStart = Math.floor(msToStartDate / oneDay); // number of days to project sart from the beginning of the year
  const projectDuration = Math.floor(projectLength / oneDay); // number of days the project lasts
  console.log('timeframeDays' + daysToStart );

  //Convert days to percentages
  const percentage = (projectDuration / timeframeDays) * 100;
  const leftIndent = (daysToStart / timeframeDays) * 100; //number of days into the year converted to a precentage of the year

  //other props
  const vertPos = this.props.top;
  const bgColor = this.props.background;
  const color = this.props.color;

  const width = percentage + '%';

  const style = {position:'absolute', borderTop: '10px solid',  borderColor: bgColor, width:width, left:leftIndent +'%', top:vertPos + '%'};
  const arrow =   <span className="showDetails" onClick={this.handleClick.bind(this)}> { this.state.boxIsShowing ? <FaAngleUp /> : <FaAngleDown />}
    { this.state.boxIsShowing ?
      <div className={ this.state.boxIsShowing ? 'detailBox toggled' : 'detailBox' }>
        Project start:<br />
        <Moment format='LL'>{this.props.start}</Moment><br /><br />
        Project end:<br />
        <Moment format='LL'>{this.props.end}</Moment>
      </div>
      : ''
    }
  </span>;
    return (
        <div>
            <div className="timeline-event" style={style} >
              <div className="labelArea">
                  <div className="dropdownWrap">
                  <h3>{this.props.title}</h3>
                  { !this.props.isNarrow ? <span className="days">{projectDuration} Days</span> : '' }
                  { !this.props.isNarrow ? <span className="arrow">{arrow}</span > : '' }
                  </div>
              </div>

            </div>
        </div>



    );
  }
}

export default TimelineEvent;
