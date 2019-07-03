import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(response => response.json())
    .then(data => this.setState({ bots: data }));
  }

  render() {
    console.log(this.state)
    return (
      <div>
        < YourBotArmy />
        <BotCollection state = {this.state}/>
      </div>
    );
  }

}

export default BotsPage;
