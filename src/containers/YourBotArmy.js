import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  handleEnlist = (e) => {
    console.log(e)
  }

  render(){
    console.log("your bot army", this.props);
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            Your Bot Army
            
            <BotCard />
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
