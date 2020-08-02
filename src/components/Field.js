import React, { Component } from 'react';

class Field extends Component {
  constructor(props){
    super(props)
  }



  render() {
    return (
      <div className="field">
        <p>Computer</p>
        <div>{this.props.compCard}</div>
        <div>{this.props.userCard}</div>
        <p>{this.props.userName}</p>
        <button onClick={this.props.update}>next</button>
    </div>
    );
  }
}

export default Field;
