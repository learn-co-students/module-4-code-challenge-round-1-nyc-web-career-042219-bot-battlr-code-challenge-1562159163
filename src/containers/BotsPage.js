import React from "react";
import BotCollection from  './BotCollection'
import YourBotArmy from "./YourBotArmy"


const API = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {

  state = {
    bots: [],
    army: [],
  }

  enlistBot = (bot) => {
    // console.log('clicked a bot', bot);
    if(this.state.army.indexOf(bot) == -1){
      this.state.army.push(bot)
      this.setState({
        army: this.state.army
      })
    }
  }

  deenlistBot = (bot) => {
    // console.log('clicked to deenlist', bot);
    let botIndex = this.state.army.indexOf(bot)
    this.state.army.splice(botIndex, 1)
    this.setState({
      army: this.state.army
    })
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(serverBots => {
      this.setState({
        bots: serverBots
      })
    })
  }


  render() {
    console.log('bots pg army', this.state.army);
    return (
      <div>
        <YourBotArmy army={this.state.army} deenlistBot={this.deenlistBot}/>
        <BotCollection bots={this.state.bots} enlistBot={this.enlistBot}/>
      </div>
    );
  }

}

export default BotsPage;
