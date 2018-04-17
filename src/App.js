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

        document.getElementById('App').addEventListener('wheel', this.handleScroll);

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

      </div>

    );
  }
}

export default App;
