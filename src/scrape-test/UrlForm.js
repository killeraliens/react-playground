import React, { Component } from 'react';
// import axios from 'axios';
import cheerio from 'cheerio';
//import $ from 'jquery'

class UrlForm extends Component {

  state = {
    urlVal: '',
    eventObj: {},
    venueObj: {},
    loading: false
  }


  updateUrlVal = (e) => {
    this.setState({
      urlVal: e.target.value,
      event: {}
    })
  }

  makeEventWithCheerio = ($) => {
    const eventObj = this.state.event
    console.log('Title:', $('h1').text())
    $('h1').text()
      ? eventObj.title = $('h1').text()
      : eventObj.title = 'Couldnt find title';
    this.setState({
      event: eventObj
    })
    //my event object needs to reference a venue id or create a new venue object
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
      let $ = cheerio.load(res);
      this.makeEventWithCheerio($);
      this.setState({
        loading: true
      })
    })
    .then(() => {
        // I need to check the accuracy of the event object here and throw
        // an error if the data is not right or they need to re-enter the url
        // how is best to handle form errors? (will need more for custom form)
        console.log(this.state.event);
        const newEvent = this.state.event
        this.setState({
          loading: false,
          event: {}
        })
        this.props.onAddEvent(newEvent);
        this.props.history.push('/');
    })
    .catch(err => {
      console.log('ERROR REASON:', err)
      this.props.history.push('/add-event');
      //this.props.passErrorStatusText(err)
      // how do I use context to set a global App error with the message (so that ScrapeApp renders correct page)?
    })
  }

  render() {
    if(this.state.loading) {
      return <div>Loading...</div>
    }

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
