import { createStore, compose } from 'redux';
import rootReducers from 'reducers';

function configureStore() {
  const store = createStore(
    rootReducers,
    compose(
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  return store;
}

export default configureStore;
