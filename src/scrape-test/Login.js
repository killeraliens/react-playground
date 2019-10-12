import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {

  render() {
    return(
      <form className="Login" onSubmit={() => {}} >
        <h2>Login</h2>
        <label for="username">Username</label>
        <input id="username" name="username" type="text" />
        <label for="password">Password</label>
        <input id="password" name="password" type="text" />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Login;
