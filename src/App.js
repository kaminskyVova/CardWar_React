import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">

      <div className="home">
        <h1>Ready for WAR</h1>
        <input type="text" placeholder="enter your name"></input>
        <button>Start</button>
      </div>
      <hr />

      <div className="field">
        <p>Computer</p>
        <div>4</div>
        <div>4</div>
        <p>you</p>
        <button>next</button>
      </div>
      <hr />

      <div className="result">
        <span>LOSE\WIN</span>
        <div>
          <span>1</span>--<span>0</span>
        </div>
        <button>Again?</button>
      </div>
      <hr />

    </div>
  );
}

export default App;
