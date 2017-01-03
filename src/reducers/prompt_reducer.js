import { FETCH_PROMPT } from '../actions/actions.js';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch( action.type ) {

    case FETCH_PROMPT:
      return action.payload.data

    default:
      return state;
  }
}