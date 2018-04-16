import React, { Component } from 'react';
import TimelineEvent from './event.jsx';
import Grid from './grid.jsx';
import './App.css';
require('bootstrap/dist/css/bootstrap.css');

var data = require('./data/data.json');
var events1 = data.events1;
var events2 = data.events2;
var events3 = data.events3;
const monthData = require('./data/months.json');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };

  }



  render() {
  const months = monthData;

    return (
      <div className="App">



          <header>
            <h1 className="App-title">Timeline</h1>
          </header>

          <div className="wrapper">
              <div className="horizontal-scroll">
                <Grid months={months} />
                <TimelineEvent title="Jim's Report" start="2" end="30" background="red" color="#fff" top="20"/>
                <TimelineEvent title="Another one" start="60" end="86" background="orange" color="#fff" top="0"/>
                <TimelineEvent title="MySupport" start="25" end="39" background="blue" color="#fff" top="40"/>
                <TimelineEvent title="Another Project" start="40" end="50" background="blue" color="#fff" top="60" />
                {/* <Slide events={events1.slides} month={events1.slideDetails.month} />
                <Slide events={events2.slides} month={events2.slideDetails.month} />
                <Slide events={events3.slides} month={events3.slideDetails.month} /> */}
              </div>
          </div>






      </div>

    );
  }
}

export default App;
