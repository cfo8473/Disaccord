import React from 'react'
import { Link, withRouter } from "react-router-dom"

class UserIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.userIcon = this.userIcon.bind(this)
  }

  userIcon() {
    console.log(this.props)
      if (this.props.user.photo) {
        return (<div className="messages-icon">
          <img className="messages-icon-picture" src={this.props.user.photo} />
        </div>)
      } else {
      return (
        <div className="messages-icon">
          <button >
            
          </button>
        </div>
      )
    }
  }
  render() {
    // console.log(this.props.user.title)
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