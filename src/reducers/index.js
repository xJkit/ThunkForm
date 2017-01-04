import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Other reducers are imported below
// ...

const rootReducers = combineReducers({
  routing: routerReducer,
});

export default rootReducers;
