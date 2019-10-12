import React from 'react'

const AppContext = React.createContext({
  events: [],
  addEvent: () => {},
  user: {},
  updateUser: () => {}
})

export default AppContext
