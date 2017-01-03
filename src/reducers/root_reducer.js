import { combineReducers } from 'redux';
import ComparisonReducer from './comparison_reducer';
import UsersReducer from './users_reducer';
import PromptReducer from './prompt_reducer.js';


const rootReducer = combineReducers({
  comparison: ComparisonReducer,
  users: UsersReducer,
  prompt: PromptReducer
});

export default rootReducer;