import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    console.log(this.props.myArmy)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.myArmy.map(bot => {
              return <BotCard key={bot.id} bot={bot} handleClick={this.props.handleClick}/>
            })
            }
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
