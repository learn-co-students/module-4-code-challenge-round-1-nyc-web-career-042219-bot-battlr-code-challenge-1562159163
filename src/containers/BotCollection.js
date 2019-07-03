import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  handleClick = (botObj) => {
    console.log("clicked:", botObj.id)
    // let targetBot = this.props.bots.map(bot => bot.id === botObj.id))
    //   this.props.botArmy.push(targetBot)
    // once bot is selected, push to "Your Army" array
  }



  render(){
    console.log(this.props.bots)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.props.bots.map(bot => {
            return <BotCard key={bot.id} {...bot} handleClick={this.handleClick}/>
          })}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
