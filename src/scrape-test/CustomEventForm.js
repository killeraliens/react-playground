import React, { Component } from 'react';

class CustomEventForm extends Component {
  state = {
    event: {
      title: '',
      imageUrl: '',
      date: '',
      bands: '',
      venueId: ''
    },

  }

  validate = (newEvent) => {
    console.log('validating....success');
    this.props.onAddEvent(newEvent)
  }

  makeEvent = (e) => {
    e.preventDefault();

    // how do i shorthand the creation of an event object from these state values?
    // how do i Safely clone this.state object
    const newEvent = { ...this.state.event };
    this.validate(newEvent);
  }

  // how do I set the state on a sub-object
  updateTitle = (e) => {
    // this.setState(
    // event: {
    //   title: e.target.value
    // })
  }

  render() {
    return(
      <form className="CustomEventForm" onSubmit={this.makeEvent}>
        <label htmlFor="event-title">Title</label>
        <input type="text" id="event-title" name="event-title" value={this.state.title} onChange={this.updateTitle} />
        <button type="submit">Add It</button>
      </form>
    )
  }
}

export default CustomEventForm;
