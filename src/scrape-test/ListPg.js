import React from 'react';
import EventCard from './EventCard';

export default function ListPg(props) {
  return(
    <div className="ListPg">
      <h2>All Events</h2>
      <ul>
        {props.events.length > 0
          ? props.events.map((event, i) => <EventCard key={i} event={event}/> )
          : 'no events yet'
        }
      </ul>
    </div>
  )
}
