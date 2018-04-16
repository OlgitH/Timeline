import React, { Component } from 'react';

class Grid extends Component {
  render() {

    const months = this.props.months;
    const grid = months.map((month) =>
    <div className="grid-unit"><span>{month}</span></div>
  );

    return (

      <div className="grid-container">
        {grid}
      </div>
    );
  }
}

export default Grid;
