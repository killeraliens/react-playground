import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  state = {
    username: '',
    password: ''
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('logging in with', this.state)
  }

  updateState = (e) => {
    const {name, value} = e.target
    let newState = { ...this.state, [name]: value}
     this.setState(newState)
    //return this.setState(newState)
  }

  render() {
    return(
      <form className="Login" onSubmit={this.handleSubmit} >
        <h2>Login</h2>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" type="text" value={this.state.username} onChange={this.updateState}/>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="text" value={this.state.password} onChange={this.updateState}/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Login;
