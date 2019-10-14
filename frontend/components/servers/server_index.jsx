import React from "react";
import Modal from '../modal/modal';
import { Link } from 'react-router-dom'
import { Route, AuthRoute } from '../../util/route_util'
import { faAddressCard, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ServerIndex extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    this.props.fetchServers();
    // debugger
  }
  render() {
    // let servers = this.props.servers.map ( server => (
    //   <li>
    //     { server.title }
    //   </li>
    // ))

    return(
      <div>
        <ul>
          {/* {servers} */}
          Testing ServerIndexContainer
        </ul>
      </div>
    )

  }

}

export default ServerIndex;