import { createStore, compose, applyMiddleware } from 'redux';
import api from 'middleware/api';
import rootReducers from 'reducers';

function configureStore() {
  const store = createStore(
    rootReducers,
    compose(
      applyMiddleware(api),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  return store;
}

export default configureStore;
