import * as Types from 'actions/ActionTypes';

const initialState = {
  isFetching: false,
  payload: undefined,
};

export function economyReducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_ECONOMY_ROOM.REQUEST:
      return {
        ...state,
        isFetching: true,
        payload: undefined,
      };
    case Types.GET_ECONOMY_ROOM.SUCCESS:
      return {
        ...state,
        isFetching: false,
        payload: action.payload,
      };
    case Types.GET_ECONOMY_ROOM.FAILURE:
      return {
        ...state,
        isFetching: false,
        payload: undefined,
      };
    default:
      return state;
  }
}
