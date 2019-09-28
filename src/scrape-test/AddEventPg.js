import React from 'react';
import { Link } from 'react-router-dom';
import UrlForm from './UrlForm';

export default function AddEventPg(props) {
  return(
    <div className="AddEventPg">
      <UrlForm onAddEvent={props.onAddEvent}/>
    </div>
  )
}
