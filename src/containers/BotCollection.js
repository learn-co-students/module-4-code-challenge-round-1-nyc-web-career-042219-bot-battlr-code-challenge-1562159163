import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {



  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots
          {
            this.props.bots.map(bot => <BotCard key={bot.id} {...bot} handleClick={this.props.addBot} />)
          }
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
