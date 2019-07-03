import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  state = {
    bots: [],
    taken: ""
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(r => r.json())
      .then(botsData => {
        // console.log(bots);
        //map over the incoming data to add on this extra key of taken
        //so i'll be able to check/write conditionals based on that value
        let updatedBot = botsData.map(bot => {return {...bot, taken: false} })
        this.setState({ bots: updatedBot })
      })//end of fetch promise
  }
  //sweet, added the key of taken to each bot, and set it to false upon fetching
  //cant buy/enlist a bot before they're visible

  handleEnlist = (event) => {
    console.log("hmmm", event)
    //i'm going to have to have this handler here because
    //i want to manipulate state at taken and this is where my state lives
    //HELL YEAH i got the event back!!
    console.log("who dis", event.target.alt);
    //i really wanted to use the BotSpec for that button 10/10 user exp but wow nevermind that was a mistake
  }

  render() {
    console.log("bot page", this.state.bots);
    return (
      <div>
        <YourBotArmy bots={this.state.bots} />
        <BotCollection bots={this.state.bots} handleEnlist={this.handleEnlist}/>

      </div>
    );
  }

}

export default BotsPage;
