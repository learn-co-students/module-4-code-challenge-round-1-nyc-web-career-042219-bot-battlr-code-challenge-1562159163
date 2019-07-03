import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
  //your code here

  render(){
    if(this.props.theBot===null){
    	return (
    	  <div className="ui four column grid">
      		<div className="row">
      		  Collection of all bots
            {this.props.allBots.map(bot=>{
              return <BotCard  showTheBot={this.props.showTheBot} handleYourBot={this.props.handleYourBot} key={bot.id} bot={bot}/>
            })}
      		</div>
    	  </div>
    	);
    }else{
    return (
      <div className="ui four column grid">
        <div className="row">
          Selected bots

           <BotSpecs showTheBot={this.props.showTheBot} handleYourBot={this.props.handleYourBot} key={this.props.theBot.id} bot={this.props.theBot}/>

        </div>
      </div>
    );
  }
}

};

export default BotCollection;
