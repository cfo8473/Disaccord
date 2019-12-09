import React from 'react'
import { Link, withRouter } from "react-router-dom"

class UserIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.userIcon = this.userIcon.bind(this)
  }

  userIcon() {
      if (this.props.user.photo) {
        return (
        <div className="messages-icon">
          <img className="messages-icon-picture" src={this.props.user.photo} />
        </div>
        )
      } else {
      return (
        <div className="messages-icon">
          <div className="messages-icon-picture-default"
          />

        </div>
      )
    }
  }
  render() {
    return ( 
      <div className="nav-users-block">
          <div onClick={this.props.openUserModal}>
            {this.userIcon()}
          </div>
        <span className="nav-users-username">{this.props.user.username}</span>
      </div>
    )

    
  }

}

export default withRouter(UserIndexItem);