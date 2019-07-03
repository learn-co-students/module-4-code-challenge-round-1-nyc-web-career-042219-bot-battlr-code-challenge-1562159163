import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"

class BotCollection extends React.Component {
  //your code here

	render(){
		console.log(this.props.displayShow)
	return (
		<div className="ui four column grid">
			<div className="row">
				{
				this.props.displayShow ?
						<BotSpecs bot={this.props.selectedBot} handleClick={this.props.handleEnlist} handleSelect={this.props.handleSelect}/>
				:
				this.props.bots.map(bot =>
					<BotCard

						key={bot.id}

						{...bot}//set a key to differentiate where the card lives
						handleClick={this.props.handleSelect}
					/>)
				}
				
			</div>
		</div>
		);
	}

};

export default BotCollection;
