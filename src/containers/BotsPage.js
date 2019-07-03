import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

const URL = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    botArmy: [],
    currentBot: null
  }

  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(data => {
      this.setState({
        bots: data
        })
      })
    }

    handleClick = (botObj) => {
      if (!this.state.botArmy.find(bot => bot.id === botObj.id)) {
        let updatedArmy = [...this.state.botArmy, botObj]
        this.setState({
          botArmy: updatedArmy
        })
      }
    }

      handleRemove = (botObj) => {
          let changeBotArmy = this.state.botArmy.filter(bot => bot.id !== botObj.id)
          this.setState({
            botArmy: changeBotArmy
          })
        }


  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} handleClick={this.handleRemove}/>
        <BotCollection bots={this.state.bots} handleClick={this.handleClick}/>
      </div>
    );
  }

}

export default BotsPage;
