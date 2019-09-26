import { combineReducers } from 'redux';

import blogPostReducer from './blogPostReducer';

const rootReducer = combineReducers({
  blog: blogPostReducer,
});

export default rootReducer;
