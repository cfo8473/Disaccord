import React from 'react'
import { Link } from "react-router-dom"

class ServerIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div>
        <Link to={`/servers/${this.props.server.id}`}>
          <button className="nav-servers-button " onClick={this.props.openServerModal}>
            {this.props.server.title}
          </button>
        </Link>
      </div>
    )
  }

}

export default ServerIndexItem;