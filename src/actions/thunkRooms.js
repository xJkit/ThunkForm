// Make async requests in the actions rather than middleware
import * as Types from './ActionTypes';
import fetch from 'isomorphic-fetch';

// URIs
const APIRoot = 'http://localhost:3000';
const endpoint = {
  economy: `${APIRoot}/api/economy`,
  normal: `${APIRoot}/api/normal`,
  premium: `${APIRoot}/api/premium`,
};

const getEconomyRooms = () => dispatch => fetch(endpoint.economy)
.then(response => response.json())
.then(json => dispatch({
  type: Types.GET_ECONOMY_ROOM.SUCCESS,
  payload: json,
}))
.catch(err => dispatch({
  type: Types.GET_ECONOMY_ROOM.FAILURE,
  payload: err,
}));

const getNormalRooms = () => dispatch => fetch(endpoint.normal)
.then(response => response.json())
.then(json => dispatch({
  type: Types.GET_NORMAL_ROOM.SUCCESS,
  payload: json,
}))
.catch(err => dispatch({
  type: Types.GET_NORMAL_ROOM.FAILURE,
  payload: err,
}));

const getPremiumRooms = () => dispatch => fetch(endpoint.premium)
.then(response => response.json())
.then(json => dispatch({
  type: Types.GET_PREMIUM_ROOM.SUCCESS,
  payload: json,
}))
.catch(err => dispatch({
  type: Types.GET_PREMIUM_ROOM.FAILURE,
  payload: err,
}));


export const getAllRoomsInAction = () => dispatch => {
  dispatch({
    type: Types.TOGGLE_INDICATOR,
  });

  return Promise.all([
    dispatch(getEconomyRooms()),
    dispatch(getNormalRooms()),
    dispatch(getPremiumRooms()),
  ]).then(() => {
    dispatch({
      type: Types.TOGGLE_INDICATOR,
    });
  }).catch(err => {
    console.log('fetching data error!');
    console.log(err);
  });
};
