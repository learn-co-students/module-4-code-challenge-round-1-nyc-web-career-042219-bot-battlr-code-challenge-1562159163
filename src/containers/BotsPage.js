import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
class BotsPage extends React.Component {
  //start here with your code for step one

  render() {
    return (

      <div>
        {<YourBotArmy handleBot={this.props.handleBot} botArmy={this.props.botArmy} />}
        {<BotCollection handleBot={this.props.handleBot} bots={this.props.bots} />}
      </div>



    );
  }

}

export default BotsPage;
