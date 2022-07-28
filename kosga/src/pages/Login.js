import React, { Component } from 'react'
import { login, resetPassword } from '../helpers/Auth'
import 'pure-css/lib/forms.css'
import 'pure-css/lib/buttons.css'
import './login-register.css'

export default class Login extends Component {
  constructor(...props) {
    super(...props)

    this.state = { loginMessage: null }

    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.setMessage = this.setMessage.bind(this)
    this.resetPassword = this.resetPassword.bind(this)
  }

  handleOnSubmit(e) {
    e.preventDefault()
    login( this.email.value, this.password.value )
      .catch( err => this.setState( this.setMessage(`Usuario o Password incorrectos: ${err.message}`) ) )
  }

  setMessage(err) {
    return { loginMessage: err }
  }

  resetPassword() {
    resetPassword( this.email.value )
      .then( () => this.setState( this.setMessage(`Se ha enviado un correo electronico a  <b>${this.email.value}</b> para reestablecer tu contraseña.`) )  )
      .catch( err => this.setState( this.setMessage(`El email ${this.email.value} no se encuentra registrado`) ) )
  }

  render() {
    return (
      <article className="Main-container">
        <h1>Login</h1>
        <form className="pure-form AuthForm" onSubmit={this.handleOnSubmit}>
          <input type="email" placeholder="Email" ref={ email => this.email = email }  />
          <input type="password" placeholder="Password" ref={ password => this.password = password } />
          {
            this.state.loginMessage &&
            <div className="u-error">
              <p>
                Error:&nbsp;&nbsp;{this.state.loginMessage}&nbsp;
                <a href="#" onClick={this.resetPassword} className="alert-link">¿Olvidaste tu contraseña?</a>
              </p>
            </div>
          }
          <input type="submit" className="pure-button  pure-button-primary" value="Login" />
        </form>
      </article>
    )
  }
}