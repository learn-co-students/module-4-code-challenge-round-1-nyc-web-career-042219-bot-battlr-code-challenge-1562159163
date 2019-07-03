import React from "react";
import BotCard from '../components/BotCard'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    army: []
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

  handleClick = (props) => {
    // if(props.army === false) {
      this.setState({
        army: [...this.state.army, props]
      })
      console.log('army', this.state.army)
      // props.army = !props.army
    }

  render() {
    console.log('rendered bots:', this.state)
    return (
      <div>
        <YourBotArmy 
          army={this.state.army}
        />

        {this.state.bots.map(bot => 
          <BotCard 
            bot={bot}
            key={bot.id}
            cont={'collection'}
            // army={false}
            handleClick={this.handleClick}
          />)}
      </div>
    );
  }

}

export default BotsPage;
