import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import './index.css';
//import App from './paltrows-power-toes/App';
//import AppLang from './lang-context/AppLang'
//import ScrapeApp from './scrape-test/ScrapeApp'

 //ReactDOM.render(<AppLang />, document.getElementById('root'));
// ReactDOM.render(
//   <BrowserRouter >
//     <ScrapeApp />
//   </BrowserRouter>,
//   document.getElementById('root')
// );

//ReactDOM.render(, document.getElementById('root'));

const Public = (props) => <h3>Public</h3>
const Protected = (props) => <h3>Protected component. {props.message}</h3>

class Login extends React.Component {
  render() {
    return (
      <div>
        Login
      </div>
    )
  }
}

const PrivateRoute = (props) => {
  //const {component: Component, path: Path, ...restProps} = props;
  const {component: Component, render: RenderComp, path: Path, ...restProps} = props;
  return restProps.isAuth === true && RenderComp
    ? <Route path={Path} {...restProps} render={RenderComp}/>
    : restProps.isAuth === true && Component
    ? <Route path={Path} {...restProps} component={Component}/>
    : <Redirect to='/login' />
}

class SampleApp extends React.Component {
  state = {
    auth: true
  }
  render() {
    return(
      <div>
        <Link to="/public" >Public</Link>
        <Link to="/login">Login</Link>
        <Link to="/protected">Protected</Link>
        <Switch>
          <Route path='/public' component={Public}/>
          <Route path='/login' component={Login}/>
          {/*<PrivateRoute isAuth={this.state.auth} path='/protected' component={Protected}/>*/}
          <PrivateRoute isAuth={this.state.auth} path='/protected' render={(props) => {
            return <Protected message='you made it!!' {...props}/>
          }}/>

        </Switch>
      </div>
    )

  }
}

ReactDOM.render(
  <BrowserRouter>
    <SampleApp />
  </BrowserRouter>,
  document.getElementById('root')
);
