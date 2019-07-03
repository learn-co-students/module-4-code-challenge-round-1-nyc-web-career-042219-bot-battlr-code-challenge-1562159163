import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'


class BotsPage extends React.Component {
  //start here with your code for step one
  //set bots to use for all bots
  //set myBotArmy to use for rendering my army bots
  //currentBot is the currentBot selected
  state = {
    bots: [],
    myBotArmy: [],
    currentBot: {}
  }

  //fetching my bots and setting state to the data
  fetchBots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(response => response.json())
    .then(data => {
      this.setState({
        bots: data
      })
    })
  }
//mounting it
  componentDidMount(){
    this.fetchBots()
  }

  //adding selected bot to mybotarray
  addToMyArmy = (bot) => {
    this.setState({
      myBotArmy: [...this.state.myBotArmy, bot]
    })
  }

  //function to select a bot to remove
  removeFromArmy = (bot) => {
    this.setState({
      myBotArmy: bot
    })
  }

  //function to remove the current bot to clear the Specs Page
  removeCurrentBot = () => {
		this.setState({
			currentBot: {}
		})
	}

  //brought up set current bot and added a class type so that I could grab the associated bot from my bot army to either remove it or set the selected bot into my page
  setCurrentBot = (bot, type) => {
		if (type === 'my-bot'){
			let filteredArmy = this.state.myBotArmy.filter(botInArmy => botInArmy !== bot)
			this.removeFromArmy(filteredArmy)
		}	else {
			this.setState({
				currentBot: bot
			})
		}
	}

  //need to render yourbotarmy
  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.myBotArmy} setCurrentBot={this.setCurrentBot} removeFromArmy={this.removeFromArmy}/>
        <BotCollection setCurrentBot={this.setCurrentBot} removeCurrentBot={this.removeCurrentBot} currentBot={this.state.currentBot} myBotArmy={this.state.myBotArmy} bots={this.state.bots} addToMyArmy={this.addToMyArmy} removeFromArmy={this.removeFromArmy}/>
        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;