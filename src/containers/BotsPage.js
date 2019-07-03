import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    myBotArmy: []
  }

  // botToRemove(selectedBot) {
  //   this.state.myBotArmy.find(function(bot) {
  //     return bot.id === selectedBot.id
  //   })
  // }

  botClickHandler = (event, key) => {
    // console.log(key)
   
    let selectedBot = this.state.bots.find(function(bot) {
      return bot.id === key
    });

    if (this.state.myBotArmy.includes(selectedBot)){

      console.log(selectedBot)

      let botArmy = this.state.myBotArmy
      console.log(botArmy)
      for(let i = 0; i < botArmy.length; i++) {
        if (botArmy[1] === selectedBot) {
          botArmy.splice(i, 1);
          this.setState({myBotArmy: botArmy})
        }
      }


      // let array = [...this.state.myBotArmy]
      // let index = array.indexOf(selectedBot.id)
      // if (index !== -1) {
      //   array.splice(index, 1);
      //   this.setState({myBotArmy: array})
      // }
    } else {
      this.setState({
        myBotArmy: [...this.state.myBotArmy, selectedBot]
      })
    }
  }

  // addBotToArmy() {
  //   selectedBot = 
  //   this.setState({
  //     myBotArmy: [...this.state.myBotArmy, selectedBot]
  //   })
  // }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(response => response.json())
    .then(data => this.setState({ bots: data }));
  }

  render() {
    console.log(this.state)
    return (
      <div>
        < YourBotArmy state = {this.state} botClickHandler={this.botClickHandler}/>
        <BotCollection state = {this.state} botClickHandler={this.botClickHandler}/>
      </div>
    );
  }

}

export default BotsPage;
