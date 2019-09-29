import React, { Component } from 'react';

class CustomEventForm extends Component {
  state = {
    title: '',
    imageUrl: '',
    date: '',
    bands: '',
    venueId: ''
  }

  validate = (newEvent) => {
    console.log('validating....success');
    this.props.onAddEvent(newEvent)
  }

  makeEvent = (e) => {
    e.preventDefault();

    // how do i shorthand the creation of an event object from these state values?
    // how do i Safely clone this.state object
    const newEvent = { ...this.state };
    this.validate(newEvent);
  }

  updateTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  render() {
    return(
      <form className="CustomEventForm" onSubmit={this.makeEvent}>
        <label htmlFor="event-title">Title</label>
        <input type="text" id="event-title" name="event-title" value={this.state.title} onChange={this.updateTitle}/>
        <button type="submit">Add It</button>
      </form>
    )
  }
}

export default CustomEventForm;
