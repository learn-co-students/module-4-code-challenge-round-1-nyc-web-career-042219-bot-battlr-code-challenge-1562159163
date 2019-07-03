import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"


//tried to refactor and keep my click to remove from Bot Army, but ran out of time. So Pissed.
class BotCollection extends React.Component {
	//your code here

	//rendered the bots with a conditional for the refactor so that if no bot is selected with the specific ID, then all bots, else return the spec of the bot with the selected ID
	renderBots = () => {
		if(!this.props.currentBot.id){
			return (
				<div className="row">
					{this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} setCurrentBot={this.props.setCurrentBot} />)}
				</div>
			) 
		} else {
			return (
				<BotSpecs 
					bot={this.props.currentBot}
					removeCurrentBot={this.props.removeCurrentBot}
					addToMyArmy={this.props.addToMyArmy}
				/>
			)
		}
	}


  render(){
  	return (
  	  <div className="ui four column grid">
    		  {this.renderBots()}
  	  </div>
  	);
  }

};

export default BotCollection;