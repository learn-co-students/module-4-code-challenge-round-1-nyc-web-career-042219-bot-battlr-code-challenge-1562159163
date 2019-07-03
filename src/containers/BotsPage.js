import React from "react";
// import BotCard from '../components/BotCard'
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  state = {
    bots: [],
    army: [],
    selectedBot: "",
    displayShow: false
  }

  fetchBots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res=>res.json())
    .then(apiBots => {
      this.setState({
        bots: apiBots
      })
    })
  }

  componentDidMount() {
    this.fetchBots()
  }

  handleEnlist = (id) => {
    if (this.state.army.find(bot=>bot.id === id) === undefined ){
      const newBot = this.state.bots.find(bot=> bot.id === id)
      this.setState({ army: [...this.state.army, newBot]})
    }
  }

 
  handleRemove = (id) =>{
  const updateArr = [...this.state.army.filter(bot=>bot.id !== id)]
    this.setState({ army: updateArr})
  }

  selectBot = (id)=>{
    let selectbot = this.state.bots.find(bot=> bot.id===id)
    this.setState({ selectedBot: selectbot})
    this.setState({ displayShow: !this.state.displayShow },()=>console.log(this.state))

  }

  render() {
    // console.log('rendered bots:', this.state)
    return (
      <div>
        <YourBotArmy 
          army={this.state.army}
          handleClick={this.handleRemove}
          handleRemove={this.handleRemove}
        />
        
      <BotCollection
          bots={this.state.bots}
          selectedBot={this.state.selectedBot}
          handleEnlist={this.handleEnlist}
          handleSelect={this.selectBot}
          displayShow={this.state.displayShow}
        />}

        {/* <BotCollection 
          bots={this.state.bots}
          handleClick={this.handleClick}
        /> */}
      </div>
    );
  }

}

export default BotsPage;
