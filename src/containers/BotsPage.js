import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
     allBots: [],
     myBots: []
 }

  componentDidMount() {
     console.log("hello start")
     fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
     .then(res => res.json())
     .then(botData => {
        this.setState({
           allBots: botData
        })
     })
  }

  addBotToArmy = (bot) => {
    if (!this.state.myBots.find(myBot => bot === myBot)) {
      this.setState({
        myBots: [...this.state.myBots, bot]
      })
    }
  }

  removeBotFromArmy = (bot) => {
    let otherBots = this.state.myBots.filter(myBot => {
      return myBot.id !== bot.id
    })

    this.setState({
      myBots: otherBots
    })
  }

  render() {
    //console.log(this.state);
    return (
      <div>
        < YourBotArmy
          bots={this.state.myBots}
          botClickHandler={this.removeBotFromArmy}
        />
        < BotCollection
          bots={this.state.allBots}
          botClickHandler={this.addBotToArmy}
        />
      </div>
    );
  }

}

export default BotsPage;
