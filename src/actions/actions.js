import axios from 'axios';
import { store } from '../index';

const protocol = window.location.protocol;
const host = window.location.host;
const pathname = window.location.pathname;
export const ROOT_URL = `${protocol}//${host}/api/`; //http or https, host could be localhost or deployment


export const FETCH_COMPARISON = 'FETCH_COMPARISON';
export const FETCH_USERS = 'FETCH_USERS';
export const SUBMIT_DECISION = 'SUBMIT_DECISION';
export const FETCH_PROMPT = 'FETCH_PROMPT';
export const FETCH_PROMPTS = 'FETCH_PROMPTS';
export const UPDATE_PROMPT = 'UPDATE_PROMPT';
export const FETCH_STATS_BY_PROMPT = 'FETCH_STATS_BY_PROMPT';

export function fetchComparison () {
  const request = axios.get(`${ROOT_URL}comparison`);

  return {
    type: FETCH_COMPARISON,
    payload: request
  }
}

export function fetchUsers () {

  /// WARNING CHECK ROUTE WITH BARTEK!!
  const request = axios.get(`${ROOT_URL}allChoices`);

  return {
    type: FETCH_USERS,
    payload: request
  }
}



export function submitDecision(winnerId) {

  const currentComparison = store.getState().comparison;

  const [left, right] = currentComparison.choices;
  const loserId = left.id === winnerId ? right.id  : left.id;
  const promptId = store.getState().prompt.id;

  const result = {winnerId, loserId, promptId};

  const request = axios.post(`${ROOT_URL}comparison`, result);
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

export function fetchPrompts() {

  const request = axios.get(`${ROOT_URL}prompts`);

  return{
    type: FETCH_PROMPTS,
    payload: request
  }
}

export function updatePrompt(prompt) {

  return{
    type: UPDATE_PROMPT,
    payload: prompt
  }
}

export function fetchStatsByPrompt() {

  const promptId = store.getState().prompt.id

  const request = axios.get(`${ROOT_URL}stats/prompt/${promptId}`);

  return{
    type: FETCH_STATS_BY_PROMPT,
    payload: request
  }
}
