import React from 'react';

function EventCard(props) {
  return(
    <div>
      <h4>{props.event.title}</h4>
      <span>{props.event.imageUrl}</span>
      <span>{props.event.date}</span>
      <p>{props.event.bands}</p>
    </div>
  )
}

EventCard.defaultProps = {
  event: {
    title: 'title NA',
    imageUrl: 'imageUrl NA',
    date: 'date NA',
    bands: 'band NA',
    venueId: 'venueId NA' //how should i set this? event card is temp event db
  }
}

export default EventCard;
