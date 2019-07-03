import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"

class BotCollection extends React.Component {





  render(){
    console.log(this.props)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots
        { this.props.singleDisplay ?
          <BotSpecs bot={this.props.selectedBot} changeDisplay={this.props.changeDisplay} handleClick={this.props.addBot}/>
          :
            this.props.bots.map(bot => <BotCard key={bot.id} {...bot}  handleClick={this.props.botSelect}/>)
          }
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
