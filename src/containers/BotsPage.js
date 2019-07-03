import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {

  state = {
  	bots: [],
  	YourBotArmy: [],
  	currentBot: {}
  }

  componentDidMount(){
  	fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
  	.then(res => res.json())
  	.then(data => {
  		this.setState({
  			bots: data
  		})
  	})
  }

  render() {
    return (
      <div>
      	<YourBotArmy />
      	<BotCollection bots={this.state.bots}/>
        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
