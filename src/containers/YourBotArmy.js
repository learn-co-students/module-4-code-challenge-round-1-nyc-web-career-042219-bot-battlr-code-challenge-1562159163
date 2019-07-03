import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  render(){
    console.log(this.props, "bot army")
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
             {
              this.props.army.map(bot =>   <BotCard {...bot} key={bot.id}  handleClick={this.props.handleRemove} />)
             }
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
