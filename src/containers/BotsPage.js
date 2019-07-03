import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

const API = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    allBots: [],
    yourBotArmy: []
  }

  handleClick = (botObj) =>{
    if (botObj.enlisted !== true) {
      botObj.enlisted = true
      console.log(botObj)
      this.setState({
        yourBotArmy: [...this.state.yourBotArmy, botObj],
        allBots: [...this.state.allBots, botObj]
      })
    } else {
      // let foundBot = this.state.yourBotArmy.find(bot=> bot.id === foundBot.id)
      // let updatedBotArmy = this.state.yourBotArmy.map(bot=>{
      //   if (bot.id === botObj.id) {
      //     return {...foundBot, enlisted: false}
      //   } else {
      //     return bot
      //   }
      // })
      // this.setState({
      //   yourBotArmy: updatedBotArmy,
      //   allBots: [...this.state.allBots, botObj]
      // })
    }

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
        {<YourBotArmy yourBotArmy={this.state.yourBotArmy} handleClick={this.handleClick}/>}
        {<BotCollection allBots={this.state.allBots} handleClick={this.handleClick}/>}
      </div>
    );
  }

}

export default BotsPage;
