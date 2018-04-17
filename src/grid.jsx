import React, { Component } from 'react';

class Grid extends Component {
  render() {

    const months = this.props.months;
    const grid = months.map((month, index) =>
    <div className="grid-unit" key={index}><span>{month}</span></div>
  );

    return (

      <div className="grid-container">
        {grid}
      </div>
    );
  }
}

export default Grid;
