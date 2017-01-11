import { FETCH_USER_DATA } from '../actions/actions.js'; // returns a string

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
  switch( action.type ) {

    case FETCH_USER_DATA:
      console.log(action.payload.data);
      return action.payload.data;  // this will become the global state of user state

    default:
      return state;
  }
}
