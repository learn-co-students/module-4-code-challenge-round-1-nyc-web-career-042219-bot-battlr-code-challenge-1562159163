import React from "react";
import BotCollection from './BotCollection'

class BotsPage extends React.Component {
  //start here with your code for step one

  state= {
    allBots: [],
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(response => response.json())
      .then(data => this.setState({ allBots: data }));
  }

  render() {
    // console.log(this.state.allBots)
    return (
      <div>
        <BotCollection bots={this.state.allBots} />
      </div>
    );
  }

}

export default BotsPage;
