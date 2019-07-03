import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"

class BotsPage extends React.Component {

  state = {
  	bots: [],
  	yourBotArmy: [],
  	currentBot: null
  }

  toggleArmyBotClick = (bot) => {
  	if (!this.state.yourBotArmy.includes(bot)){
	  	this.setState({
	  		yourBotArmy: [...this.state.yourBotArmy, bot],
	  		currentBot: null
	  	})
  	} else {
  		let newArmy = this.state.yourBotArmy.filter(armyBot => armyBot.id !== bot.id)
	  	this.setState({
	  		yourBotArmy: newArmy,
	  		currentBot: null
	  	})
  	}
  }

  getCurrentBot = (bot) => {
  	this.setState({
  		currentBot: bot
  	})
  }

  clearCurrentBot = () => {
  	this.setState({
  		currentBot: null
  	})
  }


  componentDidMount(){
  	fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
  	.then(res => res.json())
  	.then(data => {
  		this.setState({
  			bots: data
  		})
  	})
  }

  render() {
  	console.log(this.state.currentBot)
    return (
      <div>
      	<YourBotArmy toggleArmyBotClick={this.toggleArmyBotClick} yourBotArmy={this.state.yourBotArmy}/>
      	{this.state.currentBot ? <BotSpecs clearCurrentBot={this.clearCurrentBot} toggleArmyBotClick={this.toggleArmyBotClick} bot={this.state.currentBot} /> : <BotCollection getCurrentBot={this.getCurrentBot} bots={this.state.bots}/>}
      </div>
    );
  }

}

export default BotsPage;
