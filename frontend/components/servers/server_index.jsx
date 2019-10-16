import React from "react";
import ServerIndexItem from './server_index_item'
import {withRouter, Redirect} from 'react-router-dom'


class ServerIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  

  componentDidMount() {
    this.props.fetchServers({userId: this.props.currentUser.id});
  }
  
  render() {
    console.log(this.props.currentUser)

    
    console.log(this.props.location.pathname === "/servers")
    let pathName = this.props.location.pathname;
    let currentServer = Object.keys(this.props.servers)[0];
    if (pathName === '/servers' && currentServer) {
      return <Redirect to={`${pathName}/${currentServer}`}/>
    }
    // console.log(this.props.servers)
    console.log(Object.keys(this.props.servers)[0])
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

export default withRouter(ServerIndex);