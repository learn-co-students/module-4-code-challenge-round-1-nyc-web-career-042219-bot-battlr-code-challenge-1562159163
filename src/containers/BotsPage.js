import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    botArmy: [],
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots').then(r => r.json()).then(arrayOfBots => this.setState({
      bots: arrayOfBots,
    }));
  }

  checkIfBotIsAlreadyInArmy = (botObject) => {
    return this.state.botArmy.find(bot => bot.id === botObject.id)
  }

  handleClick = (botId, e) => {
    const botToAddToArmy = this.state.bots.find(bot => bot.id === botId)
    if (e.target.parentElement.parentElement.parentElement.parentElement.id === 'army') {
      const indexOfBot = this.state.botArmy.indexOf(botToAddToArmy)
      // const removed = this.state.botArmy.splice(indexOfBot, 1);
      // console.log('Removed:', removed.length)
      // console.log('State:', this.state.botArmy.length);
      return this.setState({
        botArmy: [...this.state.botArmy],
      });
    }
    if (this.checkIfBotIsAlreadyInArmy(botToAddToArmy)) {
      alert('Can\'t recruit the same bot more than once.')
    } else {
      this.state.botArmy.push(botToAddToArmy);
      this.setState({
        botArmy: [...this.state.botArmy],
      })
    }
  }

  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy botArmy={this.state.botArmy} handleClick={this.handleClick}/>
        <BotCollection bots={this.state.bots} handleClick={this.handleClick}/>
      </div>
    );
  }

}

export default BotsPage;
