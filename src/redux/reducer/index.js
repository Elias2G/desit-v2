import { combineReducers } from 'redux';

import blogPostReducer from './blogPostReducer';
import portfolioReducer from './portfolioReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  blog: blogPostReducer,
  portfolio: portfolioReducer,
  user: userReducer,
});

export default rootReducer;
