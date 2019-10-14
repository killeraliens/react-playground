import React, { Component } from 'react';
import Currency from './Currency'
import CurrencyError from './CurrencyError'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Currencies..</h2>
        <CurrencyError>
          {/*currency error doesnt throw on bad propType passed ? */}
          <Currency locale='de-DE' value='helllo' currency='USD' />
        </CurrencyError>
        <CurrencyError>
          <Currency locale='ja-JP' value={34} currency='JPY' />
        </CurrencyError>
        <CurrencyError>
          <Currency locale='en-US' value={34} currency='HKD' />
        </CurrencyError>
       <p>this shows up</p>
       <Currency locale='ja-JP' value='helllo' currency='JPY' />
       <Currency locale='ja-JP' value={34} currency='JPY' />
       <Currency locale='ja-JP' value={34} currency='JPY' />
      </div>
    );
  }
}

export default App;
