import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'
// import { prependOnceListener } from "cluster";

class BotsPage extends React.Component {

  state = {
    bots: [],
    selected: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res => res.json())
      .then(data => this.setState({bots: data}))
  }

  findBot = (id) => {
    let selectedBot = this.state.bots.find(function(bot) {
      return bot.id === id
    })
    return selectedBot
  }

  intoArmy = (props) => {
    let selectedBot = this.findBot(props.id)

    if(this.state.selected.includes(selectedBot)) {
      return null
    } else {
      this.setState({
        selected: [...this.state.selected, selectedBot]
      })
    }
  }

  outOfArmy = (props) => {
    let selectedBot = this.findBot(props.id)
  
    let index = this.state.selected.indexOf(selectedBot)

    let newArmy = this.state.selected
    newArmy.splice(index, 1)

    this.setState({
      selected: newArmy
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy
          selected={this.state.selected}
          outOfArmy={this.outOfArmy}
        />
        <BotCollection 
          bots={this.state.bots}
          intoArmy={this.intoArmy}
          findBot={this.findBot}
        />
      </div>
    );
  }

}

export default BotsPage;
