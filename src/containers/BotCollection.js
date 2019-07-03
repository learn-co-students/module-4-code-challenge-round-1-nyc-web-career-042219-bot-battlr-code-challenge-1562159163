import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  makeCards = () => {
    return this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} />)
  }

  render(){
    console.log(this.props)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.makeCards()}
    		 
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
