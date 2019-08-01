import React from 'react';

import CountryComponent from "../component/CountryComponent"
import "../component/Component.css"

class CountryContainer extends React.Component {
  state = {
    data:[]
  }

  
  componentWillMount=() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(responce => responce.json())
      .then(body => this.setState({ data: body }))
      .catch(err => console.log(err));
  }



  deleteCountrie = (index) => {
    let countries = this.state.data;
    countries.splice(index,1);
    
    this.setState({ data: countries });
  }


  render() {
    return (
        <div>
          <div className="app-main">
            <div ><p>code:</p></div>
            <div ><p>flag:</p></div>
            <div ><p>name:</p></div>
            <div ><p>capital:</p></div>
            <div ><p>population:</p></div>
          </div>
         {this.state.data.map((item, index) => <CountryComponent key={index}  deleteCountrie={() => this.deleteCountrie(index)} data={item}/>)}
      </div>
    )
  }
}

export default CountryContainer;
