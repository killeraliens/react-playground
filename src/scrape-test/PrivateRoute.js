import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AppContext from './AppContext'


class PrivateRoute extends Component {
  static contextType = AppContext;

  render() {
    console.log(this.context.router)
    const { Path, component: Component, render: RenderComp, history, ...restProps } = this.props;
    //how do I send this message to the root apps state on Redirect?
    const message ='You must be logged in';

    return this.context.user && Component
      ? <Route path={Path} component={Component} {...restProps}/>
      : this.context.user && RenderComp
      ? <Route path={Path} render={RenderComp} {...restProps}/>
      : <Redirect to='/login'/>

  }
}

export default PrivateRoute;

