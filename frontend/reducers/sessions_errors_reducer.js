import {CLEAR_ERRORS, RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';
import { CLOSE_MODAL } from '../actions/modal_actions';
const _nullSession = {
  errors: []
};

export default (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return Object.assign({}, { errors: action.errors });
    case RECEIVE_CURRENT_USER:
      return _nullSession;
    case CLEAR_ERRORS:
      return Object.assign({}, { errors: [] });
    case CLOSE_MODAL:
      return [];
    default:
      return state;
  }
};
