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
    currentBot: null,
    filter: ""
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
    this.updateCurrentBot(null)
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

  updateFilter = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  filterBots = () => {
    let filteredBots = [...this.state.bots].filter(bot => bot.bot_class.includes(this.state.filter) )
    return filteredBots
  }

  render() {
   
    return (
      <div>
        <YourBotArmy removeBotFromArmy={this.removeBotFromArmy} army={this.state.army}/>
        {this.state.currentBot 
        ?
        <BotSpecs addBotToArmy={this.addBotToArmy} updateCurrentBot={this.updateCurrentBot} bot={this.state.currentBot}/>
        :
        <BotCollection filter={this.state.filter} updateFilter={this.updateFilter} updateCurrentBot={this.updateCurrentBot} bots = {this.filterBots()}/>
      }
      </div>
    );
  }

}

export default BotsPage;
