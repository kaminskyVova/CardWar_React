import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userName: ''
    }
  }

  onChangeHandler = (e) => {
    this.setState({
      userName: e.target.value
    })
  }

  render() {
    return (
      <div className="home">
        <input onChange={this.onChangeHandler} type="text" placeholder="enter your name"></input>
        <button onClick={() => this.props.addUserName(this.state.userName)}>Start</button>
      </div>
    );
  }
}

export default Home;
