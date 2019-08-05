import React from 'react';

import CountryContainer from "./container/CountryContainer"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CountryContainer />
      </div>
    )
  }
}

if(module.hot) {
  module.hot.accept();
}

export default App;
