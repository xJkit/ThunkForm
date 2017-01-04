const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

function createRequestType(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    const ret = acc;
    ret[type] = `${base}_${type}`;
    return ret;
  }, {});
}

export const GET_ECONOMY_ROOM = createRequestType('GET_ECONOMY_ROOM');
export const GET_NORMAL_ROOM = createRequestType('GET_NORMAL_ROOM');
export const GET_PREMIUM_ROOM = createRequestType('GET_PREMIUM_ROOM');
