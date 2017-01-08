import * as Types from 'actions/ActionTypes';

export function economyReducer(state = [], action) {
  switch (action.type) {
    case Types.GET_ECONOMY_ROOM.SUCCESS:
      return [
        ...state,
        ...action.payload,
      ];
    case Types.GET_ECONOMY_ROOM.FAILURE:
      return [
        ...state,
        ...action.payload,
      ];
    default:
      return state;
  }
}

export function normalReducer(state = [], action) {
  switch (action.type) {
    case Types.GET_NORMAL_ROOM.SUCCESS:
      return [
        ...state,
        ...action.payload,
      ];
    default:
      return state;
  }
}

export function premiumReducer(state = [], action) {
  switch (action.type) {
    case Types.GET_PREMIUM_ROOM.SUCCESS:
      return [
        ...state,
        ...action.payload,
      ];
    default:
      return state;
  }
}
