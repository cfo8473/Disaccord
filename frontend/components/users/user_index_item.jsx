import React from 'react'
import { Link, withRouter } from "react-router-dom"

class UserIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // console.log(this.props.user.title)
    return ( 
      <div className="nav-users-block">
          <button className="nav-users-icon" onClick={this.props.openUserModal}>
          </button>
        <span className="nav-users-username">{this.props.user.username}</span>
      </div>
    )

    
  }

}

export default withRouter(UserIndexItem);