import React from 'react'

export default function ValidationError(props) {
  return props.message
    ? <div className="error">{props.message}</div>
    : null
}
