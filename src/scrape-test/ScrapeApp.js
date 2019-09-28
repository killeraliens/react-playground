import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom';
import AddEventPg from './AddEventPg'


class ScrapeApp extends Component {
  state = {
    events: []
  }

  addEvent = (e) => {
    console.log('adding event', e)
  }

  render() {
    return(
      <div className="ScrapeApp">
        <Route exact path="/" render={(routeProps) => {
          return(
            <AddEventPg onAddEvent={this.addEvent} { ...routeProps }/>
          )
        }}/>
      </div>
    )
  }
}

export default ScrapeApp;
