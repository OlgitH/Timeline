import React, { Component } from 'react';
import TimelineEvent from './event.jsx';
import Moment from 'react-moment';
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
      events: []
    };
    this.toggleView = this.toggleView.bind(this)
  }

  client = contentful.createClient({
       space: 'n20gqe0icmxo',
       accessToken: '6174a971bf26d7fe7dc3a6be59b5586846840246a14d5de927155bbb6fcffe29'
    })

    componentDidMount() {
        this.fetchEvents().then(this.setEvents);
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
                          />

                      );



    return (
      <div className="App">

      <button id="toggleView" onClick={this.toggleView}>{this.state.isNarrow ? 'narrow view' : 'wide view'}</button>

          <header>
            <h1 className="App-title">Timeline</h1>
          </header>

          <div className={"wrapper " + (this.state.isNarrow ? 'narrow' : 'wide')}>
              <div className="horizontal-scroll">
                <Grid months={months} />
                {tEvents}
                {/* <TimelineEvent title="Jim's Report" start="80" end="120" background="red" color="#fff" top="20"/>
                <TimelineEvent title="Another one" start="60" end="86" background="orange" color="#fff" top="0"/>
                <TimelineEvent title="MySupport" start="25" end="39" background="blue" color="#fff" top="40"/>
                <TimelineEvent title="Another Project" start="40" end="50" background="blue" color="#fff" top="60"/>

                <TimelineEvent title="Password Self Selfice" start="140" end="250" background="pink" color="#00" top="20"/>
                <TimelineEvent title="Poster Refresh" start="220" end="250" background="green" color="#000" top="60"/> */}
              </div>
          </div>






      </div>

    );
  }
}

export default App;
