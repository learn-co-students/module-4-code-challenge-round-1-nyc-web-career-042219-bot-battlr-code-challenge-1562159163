import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'


class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    myBotArmy: [],
    currentBot: {}
  }

  fetchBots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(response => response.json())
    .then(data => {
      this.setState({
        bots: data
      })
    })
  }

  componentDidMount(){
    this.fetchBots()
  }

  addToMyArmy = (bot) => {
    this.setState({
      myBotArmy: [...this.state.myBotArmy, bot]
    })
  }


  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.myBotArmy}/>
        <BotCollection bots={this.state.bots} addToMyArmy={this.addToMyArmy}/>
        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;