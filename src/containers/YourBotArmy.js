import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    console.log(this.props.botArmy)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Tim's Bot Army
            {this.props.botArmy.map(bot => {
            return <BotCard key={bot.id} bot={bot} handleBot={this.props.handleBot}/>
            })}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
