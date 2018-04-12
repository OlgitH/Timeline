import React, { Component } from 'react';
import TimelineEvent from './event.jsx';
import Icon from './icon.jsx';

// var events = require('./data/data.json');

class Slide extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {


    var eventData = this.props.events;  //recieve eventData as PROPS
    var items = [];

    var i;
    for (i = 0; i < eventData.length; i++) {  //loop through the eventData which is passed through from app.js as PROPS
      var item = eventData[i].map(function(event, index){  // Create item variable which contains the different slides
        return <TimelineEvent key={index} title={event.title} description={event.description} date={event.date} background={event.background ? event.background : ''}/>;
      })
      items[i] = item;
    }
    var month = this.props.month;
    let classNames = 'slide';
    classNames += (' ' + month);


    return (
          <div>
              <div className={classNames}>

                          <div className="row">
                              <div className="col-md-4">
                                {items[0]}
                              </div>
                              <div className="col-md-4">
                                {items[1]}
                              </div>
                              <div className="col-md-4">
                                {items[2]}
                              </div>
                          </div>

                  <div id="line"><Icon month={this.props.month} /></div>
              </div>
          </div>

    );
  }
}

export default Slide;
