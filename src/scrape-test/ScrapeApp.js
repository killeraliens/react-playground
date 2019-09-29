import React, {Component} from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import AddEventPg from './AddEventPg'
import ListPg from './ListPg'


class ScrapeApp extends Component {
  state = {
    events: [],
    venues: []
  }

  addEvent = (e) => {
    console.log('adding event', e)
  }

  render() {
    return(
      <div className="ScrapeApp">
        <div>
          <Link to='/add-event'>Add Event</Link>{<br/>}
          <Link to='/'>Events</Link>
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
