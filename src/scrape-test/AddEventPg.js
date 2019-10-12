import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import UrlForm from './UrlForm';
import CustomEventForm from './CustomEventForm';

export default function AddEventPg(props) {

  handleOnAddEvent = (props) => {
    props.history.push('/')
  }

  return(
    <div className="AddEventPg">
      <h2>Add an Event</h2>
      <div className="AddEventNav">
        <NavLink to='/add-event/custom-form'>
          Fill out custom event form
        </NavLink>
        <br />
        <NavLink to='/add-event/url-form'>
          Copy event data from a facebook page by entering the url
        </NavLink>
      </div>
      <Route path='/add-event/url-form' render={(routeProps) => {
        return(
          <UrlForm onAddEvent={this.handleOnAddEvent(routeProps)} {...routeProps}/>
        )
      }}
      />
      <Route path='/add-event/custom-form' render={(routeProps) => {
        return(
          <CustomEventForm onAddEvent={this.handleOnAddEvent(routeProps)} {...routeProps}/>
        )
      }}
      />


    </div>
  )
}
