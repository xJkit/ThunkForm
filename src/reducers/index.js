import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Other reducers are imported below
import { economyReducer, normalReducer, premiumReducer } from './roomReducer';
import { renderCounterReducer } from './counterReducer';
import { isFetchingReducer } from './isFetchingReducer';

const rootReducers = combineReducers({
  routing: routerReducer,
  economy: economyReducer,
  normal: normalReducer,
  premium: premiumReducer,
  renderCounter: renderCounterReducer,
  isFetching: isFetchingReducer,
});

export default rootReducers;
