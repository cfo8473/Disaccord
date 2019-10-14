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
            <span className="nav-servers-button-title">{this.props.server.title}</span>
            {/* [fix] tooltip */}
            {/* <div className="nav-servers-button-tooltip">{this.props.server.title}</div> */}
          </button>
        </Link>
      </div>
    )
  }

}

export default ServerIndexItem;