import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  // state = {
  //   botArmy: []
  // }

  // static getDerivedStateFromProps(props, state) {
  //   console.log(props, state)
  //   return state = {
  //     botArmy: props.botArmy
  //   }
  // }

  renderArmy = () => {
    return this.props.botArmy.map(bot => <BotCard bot={bot} handleClick={this.props.handleClick} key={bot.id}/>);
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row" id="army">
            {/*...and here...*/}
            {this.renderArmy()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
