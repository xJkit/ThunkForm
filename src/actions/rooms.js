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
