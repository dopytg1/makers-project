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

  deletePerson = (index) => {
    let person = this.state.person;
    person.splice(index, 1);

    this.setState({person});
  }

  render() {
    return (
      <div className="App">
        {this.state.person.map((item,index) => {
          return(
        <User 
            key={index}
            name={item.name}
            age={item.age}

            deletePerson={() => this.deletePerson(index)}
        />
          )
        })}
        
      </div>
    );
  }
}

export default App;
