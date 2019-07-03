import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";


class BotsPage extends React.Component {
  //start here with your code for step one
  state={
    allBots:[],
    yourBot:[],
    theBot:null
  }

  handleYourBot=(bot)=>{
    if(this.state.yourBot.includes(bot)){
      this.setState({
        theBot:null
      })
    }else{
    this.setState({
      yourBot: [...this.state.yourBot,bot],
      theBot:null
    })}
  }

  showTheBot=(bot,botPostion)=>{
    if(botPostion ==="true"){

      let newArray = this.state.yourBot.filter(thing=>{
        return thing !== bot
      })
      this.setState({
        yourBot:newArray
      })
    }else{
      this.setState({
        theBot:bot
      })
    }
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r=>r.json())
    .then(data => {
      this.setState({
        allBots:data
      })
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy showTheBot={this.showTheBot} yourBot={this.state.yourBot}/>
        <BotCollection theBot={this.state.theBot} showTheBot={this.showTheBot} handleYourBot={this.handleYourBot} allBots={this.state.allBots} />
      </div>
    );
  }

}

export default BotsPage;
