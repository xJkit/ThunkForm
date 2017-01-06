import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import api from 'middleware/api';
import rootReducers from 'reducers';

function configureStore() {
  const store = createStore(
    rootReducers,
    compose(
      applyMiddleware(api, thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  return store;
}

export default configureStore;
