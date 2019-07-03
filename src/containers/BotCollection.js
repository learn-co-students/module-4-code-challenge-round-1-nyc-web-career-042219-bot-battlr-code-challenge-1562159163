import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"


//tried to refactor and keep my click to remove from Bot Army, but ran out of time. So Pissed.
class BotCollection extends React.Component {
	//your code here
	state = {
		currentBot: {}
	}

	setCurrentBot = (bot) => {
		this.setState({
			currentBot: bot
		})
	}

	removeCurrentBot = () => {
		this.setState({
			currentBot: {}
		})
	}


	renderBots = () => {
		if(!this.state.currentBot.id){
			return (
				<div className="row">
					{this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} setCurrentBot={this.setCurrentBot}/>)}
				</div>
			) 
		} else {
			return (
				<BotSpecs 
					bot={this.state.currentBot}
					removeCurrentBot={this.removeCurrentBot}
					addToMyArmy={this.props.addToMyArmy}
				/>
			)
		}
	}


  render(){
  	return (
  	  <div className="ui four column grid">
    		  {this.renderBots()}
  	  </div>
  	);
  }

};

export default BotCollection;


//             <BotCard key={bot.id} bot={bot} viewBot={this.setCurrentBot} />
//           ))}
//         </div>
//       );
//     } else {
//       return (
//         <BotSpecs
//           bot={this.state.currentBot}
//           enlist={this.props.addToArmy}
//           goBack={this.clearCurrentBot}
//           addToArmy={this.props.addToArmy}
//         />
//       );
//     }
//   };