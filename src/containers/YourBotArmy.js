import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.selected.map(bot =>
              <BotCard
                {...bot}
                key={bot.id}
                handleClick={this.props.outOfArmy}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
