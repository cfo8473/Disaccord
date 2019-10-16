import React from 'react'
import { Link, withRouter } from "react-router-dom"


class ServerIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {


    let serverId = this.props.location.pathname.split("/")[2];
    

    if (this.props.server.id === parseInt(serverId)){
      return ( // current servers icon
        <div>
          <span className="nav-servers-pill"></span>
          <Link to={`/servers/${this.props.server.id}`}>
            
            <button className="nav-servers-current-button tooltips" onClick={this.props.openServerModal}>
             
              <p className="nav-servers-button-spacer">{this.props.server.title.slice(0, 1)}</p>
              <span>{this.props.server.title}</span>
              {/* [fix] tooltip */}
              {/* <div className="nav-servers-button-tooltip">{this.props.server.title}</div> */}
            </button>
          </Link>
        </div>
      )
    }
     else {
      return (
        <div>
          <Link to={`/servers/${this.props.server.id}`}>
            <button className="nav-servers-button tooltips" onClick={this.props.openServerModal}>
              <p className="nav-servers-button-spacer">{this.props.server.title.slice(0, 1)}</p>
              <span>{this.props.server.title}</span>
              {/* [fix] tooltip */}
              {/* <div className="nav-servers-button-tooltip">{this.props.server.title}</div> */}
            </button>
          </Link>
        </div>
      )
    }
  }

}

export default withRouter(ServerIndexItem);