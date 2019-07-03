import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"

class BotCollection extends React.Component {
  //your code here

  state = {
	  goBack: false
  }

  toggleGoBack = () => {
	  this.setState({goBack: true})
  }

  render(){
	//   console.log(this.props.botCollection)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.botCollection.map(bot => {
				  if(this.state.goBack){ 
				  return <BotCard key={bot.id} bot={bot} handleClick={this.props.handleClick} />
				  } else {
				  return <BotSpecs toggleGoBack={this.toggleGoBack} goBack={this.state.goBack} key={bot.id} bot={bot} handleClick={this.props.handleClick}/>
				  }
			  })}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
