import React from 'react';
import EventCard from './EventCard';

export default function ListPg(props) {
  return(
    <div className="ListPg">
      <ul>
        {props.events.length > 0
          ? props.events.map((event, i) => <EventCard key={i} event={event}/> )
          : null
        }
      </ul>
    </div>
  )
}
