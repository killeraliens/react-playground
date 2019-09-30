import React, {Component} from 'react'
import { Route, Switch, NavLink } from 'react-router-dom';
import AddEventPg from './AddEventPg'
import ListPg from './ListPg'


class ScrapeApp extends Component {
  state = {
    events: null,
    data: null
  }

  componentDidMount() {
    this.callBackendAPI()
      .then(res => {
        console.log('events from my server', res.events)
        this.setState({
          data: res.express,
          events: res.events
        })

      })
      .catch(err => console.log('ERROR ON SERVER MOUNT', err))
  }

  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }

    return body
  }

  addEvent = (e) => {
    console.log('adding event', e)
  }

  render() {
    return(
      <div className="ScrapeApp">
        <div>
          <div>{this.state.data}</div>
          <NavLink to='/add-event'>Add Event</NavLink>{<br/>}
          <NavLink to='/'>Events</NavLink>
        </div>
        <Switch>
          <Route exact path="/" render={(routeProps) => {
            return(
              <ListPg events={this.state.events} { ...routeProps }/>
            )
          }}/>
          <Route path="/add-event" render={(routeProps) => {
            return(
              <AddEventPg onAddEvent={this.addEvent} { ...routeProps }/>
            )
          }}/>
        </Switch>
      </div>
    )
  }
}

export default ScrapeApp;
