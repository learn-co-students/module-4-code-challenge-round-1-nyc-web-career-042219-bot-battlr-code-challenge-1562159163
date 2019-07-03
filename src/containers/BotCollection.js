import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  
  //your code here

  render(){
  	return (
	<div>
	  <select value={this.props.filter} onChange={(this.props.updateFilter)}>
	  	<option value="">No Filter</option>
  		<option value="Assault">Assault</option>
 		<option value="Support">Support</option>
  		<option value="Defender">Defender</option>
	  </select>
	  <br></br>
	  <br></br>
	  <br></br>
  	  <div className="ui four column grid">
    		<div className="row">
			{this.props.bots.map(bot => <BotCard handleClick={this.props.updateCurrentBot} bot={bot}/>)}
    		</div>
  	  </div>
	</div>
  	);
  }

};

export default BotCollection;
