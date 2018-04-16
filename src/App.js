import React, { Component } from 'react';
import $ from 'jquery';
import Slide from './slide.jsx';

import './App.css';
require('bootstrap/dist/css/bootstrap.css');



var data = require('./data/data.json');
var events1 = data.events1;
var events2 = data.events2;
var events3 = data.events3;
const allmonths = require('./data/months.json');


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };

  }


  render() {

    return (
      <div className="App">



          <header>
            <h1 className="App-title">IT Communications Timeline - <span id="currentMonth">{this.state.activeSlide}</span></h1>
          </header>


          <div className="horizontal-scroll">

            {/* <div classname="slides"> */}
            <Slide events={events1.slides} month={events1.slideDetails.month} />
            <Slide events={events2.slides} month={events2.slideDetails.month} />
            <Slide events={events3.slides} month={events3.slideDetails.month} />
            {/* </div> */}

          </div>






      </div>

    );
  }
}

export default App;
