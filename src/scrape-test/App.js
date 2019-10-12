import React, {Component} from 'react'
import { Route, Switch, NavLink } from 'react-router-dom';
import AppContext from './AppContext'
import AddEventPg from './AddEventPg'
import ListPg from './ListPg'
import Login from './Login'


class App extends Component {
  state = {
    events: [],
    data: null,
    user: null
  }

  // callBackendAPI = async () => {
  //   const response = await fetch('/express_backend');
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message)
  //   }

  //   return body
  // }

  // componentDidMount() {
  //   this.callBackendAPI()
  //     .then(res => {
  //       console.log('events from my server', res.events)
  //       this.setState({
  //         data: res.express,
  //         events: res.events
  //       })

  //     })
  //     .catch(err => console.log('ERROR ON SERVER MOUNT', err))
  // }


  addEvent = (newEvent) => {
    console.log('adding new event to state', newEvent)
  }

  updateUser = (id) => {
    console.log('do something with user id and state', id)
  }

  render() {
    const context = {
      events: this.state.events,
      addEvent: this.addEvent,
      user: this.state.user,
      updateUser: this.updateUser
    }
    return(
      <div className="App">
        <AppContext.Provider value={context}>
          <div className="router-data">{this.state.data}</div>
          <nav>
            <NavLink to='/'>Events</NavLink>{<br/>}
            <NavLink to='/add-event'>Add Event</NavLink>{<br/>}
            <NavLink to='/login'>Login</NavLink>
          </nav>
          <Switch>
         {/*   <Route exact path="/" render={(routeProps) => {
              return(
                <ListPg events={this.state.events} { ...routeProps }/>
              )
            }}/>
           <Route path="/add-event" render={(routeProps) => {
              return(
                <AddEventPg onAddEvent={this.addEvent} { ...routeProps }/>
              )
            }}/>*/}
            <Route exact path="/" component={ListPg}/>
            <Route path="/add-event" component={AddEventPg}/>
            <Route path="/login" component={Login}/>
          </Switch>
        </ AppContext.Provider >
      </div>
    )
  }
}

export default App;