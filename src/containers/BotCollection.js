import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs'

class BotCollection extends React.Component {

  state = {
    specBot: []
  }

  renderSpecs() {
    console.log("dskjd")
    return (
      <BotSpecs
        intoArmy={this.props.intoArmy}
        {...this.state.specBot[0]}
      />
    )
  }

  renderCollection = () => (
    this.props.bots.map(bot =>
      <BotCard 
        {...bot}
        // key={bot.id}
        handleClick={this.selectSpec}
      />
    )
  )

  selectSpec = (props) => {
    let newSpecBot = this.props.findBot(props.id)
    this.setState({
      specBot: [...this.state.specBot, newSpecBot]
    })
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.state.specBot[0] ? this.renderSpecs() : this.renderCollection()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
