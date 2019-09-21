import React from 'react';
import Demonym from './demonym';
import './demonymApp.css';
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
      if(!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(responseJson => {
      // this.setState({ countries: responseJson})
      // console.log(responseJson);
      const countries = Object.keys(responseJson).map(key => {
        //console.log(responseJson[key].item[0])
        return responseJson[key].item[0]
      });
      this.setState({
        countries: countries,
        error: null
      });
    })
    .catch(err => {
      this.setState({error: err.message})
    })
  }

  handleCountryUpdate = (selected) => {
    this.setState({selectedCountry: selected})
  }

  render() {
    console.log(this.state.selectedCountry);
    const error = this.state.error
      ? <div className="error-message">{this.state.error}</div>
      : "";
    const demonym = this.state.selectedCountry
      ?  <Demonym name={this.state.selectedCountry['citizen-names']} country={this.state.selectedCountry.name}/>
      : <div className="demonym_placeholder">Choose a Country</div>;
    const selector = this.state.countries.length === 0
      ? <div className="loadingsquare">loading</div>
      : <CountrySelector countries={this.state.countries} onCountryUpdate={this.handleCountryUpdate}/>;
    return(
      <div className="DemonymApp">
        {error}
        { selector }
        {demonym}
      </div>
    )
  }
}

export default DemonymApp;
