import React from "react";
import Modal from '../modal/modal';
import { Link } from 'react-router-dom'
import { Route, AuthRoute } from '../../util/route_util'
import { faAddressCard, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ServerIndexItem from './server_index_item'

class ServerIndex extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    this.props.fetchServers();
  }
  render() {

    const servers = this.props.servers;
    const serverList = Object.values(servers).map(server => (
      <li key={`server-${server.id}`}>
        <ServerIndexItem server={server} />
      </li>
    ))

    return(
      <div>
        <ul>
          {serverList}     
        </ul>
      </div>
    )

  }

}

export default ServerIndex;