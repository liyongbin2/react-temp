import { combineReducers } from 'redux-immutable'

import { reducer as testReducer } from '../pages/home/c-pages/home-c-Page1/store'

const cReducer = combineReducers({
  resultReducer: testReducer
});

export default cReducer;