import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {


  //your code here

  render(){
    // console.log(this.props)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.allBots.map(robot=>{
            return <BotCard bot={robot} handleClick={this.props.handleClick} handleCurrentBot={this.props.handleCurrentBot}/>
          })}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
