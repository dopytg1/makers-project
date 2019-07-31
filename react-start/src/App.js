import React, { Component } from 'react';

import User from "./Component/User";




class App extends Component {
  state = {
    person: [{
      name: 'Arti',
      age: 19
    },{
      name:'Miracle',
      age:23
    }]
  }

  changeName = () => {
    this.setState({
      person: [
        {name:"Mike", age: 29},
        {name:"Alex", age: 30}
      ]
    })
  }
  increaseAge = () => {
    let person = this.state.person.map(item => {
      return {
        name: item.name,
        age: item.age + 1
      }
    });
    this.setState({person});
  }

  render() {
    return (
      <div className="App">
        <User 
        name={this.state.person[0].name} 
        age={this.state.person[0].age}
        changeFunc={this.changeName}
        increaseAge={this.increaseAge}
        
        />
        
        <User 
        name={this.state.person[1].name} 
        age={this.state.person[1].age}
        changeFunc={this.changeName}
        
        
        />
      </div>
    );
  }
}

export default App;
