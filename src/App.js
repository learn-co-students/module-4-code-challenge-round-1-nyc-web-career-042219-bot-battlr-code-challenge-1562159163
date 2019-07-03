import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";
// import BotCollection from "./containers/BotCollection"

class App extends Component {


  render() {
    console.log('bots', this.state)
    return (
      <div className="App">
        <BotsPage />
      </div>
    );
  }
}

export default App;
