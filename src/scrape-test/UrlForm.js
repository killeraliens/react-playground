import React, { Component } from 'react';
// import axios from 'axios';
import cheerio from 'cheerio';
//import $ from 'jquery'

class UrlForm extends Component {

  state = {
    urlVal: ''
  }


  updateUrlVal = (e) => {
    this.setState({
      urlVal: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const corsMed = 'https://cors-anywhere.herokuapp.com/';
    const url = this.state.urlVal;
    //const url = 'https://www.facebook.com/events/2355225007893472'

    fetch(corsMed + url)
    .then(res => {
      if(!res.ok) {
        throw new Error(res.statusText)
      }
      return res.text()
    })
    .then(res => {
      this.setState({
        urlVal: ''
      });
      //this.props.onAddEvent(res)
      let $ = cheerio.load(res);

      console.log('Title:', $('h1').text())
    })
    .catch(err => {
      console.log('ERROR REASON:', err)
      // how do I use context to set a global App error with the message (so that ScrapeApp renders correct page)?
    })
  }

  render() {
    return(
      <form className="UrlForm" onSubmit={this.handleSubmit}>
        <label htmlFor="url-input">Type in URL</label>
        <input id="url-input" name="url-input" type="text" value={this.state.urlVal} onChange={this.updateUrlVal} required/>
        <button type="submit">Scrape Dis</button>
      </form>
    )
  }
}

export default UrlForm;
