import React, { Component } from 'react';
// import axios from 'axios';
import cheerio from 'cheerio';
//import $ from 'jquery'

class UrlForm extends Component {

  state = {
    urlVal: ''
  }


  handleChange = (e) => {
    this.setState({
      urlVal: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const url = 'https://www.facebook.com/events/2355225007893472'
    const corsMed = 'https://cors-anywhere.herokuapp.com/';
    // const url = 'https://medium.com/data-scraper-tips-tricks/scraping-data-with-javascript-in-3-minutes-8a7cf8275b31'
    // let $ = cheerio.load(corsMed + url);
    // //console.log($)
    // $('section').each(span => console.log(span.text()))


    fetch(corsMed + url)
    .then(res => {
      if(!res.ok) {
        throw new Error(res.statusText)
      }
      return res.text()
    })
    .then(res => {
      //this.props.onAddEvent(res)
      //console.log(res)
      let $ = cheerio.load(res);

      console.log($('h1').text())
    })
    .catch(err => {
      console.log('ERROR REASON:', err)
    })
  }

  render() {
    return(
      <form className="UrlForm" onSubmit={this.handleSubmit}>
        <label htmlFor="url-input">Type in URL</label>
        <input id='url-input' name='url-input' type="text" value={this.state.urlVal} onChange={this.handleChange}/>
        <button type="submit">Scrape Dis</button>
      </form>
    )
  }
}

export default UrlForm;
