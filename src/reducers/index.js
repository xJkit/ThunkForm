import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Other reducers are imported below
import { economyReducer } from './roomReducer';
import { isFetchingReducer } from './isFetchingReducer';

const rootReducers = combineReducers({
  routing: routerReducer,
  economy: economyReducer,
  isFetching: isFetchingReducer,
});

export default rootReducers;
