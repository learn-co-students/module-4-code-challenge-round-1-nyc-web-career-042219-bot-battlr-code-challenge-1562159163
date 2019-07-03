import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
    		  Collection of all bots
			  {this.props.state.bots.map ((bot) => {
				  return < BotCard bot={bot} key={bot.id} botClickHandler={this.props.botClickHandler}/>
			  })}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
