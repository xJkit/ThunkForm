import * as Types from 'actions/ActionTypes';

export function renderCounterReducer(state = 0, action) {
  switch (action.type) {
    case Types.RENDER_COUNTER:
      return state + 1;
    default:
      return state;
  }
}
