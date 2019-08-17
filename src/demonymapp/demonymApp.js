import React from 'react';
import Demonym from './demonym';
import CountrySelector from './countrySelector';



class DemonymApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCountry: null,
      countries: []
    }
  }

  componentDidMount() {
    fetch('https://country.register.gov.uk/records.json?page-size=5000')
    .then(response => {
      if(response.ok) {
        return response.json()
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => {
      // this.setState({ countries: responseJson})
      // console.log(responseJson);
      const countries = Object.keys(responseJson).map(key => {
        console.log(responseJson[key].item[0])
        return responseJson[key].item[0]
      });

      this.setState({ countries: countries});
    })
  }

  handleCountryUpdate = (value) => {
    console.log(value);
    const foundCountry = this.state.countries.find(obj => obj.name === value);
    this.setState({
      selectedCountry: foundCountry
    })
  }

  render() {
    console.log(this.state.selectedCountry);
    const demonym = this.state.selectedCountry
      ?  <Demonym name={this.state.selectedCountry['citizen-names']} country={this.state.selectedCountry.name}/>
      : <div className="demonym_placeholder">Choose a Country!</div>;
    return(
      <div className="DemonymApp">
        <CountrySelector countries={this.state.countries} onCountryUpdate={this.handleCountryUpdate}/>
        {demonym}
      </div>
    )
  }
}

export default DemonymApp;
