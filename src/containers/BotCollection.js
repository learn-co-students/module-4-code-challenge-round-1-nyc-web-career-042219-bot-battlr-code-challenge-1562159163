import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
    // console.log('botcollection', this.props.bots)

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots
          {this.props.bots.map({bots =>
            return <BotCard key={bot.name} {...bot} moveBotToArmy={props.moveBotToArmy} />
            }
          })
        }
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
