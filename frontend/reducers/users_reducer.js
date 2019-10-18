import {RECEIVE_CURRENT_USER} from "../actions/session_actions"
import {RECEIVE_USERS} from '../actions/user_actions'

const _nullSession = {
  currentUser: null
};

export default (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users
    // case RECEIVE_USER:
    //   return Object.assign({}, state, { [action.user.id]: action.user })
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    default:
      return state;
  }
};
