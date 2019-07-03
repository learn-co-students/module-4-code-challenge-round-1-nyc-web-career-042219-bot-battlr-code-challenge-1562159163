import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    myArmy: []
  }


  handleClick = (props) => {
    if (this.state.myArmy.includes(props.bot)) {
      this.setState({
        myArmy: this.state.myArmy.filter(bot => bot.id !== props.bot.id)
      })
    } else {
      this.setState({
        myArmy: [...this.state.myArmy, props.bot]
      })
    }
  }


  render() {
    // console.log(this.props.botCollection)
    return (
      <div>
        <BotCollection handleClick={this.handleClick} botCollection={this.props.botCollection} />
        <YourBotArmy handleClick={this.handleClick} myArmy={this.state.myArmy} />
      </div>
    );
  }

}

export default BotsPage;
