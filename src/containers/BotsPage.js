import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs  from "../components/BotSpecs"

class BotsPage extends React.Component {
  state = {
   allBots: [],
   myBots: [],
   specBot: {},
   showSpecs: false,
   sortingOption: null
 }

  componentDidMount() {
    console.log("%c bots bots bots", "font-size:20px;font-weight:bold;color:#fd4;text-shadow:2px 2px 2px #f52, -2px -2px 2px #ae6;font-family:monospace")

    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(botData => {
      this.setState({
        allBots: botData
      })
    })
  }

  toggleSpecs = (bot) => {
    this.setState({
      specBot: bot,
      showSpecs: !this.state.showSpecs
    })
  }

  addBotToArmy = (bot) => {
    if (!this.state.myBots.find(myBot => bot === myBot)) {
      this.setState({
        myBots: [...this.state.myBots, bot]
      })
    }
    this.toggleSpecs()
  }

  removeBotFromArmy = (bot) => {
    let otherBots = this.state.myBots.filter(myBot => {
      return myBot.id !== bot.id
    })

    this.setState({
      myBots: otherBots
    })
  }

  render() {
    //console.log(this.state);

    let sortedBots = [...this.state.allBots]
    switch (this.state.sortingOption) {
    case "ID":
      sortedBots = [...this.state.allBots].sort((a, b) => {
        return a.index - b.index
      })
      break
    case "name":
      sortedBots = [...this.state.allBots].sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
      break
    case "health":
      sortedBots = [...this.state.allBots].sort((a, b) => {
        return a.health - b.health
      })
      break
    case "damage":
      sortedBots = [...this.state.allBots].sort((a, b) => {
        return a.damage - b.damage
      })
      break
    case "armor":
      sortedBots = [...this.state.allBots].sort((a, b) => {
        return a.armor - b.armor
      })
      break
    case "class":
      sortedBots = [...this.state.allBots].sort((a, b) => {
        return a.bot_class.localeCompare(b.bot_class)
      })
      break
    }



    return (
      <div>
        < YourBotArmy
          bots={this.state.myBots}
          botClickHandler={this.removeBotFromArmy}
        />

        <form
          className="bot-sorter"
          style={{marginLeft: 100}}
          onChange={event => {
            this.setState({
              sortingOption: event.target.value
            })
          }}
        >
          <label htmlFor="sort-select">Sort bots by: </label>
          <select id="sort-select" defaultValue="none">
            <option value="none" disabled>None</option>
            <option value="ID">ID</option>
            <option value="name">Name</option>
            <option value="health">Health</option>
            <option value="damage">Damage</option>
            <option value="armor">Armor</option>
            <option value="class">Class</option>
          </select>
        </form><br />

        {this.state.showSpecs ?
            < BotSpecs
              bot={this.state.specBot}
              goBackHandler={this.toggleSpecs}
              enlistHandler={this.addBotToArmy}
            />
          :
            < BotCollection
              bots={sortedBots}
              botClickHandler={this.toggleSpecs}
            />
        }
      </div>
    );
  }

}

export default BotsPage;
