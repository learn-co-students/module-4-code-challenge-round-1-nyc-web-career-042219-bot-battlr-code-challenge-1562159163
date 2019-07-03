import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {

  state = {
  	bots: [],
  	yourBotArmy: [],
  	currentBot: {}
  }

  toggleArmyBotClick = (bot) => {
  	if (!this.state.yourBotArmy.includes(bot)){
	  	this.setState({
	  		yourBotArmy: [...this.state.yourBotArmy, bot],
	  		currentBot: bot
	  	})
  	} else {
  		let newArmy = this.state.yourBotArmy.filter(armyBot => armyBot.id !== bot.id)
	  	this.setState({
	  		yourBotArmy: newArmy
	  	})
  	}
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
    return (
      <div>
      	<YourBotArmy toggleArmyBotClick={this.toggleArmyBotClick} yourBotArmy={this.state.yourBotArmy}/>
      	<BotCollection toggleArmyBotClick={this.toggleArmyBotClick} bots={this.state.bots}/>
      </div>
    );
  }

}

export default BotsPage;
