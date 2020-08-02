import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Field from "./components/Field";
import Result from "./components/Result";

class App extends Component {
  constructor(props) {
    super(props)

    this.state ={
      computer: 'Computer',
      userName: '',
      compCard: Math.floor(Math.random() * 14),
      userCard: Math.floor(Math.random() * 14),
      countComp: 0,
      countUser: 0
    }
  }

  addUserName = (name) => {
    this.setState({
      userName: name
    })
  }

update = () => {
  this.setState({
    compCard: Math.floor(Math.random() * 14),
    userCard: Math.floor(Math.random() * 14)
  })
}

count = () => {
  if (this.state.compCard > this.state.userCard) {
    console.log('222');
    this.setState({
      countComp: this.state.countComp + 1
    })
  } 
  else if (this.state.userCard > this.state.compCard) {
    console.log('111');
    this.setState({
      countUser: this.state.countUser + 1
    })
    
  }
}


  render() {

    
    return (
      <div className="App">
        <h1>Ready for WAR</h1>
        <Home addUserName={this.addUserName}/>
        <hr />
        <Field userName={this.state.userName} compCard={this.state.compCard} userCard={this.state.userCard} update={this.update}/>
        <hr />
        <Result countComp={this.state.countComp} countUser={this.state.countUser} />
        <hr />
      </div>
    );
  }
}

export default App;
