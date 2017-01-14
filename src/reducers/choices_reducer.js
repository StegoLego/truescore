import { FETCH_CHOICES } from '../actions/actions';

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action){
  switch(action.type){

    case FETCH_CHOICES:
     return action.payload.data;
    case FETCH_CURRENT_STAT:

    default:
      return state;
  }
}
