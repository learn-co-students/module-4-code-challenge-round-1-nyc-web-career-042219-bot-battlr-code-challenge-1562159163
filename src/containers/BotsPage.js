import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs  from "../components/BotSpecs"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
   allBots: [],
   myBots: [],
   specBot: {},
   showSpecs: false
 }

  componentDidMount() {
    //console.log("hello yes start")
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(botData => {
      this.setState({
        allBots: botData
      })
    })
  }

  toggleSpecs = (bot) => {
    this.setState({
      specBot: bot,
      showSpecs: !this.state.showSpecs
    })
  }

  addBotToArmy = (bot) => {
    if (!this.state.myBots.find(myBot => bot === myBot)) {
      this.setState({
        myBots: [...this.state.myBots, bot]
      })
    }
    this.toggleSpecs()
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

        {this.state.showSpecs ?
            < BotSpecs
              bot={this.state.specBot}
              goBackHandler={this.toggleSpecs}
              enlistHandler={this.addBotToArmy}
            />
          :
            < BotCollection
              bots={this.state.allBots}
              botClickHandler={this.toggleSpecs}
            />
        }
      </div>
    );
  }

}

export default BotsPage;
