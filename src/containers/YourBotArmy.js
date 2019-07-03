import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    //console.log(this.props);
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.bots.map(bot => {
              return < BotCard
                key={Math.round(Math.random() * 10**6)}
                bot={bot}
                botClickHandler={this.props.botClickHandler}
              />
            })}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
