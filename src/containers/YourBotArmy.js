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
            return <BotCard key={bot.id} bot={bot}/>
            })}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;


/// I have the bot I want in my botArmy already, if I click on
/// a bot from the collection they are added to my army. I can
/// not add the same bot twice.
/// Now what I need to do, is remove a bot from my army, on a click
///
