import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.bots.map(bot => {
            return < BotCard
              key={Math.round(Math.random() * 10**6)}
              bot={bot}
              botClickHandler={this.props.botClickHandler}
            />
          })}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
