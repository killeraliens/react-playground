import React, { Component } from 'react';
import Currency from './Currency'
import CurrencyError from './CurrencyError'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Currencies..</h2>
        <CurrencyError>
          <Currency locale='de-DE' value={34} currency='US' />
          <Currency locale='ja-JP' value={34} currency='JPY' />
          <Currency locale='en-US' value={34} currency='HKD' />
        </CurrencyError>
      </div>
    );
  }
}

export default App;
