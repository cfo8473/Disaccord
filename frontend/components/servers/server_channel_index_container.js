import { connect } from 'react-redux';
import ServerChannelIndex from './server_channel_index'
import { fetchServers, removeServer } from '../../actions/server_actions'

const msp = (state, ownProps) => {
  // debugger
  let currentUser = state.session.currentUser
  let servers = state.entities.servers;
  let server = state.entities.servers[ownProps.match.params.serverId];
  // debugger
  return {
    currentUser: currentUser,
    servers: servers,
    server: server
  }
};

const mdp = dispatch => ({
  fetchServers: () => dispatch(fetchServers()),
  removeServer: (serverId) => dispatch(removeServer(serverId))
})

export default connect(msp, mdp)(ServerChannelIndex);