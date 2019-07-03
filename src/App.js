import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {


  state = {
    bots: [],
    botArmy: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(rsp => rsp.json())
    .then(data => {
      this.setState({
        bots: data
      })
    })
  }

  handleBot = (bot) => {
    this.setState({
      botArmy: [...this.state.botArmy, bot]
    })
  }

  render() {
    return (
      <div className="App">
        <BotsPage botArmy={this.state.botArmy} handleBot={this.handleBot} bots={this.state.bots}/>
      </div>
    );
  }
}

export default App;
