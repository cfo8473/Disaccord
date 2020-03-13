import { RECEIVE_MESSAGE, RECEIVE_MESSAGES, REMOVE_MESSAGE } from "../actions/message_actions";
import { merge } from 'lodash'

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return action.messages;
    case RECEIVE_MESSAGE:
      return Object.assign({}, state, { [action.message.id]: action.message })
    case REMOVE_MESSAGE:
      let newState = Object.assign({}, state)
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};
