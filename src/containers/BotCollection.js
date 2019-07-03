import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
    // console.log('botcoll', this.props);
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.bots.map(bot => {
            return  <BotCard bot={bot} key={bot.id} handler={this.props.enlistBot}/>
          })}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
