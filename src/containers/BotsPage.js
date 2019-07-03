import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

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

  intoArmy = (id) => {
    let selectedBot = this.findBot(id)

    if(this.state.selected.includes(selectedBot)) {
      return null
    } else {
      this.setState({
        selected: [...this.state.selected, selectedBot]
      })
    }
  }

  outOfArmy = (id) => {
    let selectedBot = this.findBot(id)
  
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
        />
      </div>
    );
  }

}

export default BotsPage;
