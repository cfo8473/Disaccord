import { RECEIVE_ACTIVE_SERVER, RECEIVE_ACTIVE_CHANNEL } from "../actions/active_actions";


export default (state = {server: "", channel: ""}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ACTIVE_SERVER:
      return Object.assign({}, state, {server: action.server})
    case RECEIVE_ACTIVE_CHANNEL:
      return Object.assign({}, state, {channel: action.channel})
    default:
      return state;
  }
};

