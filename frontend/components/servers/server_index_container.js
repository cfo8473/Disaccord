import { connect } from 'react-redux';
import ServerIndex from './server_index'
import { fetchServers } from '../../actions/server_actions'
import { selectJoinedServers} from '../../reducers/selectors'

const msp = (state) => {
  let currentUser = state.entities.users[state.session.currentUser.id]
  let servers = state.entities.servers;
  let currentUserServers = currentUser.joinedServerIds
  
  return {
    currentUser: currentUser,
    servers: servers,
    currentUserServers: currentUserServers
  }
};

const mdp = dispatch => ({
  fetchServers: (filter) => dispatch(fetchServers(filter))
})

export default connect(msp, mdp)(ServerIndex);