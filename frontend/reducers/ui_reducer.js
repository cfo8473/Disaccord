import { combineReducers } from 'redux';

import modal from './modal_reducer';
import active from './active_reducer';

export default combineReducers({
  modal,
  active
});
