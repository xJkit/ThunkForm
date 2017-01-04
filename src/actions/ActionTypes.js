const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

function createRequestType(base) {
  const typeObj = [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    const ret = acc;
    ret[type] = `${base}_${type}`;
    return ret;
  }, {});
  return typeObj;
}

export const TOGGLE_INDICATOR = 'TOGGLE_INDICATOR';
export const GET_ECONOMY_ROOM = createRequestType('GET_ECONOMY_ROOM');
export const GET_NORMAL_ROOM = createRequestType('GET_NORMAL_ROOM');
export const GET_PREMIUM_ROOM = createRequestType('GET_PREMIUM_ROOM');
