import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.army.map(beef => 
              <BotCard 
                bot={beef.bot} 
                key={beef.bot.id}
                army={true} //add a key to help event handling identify whether the card was clicked in collection or army
                handleClick={this.props.handleClick}
              />)}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
