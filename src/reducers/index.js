import { combineReducers } from 'redux';

import searchTermReducer from './searchTermReducer';

const rootReducer = combineReducers({
  term: searchTermReducer
});

export default rootReducer;
