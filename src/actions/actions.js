import axios from 'axios';
import { store } from '../index';

const ROOT_URL = 'http://localhost:3000/';

export const FETCH_COMPARISON = 'FETCH_COMPARISON';
export const FETCH_USERS = 'FETCH_USERS';
export const SUBMIT_DECISION = 'SUBMIT_DECISION';
export const FETCH_PROMPT = 'FETCH_PROMPT';

export function fetchComparison () {
  const request = axios.get(`${ROOT_URL}nextBattlePairs`);

  return {
    type: FETCH_COMPARISON,
    payload: request
  }
}

export function fetchUsers () {

  /// WARNING CHECK ROUTE WITH BARTEK!!
  const request = axios.get(`${ROOT_URL}getAllObjectsOfComparison`);

  return {
    type: FETCH_USERS,
    payload: request
  }
}




export function submitDecision(winner) {

  const currentComparison = store.getState().comparison;
  const [left, right] = currentComparison.choices;
  const loser = left.name === winner ? right.name  : left.name;
  const prompt = currentComparison.prompt;

  const result = {winner, loser, prompt};
  console.log("result is: ", result);

  const request = axios.post(`${ROOT_URL}updateDBwithResultOfBattle`, result);

  return {
    type: SUBMIT_DECISION,
    payload: request
  }

}

export function fetchPrompt () {
  const request = axios.get(`${ROOT_URL}getRankList`);

  return {
    type: FETCH_PROMPT,
    payload: request
  }
}
