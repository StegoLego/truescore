import { combineReducers } from 'redux';
import ComparisonReducer from './comparison_reducer';
import UsersReducer from './users_reducer.js';
import PromptReducer from './prompt_reducer.js';
import PromptsReducer from './prompts_reducer.js';
import ChoiceReducer from './choices_reducer.js';
import StatsByPromptReducer from './stats_by_prompt_reducer.js';
import CurrentUserReducer from './current_user_reducer.js';
import allStatsReducer from './all_stats_reducer';


const rootReducer = combineReducers({
  comparison: ComparisonReducer,
  users: UsersReducer,
  prompt: PromptReducer, // obj containing prompt data
  prompts: PromptsReducer, //array of prompt objects
  statsByPrompt: StatsByPromptReducer,
  currentUser: CurrentUserReducer,
  allStats: allStatsReducer
});

export default rootReducer;
