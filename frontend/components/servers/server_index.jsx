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
    let pathName = this.props.location.pathname;
    let currentServer = Object.keys(this.props.servers)[0];
    if (pathName === '/servers' && currentServer) {
      return <Redirect to={`${pathName}/${currentServer}`}/>
    }

    const servers = this.props.currentUserServers
    let serverList;
    if (Object.keys(this.props.servers).length) {
      serverList = servers.map(server => {
        if (this.props.servers[server])
        return (
          <li key={`server-${server}`}>
            <ServerIndexItem server={this.props.servers[server]} />
          </li>
        )
      })
    } else { <div></div>}   

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