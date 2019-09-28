import React from 'react';

export default function EventCard(props) {
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
    title: 'unknown title',
    imageUrl: 'unknown image url',
    date: 'date NA',
    bands: 'artists NA'
  }
}
