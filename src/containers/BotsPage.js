import React from "react";
import { runInThisContext } from "vm";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
const URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  //start here with your code for step one
  state ={
    bots: [],
    army: []
  }
  componentDidMount = () =>{
    fetch(URL)
    .then(r => r.json())
    .then(data => {
      this.setState({
        bots: data
      })
    })
  }

  addBotToArmy = (bot) => {
    if(!this.state.army.find(armyBot => bot.id ===armyBot.id)){
      let updatedArmy = [...this.state.army, bot] 
      this.setState({
        army: updatedArmy
      }) 
    }
  }

  removeBotFromArmy = (bot) =>{
    let updatedArmy = [...this.state.army].filter(armyBot => armyBot.id !== bot.id)
    this.setState({
      army: updatedArmy
    })
  }

  render() {
    console.log(this.state.army)
    return (
      <div>
        <YourBotArmy removeBotFromArmy={this.removeBotFromArmy} army={this.state.army}/>
        <BotCollection addBotToArmy={this.addBotToArmy} bots = {this.state.bots}/>
      </div>
    );
  }

}

export default BotsPage;
