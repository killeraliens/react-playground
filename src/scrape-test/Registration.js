import React, { Component } from 'react';

class Registration extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: { value: '' },
      email: { value: '' },
      password: { value: '' },
      repeatPassword: { value: '' }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

   this.validateName()
   this.validateEmail()
   this.validatePassword()
   this.validateRepeatPassword()
    console.log(this.validateName())
    console.log(this.validateEmail())
    console.log(this.validatePassword())
    console.log(this.validateRepeatPassword())
  }

  updateValue = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  validateName = () => {
    const name = this.state.name.trim();
    return name.length === 0
      ? 'name required'
      : name.length < 3 || name.length > 12
      ? 'name must be between 3 and 12 characters long'
      : null
  }

  validateEmail = () => {
    const email = this.state.email.trim();
    return email.length === 0
      ? 'email required'
      : !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      ? 'email has incorrect format'
      : null
  }

  validatePassword = () => {
    const password = this.state.password.trim();
    return password.length === 0
      ? 'password required'
      : password.length < 5 || password.length > 12
      ? 'password must be between 5 and 12 characters long'
      : !(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/.test(password))
      ? 'password must have at least one letter and one number'
      : null
  }

  validateRepeatPassword = () => {
    const password = this.state.password.trim();
    const repeatPassword = this.state.repeatPassword.trim();
    return repeatPassword.length === 0
      ? 'enter password a second time'
      : repeatPassword !== password
      ? "passwords don't match"
      : null
  }

  render() {
    return(
      <form className='Registration' onSubmit={this.handleSubmit}>
        <h2>Registration</h2>
        <div className="form-group">
          <label htmlFor="name">Name*</label>
          <input type="text" id="name" name="name" onChange={this.updateValue}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email*</label>
          <input type="email" id="email" name="email" onChange={this.updateValue}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password*</label>
          <input type="password" id="password" name="password" onChange={this.updateValue}/>
        </div>
        <div className="form-group">
          <label htmlFor="repeat-password">Repeat Password*</label>
          <input type="password" id="repeaPassword" name="repeatPassword" onChange={this.updateValue}/>
        </div>
        <button type="reset" onClick={() => this.props.history.push('/')}>Cancel</button>
        <button type="submit">Ok Done</button>
      </form>
    )
  }
}

export default Registration;
