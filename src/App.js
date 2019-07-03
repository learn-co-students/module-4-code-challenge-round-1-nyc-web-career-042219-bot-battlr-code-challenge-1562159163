import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {

  state = {
    botCollection: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res => res.json())
      .then(bots => {
        this.setState({botCollection: bots})
      })
  }

  render() {
    // console.log(this.state.botCollection)
    return (
      <div className="App">
        <BotsPage botCollection={this.state.botCollection}/>
      </div>
    );
  }
}

export default App;
