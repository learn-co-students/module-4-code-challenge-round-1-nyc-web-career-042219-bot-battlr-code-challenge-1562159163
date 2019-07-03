import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  

  render(){
	//   console.log(this.props.botCollection)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.botCollection.map(bot => {
				  return <BotCard key={bot.id} bot={bot} handleClick={this.props.handleClick}/>
			  })}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
