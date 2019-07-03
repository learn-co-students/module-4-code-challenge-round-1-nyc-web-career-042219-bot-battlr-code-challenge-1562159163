import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    myBotArmy: []
  }


  botClickHandler = (event, key) => { //I tried using on click handler for adding a bot to my army and for removing it, and now I think that was probably why my setState to remove a bot was asynchronous. If I had more time I would seperate the click handlers, which I've started doing.
    
    let selectedBot = this.state.bots.find(function(bot) {
      return bot.id === key
    });

    if (this.state.myBotArmy.includes(selectedBot)){
      this.removeBot(selectedBot)
      //this call is asynchronous, and isn't being acted upon until a new setState is called
    } else {
      this.setState({
        myBotArmy: [...this.state.myBotArmy, selectedBot]
      })
    }
  }

  
  removeBot = (selectedBot) => { //I made this function in an attempt to get state to update immediately. It didn't work.
    let botArmy = this.state.myBotArmy
      console.log(botArmy)
      for(let i = 0; i < botArmy.length; i++) {
        if (botArmy[1] === selectedBot) {
          botArmy.splice(i, 1);
        }
    }
    this.setState({
      myBotArmy: botArmy
    })
  }

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
