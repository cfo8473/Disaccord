import React from "react";
import { withRouter, Redirect } from 'react-router-dom'
import UserIndexItem from './user_index_item'

class UsersIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    let userList;
    
    if (this.props.server) {
      userList = Object.values(this.props.users).map((user, idx) => {
        if (user !== null) {
          return (user.joinedServerIds.includes(this.props.server.id)) ? (
            <li key={`user-${user.id}`}>
              <UserIndexItem user={user} currentUser={this.props.currentUser} />
            </li>
          ) : (<div key={idx}></div>)
        }
      })
    } else {

    }

    return (
      <div>
      <h2 className="login-text">ONLINE USERS</h2>  
        {userList}
      </div>
    )

  }
}

export default withRouter(UsersIndex);