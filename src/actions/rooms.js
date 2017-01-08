import * as Types from './ActionTypes';
import { CALL_API } from '../middleware/api';

export const getEconomyRooms = () => ({
  [CALL_API]: {
    types: [
      Types.GET_ECONOMY_ROOM.REQUEST,
      Types.GET_ECONOMY_ROOM.SUCCESS,
      Types.GET_ECONOMY_ROOM.FAILURE,
    ],
    endpoint: 'economy',
  },
});

export const getNormalRooms = () => ({
  [CALL_API]: {
    types: [
      Types.GET_NORMAL_ROOM.REQUEST,
      Types.GET_NORMAL_ROOM.SUCCESS,
      Types.GET_NORMAL_ROOM.FAILURE,
    ],
    endpoint: 'normal',
  },
});

export const getPremiumRooms = () => ({
  [CALL_API]: {
    types: [
      Types.GET_PREMIUM_ROOM.REQUEST,
      Types.GET_PREMIUM_ROOM.SUCCESS,
      Types.GET_PREMIUM_ROOM.FAILURE,
    ],
    endpoint: 'premium',
  },
});

// Thunk function for dispatching another actions.
export const getAllRooms = () => (dispatch) => {
  // dispatch another action in this thunk function
  dispatch(getEconomyRooms());
  dispatch(getNormalRooms());
  dispatch(getPremiumRooms());
  console.log('Thunk function is called!');
};
