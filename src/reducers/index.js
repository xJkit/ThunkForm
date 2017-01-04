import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Other reducers are imported below
import { economyReducer } from './roomReducer';

const rootReducers = combineReducers({
  routing: routerReducer,
  economy: economyReducer,
});

export default rootReducers;
