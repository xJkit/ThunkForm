/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
import 'isomorphic-fetch';
export const CALL_API = Symbol('call api');

const API_ROOT = 'http://localhost:3000/api';

export default store => next => action => {
  if (!action[CALL_API]) {
    console.log('pass non-async actions');
    return next(action);
  }
  console.log('catch an async action');
  // destructure action types from the array of CALL_API keys
  const [requestType, successType, failureType] = action[CALL_API].types;
  // destructure the endpoint from the action creator
  const { endpoint } = action[CALL_API];

  store.dispatch({
    type: requestType,
  });

  return fetch(`${API_ROOT}/${endpoint}`)
    .then(res => res.json())
    .then(json => {
      store.dispatch({
        type: successType,
        payload: json,
      });
    })
    .catch(err => {
      console.log('fetch failed');
      console.log(err);
      store.dispatch({
        type: failureType,
      });
    });
};
