import React, { Component } from 'react';

class Result extends Component {
  render() {
    return (
      <div className="result">
        <span>LOSE\WIN</span>
        <div>
          <span>{this.props.countUser}</span>--<span>{this.props.countComp}</span>
        </div>
        <button>Again?</button>
    </div>
    );
  }
}

export default Result;
