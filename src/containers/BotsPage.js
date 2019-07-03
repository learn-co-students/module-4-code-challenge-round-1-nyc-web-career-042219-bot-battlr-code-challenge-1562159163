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
  //modify state to pass info from Bot Spec to Bot Cards so it renders when recruiting a bot

  handleCurrentBot = (botObj) =>{
    this.setState({
      currentBot: botObj
    })
  }

  //first version
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


  //refactor for second version
  handleRecruitClick = (botObj) =>{
    this.setState({
      yourBotArmy: [...this.state.yourBotArmy, botObj],
      allBots: [...this.state.allBots, botObj]
    })
  }

  handleGoBack = (e) =>{
    e.persist()
    this.setState({
      currentBot: ''
    })
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
    console.log(this.state.currentBot)
    return (
      <div>
        {<YourBotArmy yourBotArmy={this.state.yourBotArmy} handleClick={this.handleClick} handleCurrentBot={this.handleCurrentBot}/>}
        {this.state.currentBot === '' ? this.displayBotArmy() : <BotSpecs bot={this.state.currentBot} handleRecruitClick={this.handleRecruitClick} handleGoBack={this.handleGoBack} currentBot={this.state.currentBot}/>}
      </div>
    );
  }

}

export default BotsPage;
