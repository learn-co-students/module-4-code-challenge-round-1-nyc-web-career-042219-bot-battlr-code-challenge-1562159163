import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'


class BotsPage extends React.Component {

// Fetching all bots and setting state of bot cards. By default, bots are not in my army.
  state = {
    bots: []
    botinArmy: false
  }

  // Callback function to change bots from not in my army to in army.  Will sync with click listener in BotCard.

    moveBotToArmy = () => {
      this.setState({
        botinArmy: !this.state.botinArmy
      }
    }

    botsArmy = () => {
      if (this.state.botInArmy){
        return bots.filter(bot =>  {
          return bot.botInArmy
        })
      }
    }

//Need to amend - wasn't sure how to return the inverse situation where bot.botInArmy = false
    botsCollection = () => {
      if (this.state.botInArmy !== true){
        return bots.filter(bot =>  {
          return bot.botInArmy
        })
      }
    }

//Fetching bots array
  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(response => response.json())
      .then(data => this.setState({ bots: data }));
  }

  render() {
    // console.log('test',this.state)
    return (
      <div>
        <BotCollection bots={this.botsCollection} moveBotToArmy={this.state.moveBotToArmy} />
        <YourBotArmy bots={this.botsArmy} moveBotToArmy={this.state.moveBotToArmy}
      </div>
    );
  }
}

export default BotsPage;
