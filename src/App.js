import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

export default class App extends Component {

state ={
  bots:[],
  myBots: []
}



  componentDidMount(){
  fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
  .then(r=>r.json())
  .then(data=>{
    this.setState({
      bots: data
    })
  })
}


addBot = (id)=> {
if (this.state.myBots.find(bot=>bot.id === id) === undefined){
  let newArr = this.state.myBots
  let foundBot = this.state.bots.find(bot=>bot.id === id)
  newArr.push(foundBot)
  this.setState({myBots: newArr})
  }
}


removeBot = (id) =>{
  this.setState({
    myBots: this.state.myBots.filter(bot=> bot.id !== id)})
}


        render() {
          return (
            <div className="App">
              <BotsPage
              bots={this.state.bots}
              addBot={this.addBot}
              removeBot={this.removeBot}
              myBots={this.state.myBots}
              />
            </div>
          );
       }
}
