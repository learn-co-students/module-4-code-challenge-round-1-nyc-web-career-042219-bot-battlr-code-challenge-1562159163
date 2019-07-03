import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

    render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.bots.map(bot => <BotCard name="my-bot" key={bot.id} bot={bot} setCurrentBot={this.props.setCurrentBot} myBotArmy={this.props.myBotArmy} removeFromArmy={this.props.removeFromArmy}/>)}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;