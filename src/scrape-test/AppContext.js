import React from 'react'
// import PropTypes from 'prop-types'

const AppContext = React.createContext({
  events: [],
  addEvent: () => {},
  user: {},
  updateUser: () => {},
  // router: PropTypes.object
})

export default AppContext
