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
  
  componentWillUnmount() {
    // this.props.fetchServers()
  }
  
  render() {
    let pathName = this.props.location.pathname;
    // if (this.props.currentUser.joinedServerIds) {
    //   currentServer = this.props.currentUser.joinedServerIds[0];
    // } else {
    //   return <Redirect to="/" /> // server disc soon
    // } refer back to [bug1]



    let currentServer = Object.keys(this.props.servers)[0];
    if (pathName === '/servers' && currentServer) {
      return <Redirect to={`${pathName}/${currentServer}`}/>
    }
    // console.log(this.props.servers)
    // if (this.props.servers.length > 0) {
    //   let currentServer = Object.keys(this.props.servers)[0];
    //   if (pathName === '/servers' && currentServer) {
    //     return <Redirect to={`${pathName}/${currentServer}`} />
    //   }
    // } else {
    //   return <Redirect to={`/servers/`}/>
    // }

    const servers = this.props.currentUserServers
    let serverList;
    if (Object.keys(this.props.servers).length) {
      // debugger
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