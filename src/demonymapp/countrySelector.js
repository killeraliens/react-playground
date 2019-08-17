import React from 'react';

class CountrySelector extends React.Component {
  handleChange = (e) => {
    this.props.onCountryUpdate(e.target.value);
  }

  render() {
    const options = this.props.countries.map((country, i) => {
       return <option value={country.name} key={i}>{country.name}</option>
    });


    return(
      <div className="CountrySelector">
        <form>
          <label htmlFor="country">Select A Country</label>
          <select id="country" name="country" onChange={this.handleChange}>
            <option value="None">Select one...</option>
            {options}
          </select>
        </form>
      </div>
    )
  }
}

CountrySelector.defaultProps = {
  countries: []
}

export default CountrySelector;
