import React from "react";
import BotCard from "../components/BotCard";


class BotCollection extends React.Component {
  //your code here
  state ={
	  englists: "",
  }


// make clickHandler 
// find the bot that was clicked and make change to show that it was enlisted 

handleChange = (event) => {
  this.setState({
   enlist: event.target.value
  })
}




  // enlistBoat = (bot) => {
  //   let enlisted = this.state.englists.filter(englisted => enlisted.id !== bot.id)

  //   this.setState({
  //     englist: enlisted,
  //     enlistedBot: [...this.state.englistedBot, bot]
  //   })
  // }

  render(){
  	return (
  	  <div className="ui four column grid" >
    		<div className="row" >
		
					{this.props.bots.map(bot => {
						return<BotCard key={bot.id} bot={bot}  enlist={this.state.enlist} handleClick={this.handleChange}/>})}

    		  Collection of all bots
    		</div>
      
  	  </div>
  	);
  }

};

export default BotCollection;
