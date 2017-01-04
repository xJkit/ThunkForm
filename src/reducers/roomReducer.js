import * as Types from 'actions/ActionTypes';

export function economyReducer(state = {}, action) {
  switch (action.type) {
    case Types.GET_ECONOMY_ROOM.REQUEST:
      return state;
    case Types.GET_ECONOMY_ROOM.SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case Types.GET_ECONOMY_ROOM.FAILURE:
      return state;
    default:
      return state;
  }
}
