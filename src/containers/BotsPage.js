import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"
import SortForm from '../components/SortForm'

class BotsPage extends React.Component {

  state = {
  	bots: [],
  	yourBotArmy: [],
  	currentBot: null,
  	sortType: "All"
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

  handleSortChange = (e) => {
  	this.setState({
  		sortType: e.target.value
  	})
  }

  filterTheseBots = () => {
  	if (this.state.sortType === "Defender"){
  		return this.state.bots.filter(bot => bot.bot_class === "Defender")
  	} else if (this.state.sortType === "Assault"){
  		return this.state.bots.filter(bot => bot.bot_class === "Assault")
  	} else if (this.state.sortType === "Support"){
  		return this.state.bots.filter(bot => bot.bot_class === "Support")
  	} else if (this.state.sortType === "All"){
  		return this.state.bots
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
  	console.log(this.state.bots)
    return (
      <div>
      	<YourBotArmy toggleArmyBotClick={this.toggleArmyBotClick} yourBotArmy={this.state.yourBotArmy}/>	
      	<SortForm handleSortChange={this.handleSortChange } />
      	<br />
      	{this.state.currentBot ? <BotSpecs clearCurrentBot={this.clearCurrentBot} toggleArmyBotClick={this.toggleArmyBotClick} bot={this.state.currentBot} /> : <BotCollection getCurrentBot={this.getCurrentBot} bots={this.filterTheseBots()}/>}
      </div>
    );
  }

}

export default BotsPage;
