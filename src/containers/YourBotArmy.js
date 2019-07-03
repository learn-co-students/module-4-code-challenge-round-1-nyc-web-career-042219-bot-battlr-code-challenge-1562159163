import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  //your bot army code here...

  render(){
      // console.log(this.props)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.yourBotArmy.map(bot=>{
              return <BotCard bot={bot} handleClick={this.props.handleClick} handleCurrentBot={this.props.handleCurrentBot}/>
            })}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
