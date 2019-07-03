import React from "react";
import { runInThisContext } from "vm";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'
const URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  //start here with your code for step one
  state ={
    bots: [],
    army: [],
    currentBot: null
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
    this.resetCurrentBot()
  }

  removeBotFromArmy = (bot) =>{
    let updatedArmy = [...this.state.army].filter(armyBot => armyBot.id !== bot.id)
    this.setState({
      army: updatedArmy
    })
  }

  updateCurrentBot = (bot) => {
    this.setState({
      currentBot: bot
    })
  }

  resetCurrentBot = () => {
    this.setState({
      currentBot: null
    })
  }

  render() {
    console.log(this.state.army)
    return (
      <div>
        <YourBotArmy removeBotFromArmy={this.removeBotFromArmy} army={this.state.army}/>
        {this.state.currentBot 
        ?
        <BotSpecs addBotToArmy={this.addBotToArmy} resetCurrentBot={this.resetCurrentBot} bot={this.state.currentBot}/>
        :
        <BotCollection updateCurrentBot={this.updateCurrentBot} bots = {this.state.bots}/>
      }
      </div>
    );
  }

}

export default BotsPage;
