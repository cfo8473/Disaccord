import { connect } from 'react-redux';
import ServerIndex from './server_index'
import { fetchServers } from '../../actions/server_actions'


const msp = (state) => {
  let currentUser = state.session.currentUser
  let servers = state.entities.servers;
  return {
    currentUser: currentUser,
    servers: servers
  }
};

const mdp = dispatch => ({
  fetchServers: () => dispatch(fetchServers())
})

export default connect(msp, mdp)(ServerIndex);