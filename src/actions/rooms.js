import * as Types from './ActionTypes';
import { CALL_API } from 'middleware/api';

export const getEconomyRoom = () => ({
  [CALL_API]: {
    types: [
      Types.GET_ECONOMY_ROOM_REQUEST,
      Types.GET_ECONOMY_ROOM_SUCCESS,
      Types.GET_ECONOMY_ROOM_FAILURE,
    ],
    endpoint: 'economy',
  },
});
