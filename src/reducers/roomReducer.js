import * as Types from 'actions/ActionTypes';

const initialState = {
  isFetching: false,
};

export function economyReducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_ECONOMY_ROOM_REQUEST:
      return {
        ...state,
        isFetching: true,
        payload: undefined,
      };
    case Types.GET_ECONOMY_ROOM_SUCCESS:
      return {
        ...state,
        isFetching: true,
        payload: action.payload,
      };
    case Types.GET_ECONOMY_ROOM_FAILURE:
      return {
        ...state,
        isFetching: false,
        payload: undefined,
      };
    default:
      return state;
  }
}
