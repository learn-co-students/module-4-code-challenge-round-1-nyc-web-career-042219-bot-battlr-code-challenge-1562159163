import React from "react";
import BotCard from '../components/BotCard'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
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
    if(props.collection === true){//if card was clicked on container
      console.log('clicked in container')
      console.log(this.state.army) //but this is only reflected after the second click...
      if (this.state.army.includes(props)) {
        // this.setState({
        //   army: [...this.state.army]
        // })
        console.log('already added')
        return
      } else {
        this.setState({
          army: [...this.state.army, props],
        })
      }
    } else if(props.army === true){//if card was clicked in army
      console.log('clicked in army')
      console.log(this.state.army)
      this.setState({
        army: [...this.state.army.filter(bot => bot !== props)]
        //return everything from army arr state that does not match the clicked bot aka remove bot from arr and rerender
      })
    }
    
  }

  render() {
    // console.log('rendered bots:', this.state)
    return (
      <div>
        <YourBotArmy 
          army={this.state.army}
          handleClick={this.handleClick}
        />

        {this.state.bots.map(bot => 
          <BotCard 
            bot={bot}
            key={bot.id}
            collection={true} //set a key to differentiate where the card lives
            handleClick={this.handleClick}
          />)}
        
      </div>
    );
  }

}

export default BotsPage;
