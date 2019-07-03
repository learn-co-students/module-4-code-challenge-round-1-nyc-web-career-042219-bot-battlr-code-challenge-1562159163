import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.army.map(bot => {
              return <BotCard key={bot.id} bot={bot} handler={this.props.deenlistBot}/>
            })}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
