import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    myBotArmy: []
  }

  botClickHandler = (event, key) => {
    console.log(key)
    // debugger
    let selectedBot = this.state.bots.find(function(bot) {
      return bot.id === key
    });
    console.log(selectedBot)
    this.setState({
      myBotArmy: [...this.state.myBotArmy, selectedBot]
    })
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
        < YourBotArmy state = {this.state}/>
        <BotCollection state = {this.state} botClickHandler={this.botClickHandler}/>
      </div>
    );
  }

}

export default BotsPage;
