import { TOGGLE_INDICATOR } from 'actions/ActionTypes';


export const isFetchingReducer = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_INDICATOR:
      return !state;
    default:
      return state;
  }
};
