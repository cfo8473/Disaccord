
import React from 'react'
import {Link} from 'react-router-dom'

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.userInfo
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(feild) {
    return(e) => {
      this.setState({[feild]: e.target.value})
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  emailSignup() {
    if (this.props.formType === "signup")
      return (
        <div className="sessionField">
        <label>
          Email:
            <input type="text"
            value={this.state.email}
            onChange={this.update('email')} />
        </label>
        </div>
      );

  }

  headEr () {
    if (this.props.formType === "signup") {
      return (
        <h2>Please Sign Up or <Link to={'/login'}>Log In!</Link></h2>
      )
    } else {
      return (
        <h2>Please Log In or  <Link to={'/signup'}>Sign Up!</Link></h2>
      )
      };
  }

  render () {
    return (
      <div className="sessionFormDiv">
        <form onSubmit={this.handleSubmit} className="sessionForm">
        {this.headEr()}
          {this.props.errors && this.props.errors.map((ele, idx) => {
            return <li key={`error-${idx}`}>{ele}</li>
          })}
          <div className="sessionField">
          <label>
            Username: 
            <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}/>
          </label>
          </div>
          <div className="sessionField">
          <label >
            Password:
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')} />
          </label>
          {this.emailSignup()}
          </div>
          
          

          
          

          <input type="submit" value="Submit"/>
        </form>

      </div>

    );
  }



}

