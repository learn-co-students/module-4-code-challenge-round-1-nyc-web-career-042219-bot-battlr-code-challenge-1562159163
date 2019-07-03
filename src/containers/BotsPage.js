import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {

  render() {
    return (
      <div>
        <YourBotArmy myBots={this.props.myBots} removeBot={this.props.removeBot}/>
        <BotCollection bots={this.props.bots} addBot={this.props.addBot}/>
      </div>
    );
  }

}

export default BotsPage;
