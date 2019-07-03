import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

const API = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    allBots: [],
    yourBotArmy: [],
    currentBot: ''
  }

  handleCurrentBot = (botObj) =>{
    this.setState({
      currentBot: botObj
    })
  }

  handleClick = (botObj) =>{
    if (botObj.enlisted !== true) {
      botObj.enlisted = true
      this.setState({
        yourBotArmy: [...this.state.yourBotArmy, botObj],
        allBots: [...this.state.allBots, botObj]
      })
    } else {
      let foundBot = this.state.yourBotArmy.find(bot=> bot.id === botObj.id)
      foundBot.enlisted = false
      console.log(foundBot)
      let updatedBotArmy = this.state.yourBotArmy.filter(bot=>bot.id !== foundBot.id)
      this.setState({
        yourBotArmy: updatedBotArmy,
        allBots: [...this.state.allBots, foundBot]
      })
    }
  }

  displayBotArmy = () =>{
    return <BotCollection allBots={this.state.allBots} handleClick={this.handleClick} handleCurrentBot={this.handleCurrentBot}/>
  }

  componentDidMount(){
    fetch(API)
    .then(res=>res.json())
    .then(data=>{
      this.setState({
        allBots: data
      })
    })
  }

  render() {
    console.log(this.state.yourBotArmy)
    return (
      <div>
        {<YourBotArmy yourBotArmy={this.state.yourBotArmy} handleClick={this.handleClick} handleCurrentBot={this.handleCurrentBot}/>}
        {this.state.currentBot === '' ? this.displayBotArmy() : 'display current bot specs, refactor click to recruit bot to bot specs card'}
      </div>
    );
  }

}

export default BotsPage;
