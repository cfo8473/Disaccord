import { RECEIVE_SERVERS, RECEIVE_SERVER, REMOVE_SERVER } from "../actions/server_actions";

const _nullSession = {
  server: null
};

export default (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SERVERS:
      return merge({}, action.servers);
    case RECEIVE_SERVER:
      return merge({}, state, {[action.server.id]: action.server})
    //case REMOVE_SERVER:
    default:
      return state;
  }
};

