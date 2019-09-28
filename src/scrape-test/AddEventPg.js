import React from 'react';
import { Link } from 'react-router-dom';
import UrlForm from './UrlForm';

export default function AddEventPg(props) {
  return(
    <div className="AddEventPg">
      <h2>Add an Event</h2>
      <button>Fill out custom event form</button>
      <button>Copy event data from a facebook page by entering the url</button>
      <UrlForm onAddEvent={props.onAddEvent}/>
    </div>
  )
}
