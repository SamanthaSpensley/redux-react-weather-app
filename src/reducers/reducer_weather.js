import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {

  console.log('action:', action);

  switch (action.type) {
  case FETCH_WEATHER:
    // DONT mutate state (aka state.push(action.payload.data)), concat doesn't mutate, rather returns a new array
    // return state.concat([action.payload.data]); --> one option
    return [ action.payload.data, ...state ]; // ES6 array
  }
  return state;
}
