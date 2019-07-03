import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	//your code here
	renderAllBots = () => {
		return this.props.bots.map(bot => <BotCard bot={bot} key={bot.id} handleClick={this.props.handleClick}/>)
	}

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
    		  {/* Collection of all bots */}
					{this.renderAllBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
