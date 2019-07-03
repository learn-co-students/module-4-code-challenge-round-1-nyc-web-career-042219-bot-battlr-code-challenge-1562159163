import React from "react";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {

  render(){
    console.log("bot colleciton", this.props)
    //sweet got the bots, gotta map over to render each bot with its own card
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
        Collection of all bots
    		  {
            this.props.bots.map( bot => {
              return <BotSpecs handleEnlist={this.props.handleEnlist} key={bot.id} {...bot} />
              })
          }

    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
