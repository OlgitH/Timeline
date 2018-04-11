import React, { Component } from 'react';
import './App.css';
import TimelineEvent from './event.jsx';
require('bootstrap/dist/css/bootstrap.css');

var events = require('./data.json');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: events
    };
  }


  render() {

  var eventData = this.state.events;
  var items = [];

  var i;
  for (i = 0; i < eventData.length; i++) {  //for each item in the eventData Array
    var item = eventData[i].map(function(event, index){
      return <TimelineEvent key={ index } title={event.title} description={event.description} />;
    })
    items[i] = item;
  }

    return (
      <div className="App">
          <header>
            <h1 className="App-title">UAL</h1>
          </header>

          <div className="container">
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
          </div>

      </div>

    );
  }
}

export default App;
