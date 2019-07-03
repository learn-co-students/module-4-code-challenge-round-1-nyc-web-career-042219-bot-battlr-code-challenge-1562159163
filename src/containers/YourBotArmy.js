import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  makeArmyBotCards = () => {
    return this.props.yourBotArmy.map(bot => <BotCard toggleArmyBotClick={this.props.toggleArmyBotClick} key={bot.id} bot={bot} />)
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.makeArmyBotCards()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
