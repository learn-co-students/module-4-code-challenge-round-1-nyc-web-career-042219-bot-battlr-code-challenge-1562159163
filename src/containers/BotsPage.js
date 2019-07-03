import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {


  state = {
    selectedBot: "",
    singleDisplay: false
  }

  changeDisplay =() =>{
  this.setState({singleDisplay: !this.state.singleDisplay})
  }

  botSelect = (id) => {
    let selectedBot = this.props.bots.find(bot => bot.id === id)
    this.setState({selectedBot: selectedBot})
    this.changeDisplay()
  }



  render() {
    return (
      <div>
        <YourBotArmy myBots={this.props.myBots} removeBot={this.props.removeBot}  />
        <BotCollection bots={this.props.bots} addBot={this.props.addBot} botSelect={this.props.botSelect}  singleDisplay={this.state.singleDisplay} changeDisplay={this.changeDisplay} />
      </div>
    );
  }

}

export default BotsPage;
