import React, { Component } from 'react';
import TimelineEvent from './event.jsx';
import MdAutorenew from 'react-icons/lib/md/autorenew';
import Grid from './grid.jsx';
import './App.css';

require('bootstrap/dist/css/bootstrap.css');
var contentful = require('contentful');
const monthData = require('./data/months.json');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isNarrow: false,
      videoBoxIsShowing: false,
      textBoxIsShowing: false,
      events: []
    };
    this.toggleView = this.toggleView.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  client = contentful.createClient({
       space: 'n20gqe0icmxo',
       accessToken: '6174a971bf26d7fe7dc3a6be59b5586846840246a14d5de927155bbb6fcffe29'
    })

    componentDidMount() {
        this.fetchEvents().then(this.setEvents);
        document.getElementById('App').addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        document.getElementById('App').removeEventListener('scroll', this.handleScroll);
    }



    fetchEvents = () => this.client.getEntries({"content_type":"timelineEvents"});

    setEvents = response => {
        this.setState({
          events: response.items
        })
     }

  toggleView() {
    this.setState(prevState => ({
     isNarrow: !prevState.isNarrow
   }));
   const app = document.getElementById('App');
   app.scrollLeft = 0;
  }

  handleScroll() {
    const app = document.getElementById('App');
    var scrollPos = app.scrollLeft;
    console.log(scrollPos);
    const grid = document.getElementsByClassName('grid-container')[0];
    const labels = document.getElementsByClassName('grid-label');
    if (scrollPos >= 100 && scrollPos <= 2000) {
      this.setState({
       videoBoxIsShowing: true
     });
        grid.style.backgroundColor = "#222";
        grid.classList.add('whiteText');
    } else if (scrollPos >= 3000 && scrollPos <= 3600) {
        grid.style.backgroundColor = "#fff200";
        this.setState({
         textBoxIsShowing: true
       });
       grid.classList.remove('whiteText');
       document.getElementById('featureBox').innerHTML = '<h2>Julie Dark Takes over</h2>';
    } else if (scrollPos >= 4000 && scrollPos <= 6000) {
        grid.style.backgroundColor = "#ccc";
        this.setState({
         textBoxIsShowing: true
       });
       grid.classList.remove('whiteText');
    } else {
        grid.style.backgroundColor = "#fff";
        this.setState({
         videoBoxIsShowing: false,
         textBoxIsShowing: false
       });
       grid.classList.remove('whiteText');
    }

    var timelineEvents = document.getElementsByClassName('timeline-event');
    var i;
    for (i = 0; i < timelineEvents.length; i++) {
        var rect = timelineEvents[i].getBoundingClientRect();
        // console.log('rect ' + rect.right + 'px');
        if (rect.left <= 0 || rect.right >= 0) {
          timelineEvents[i].classList.add('offScreen');
        }
        if (rect.left >= 0 || rect.right <= 160 ) {
          timelineEvents[i].classList.remove('offScreen');
        }
    }
  }


  render() {
  const months = monthData;
  var events = this.state.events;

  var i;

  var tEvents = events.map((event, index) =>
      <TimelineEvent
        key={index}
        title={event.fields.title}
        start={event.fields.startDate}
        end={event.fields.endDate}
        background={event.fields.backgroundColor}
        color={event.fields.color}
        top={event.fields.offsetTop}
        isNarrow={this.state.isNarrow}
      />
  );


    return (
      <div id="App">

          <header>
            <h1 className="App-title">Timeline</h1> <div id="demo"><p></p></div>
            <button id="toggleView" onClick={this.toggleView}>{this.state.isNarrow ? <MdAutorenew /> : <MdAutorenew />}</button>

          </header>

          <div id="timeline-container" className={"wrapper " + (this.state.isNarrow ? 'narrow' : 'wide')}>
              <div id="horizontal-scroll">
                <Grid months={months} />
                {tEvents}
              </div>
          </div>

          {this.state.videoBoxIsShowing ? <div id="featureBox" className="video"><iframe src="https://player.vimeo.com/video/184997428?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>: ''}
          {this.state.textBoxIsShowing ? <div id="featureBox" className="text"><h2>We have completed 300 projects and helped logged a million calls.</h2></div>: ''}

      </div>

    );
  }
}

export default App;
