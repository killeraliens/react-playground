import React, { Component } from 'react';

class CustomEventForm extends Component {
  state = {
    event: {
      title: '',
      imageUrl: '',
      date: '',
      bands: '',
      venueId: ''
    }

  }

  validate = (newEvent) => {
    console.log('validating....success');
    this.props.onAddEvent(newEvent)
  }

  makeEvent = (e) => {
    e.preventDefault();

    const newEvent = { ...this.state.event };
    this.validate(newEvent);
  }

  updateTitle = (e) => {
    const event = { ...this.state.event}
    event.title = e.target.value
    this.setState({
      event
    })
  }

  render() {
    return(
      <form className="CustomEventForm" onSubmit={this.makeEvent}>
        <label htmlFor="event-title">Title</label>
        <input type="text" id="event-title" name="event-title" value={this.state.event.title} onChange={this.updateTitle} />
        <button type="submit">Add It</button>
      </form>
    )
  }
}

export default CustomEventForm;
