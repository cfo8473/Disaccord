
import React from 'react'
import {Link} from 'react-router-dom'

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.userInfo
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.componentWillUnmount = this.componentWillUnmount().bind(this);
 
  }

  update(field) {
    return(e) => {
      this.setState({[field]: e.target.value})
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  componentWillUnmount() {
      this.props.clearErrors();
  }

  emailSignup() {
    if (this.props.formType === "signup")
      return (
        <div className="sessionField">
        <label>
            <h5 className="login-text">Email </h5>
            <input className="session-input"  type="text"
            value={this.state.email}
            onChange={this.update('email')} />
        </label>
        </div>
      );

  }

  formSpacers() {
    if (this.props.formType === "login") {
      return (
        <div className="login-spacer"><br></br></div>
      )
    }

  }

  formSwapGreeting() {
    if (this.props.formType === "login") {
      return (
        <div>
          <div className="login-welcome">Welcome back!</div>
          <div className="login-subtitle">We're so excited to see you again!</div>
        </div>
      )
    } else {
      return (
        <div className="login-welcome">Create an account</div>
      )
    };
  }

  formSwap () {
    if (this.props.formType === "login") {
      return (
        <span className="form-prompt-text">Need an account? <Link to={'/signup'}>Register</Link></span>
      )
    } else {
      return (
        <span className="form-prompt-text"><Link to={'/login'}>Already have an account?</Link></span>
      )
      };
  }

  render () {
    return (
      
      <div className="sessionFormDiv">
        <div>{this.formSpacers()}</div>
        <div className="sessionForm">
          <button className="guest-button" type="submit" onClick={this.props.guestLogin}>Guest Login</button>
          <form onSubmit={this.handleSubmit}>
    
              
        
          {this.formSwapGreeting()}
            {this.props.errors && this.props.errors.map((ele, idx) => {
              return <li className ="errors" key={`error-${idx}`}>{ele}</li>
            })}
            
            <h5 className="login-text">Username </h5>
            <input className="session-input" type="text" value={this.state.username} onChange={this.update('username')}/>
            
            <h5 className="login-text">Password </h5>
            <input className="session-input"  type="password" value={this.state.password} onChange={this.update('password')} />

            {this.emailSignup()}
              
            <input className="submit-button" type="submit" value="Submit"/>
            {this.formSwap()}
            
          </form>
        </div>

      </div>

    );
  }



}

