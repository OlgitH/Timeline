import React, { Component } from 'react';
import $ from 'jquery';
import Slide from './slide.jsx';
import RightArrow from './rightArrow.jsx';
import LeftArrow from './leftArrow.jsx';
import OwlCarousel from 'react-owl-carousel';
import './App.css';
require('bootstrap/dist/css/bootstrap.css');


var data = require('./data/data.json');
var events1 = data.events1;
var events2 = data.events2;
var events3 = data.events3;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

      activeSlide: 1,
      events1: events1.slides,
      events2: events2.slides,
      events3: events3.slides,
      options: {
          nav:true,
          items:1,
          smartSpeed:2000
      },
      events: {

      onTranslated: function(event) {
        var elem = document.getElementById('currentMonth');
        elem.innerHTML = events2.slideDetails.month;
      }
      },

      items: [
          <Slide events={events1.slides} month={events1.slideDetails.month} />,
          <Slide events={events2.slides} month={events2.slideDetails.month} />,
          <Slide events={events3.slides} month={events3.slideDetails.month} />
      ],

    };

  }

  // changeMonth(){
  //
  //     this.setState({
  //       activeSlide: += 1
  //     })
  //
  // }


  render() {

    return (
      <div className="App">

          <header>
            <h1 className="App-title">IT Communications Timeline - <span id="currentMonth">{this.state.activeSlide}</span></h1>
          </header>

          <div>
              <OwlCarousel
                  ref={inst => this.slider = inst}
                  {...this.state.options}
                  // {...this.state.events}
                  onTranslated={this.state.events.onTranslated}
              >
                  {this.state.items}
              </OwlCarousel>


          </div>

      </div>

    );
  }
}

export default App;
