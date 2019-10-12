import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Registration extends Component {
  render() {
    return(
      <form className='Registration'>
        <legend>Registration</legend>
        <label htmlFor="reg-email">Email</label>
        <input type="text" id="reg-email" name="reg-email" />
        <label htmlFor="reg-pw-1">Choose A Password</label>
        <input type="text" id="reg-pw-1" name="reg-pw-1" />
        <label htmlFor="reg-pw-2">Re-Enter Password</label>
        <input type="text" id="reg-pw-2" name="reg-pw-2" />
        <button type="submit">Ok Done</button>
      </form>
    )
  }
}
