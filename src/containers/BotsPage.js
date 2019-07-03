import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

const URL = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    botArmy: []
  }

  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(data => {
      this.setState({
        bots: data
        })
      })
    }

    // handleClick = (botObj) => {
    //   console.log("clicked:", botObj.id)
    //   console.log(this.state.botArmy)
    //   // let targetBot = this.props.bots.map(bot => bot.id === botObj.id))
    //   //   this.props.botArmy.push(targetBot)
    // }

    // Moved handleClick to parent of Collection and Army, didn't have time to refactor child components...



  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.botsArmy}/>
        <BotCollection bots={this.state.bots} />
      </div>
    );
  }

}

export default BotsPage;
