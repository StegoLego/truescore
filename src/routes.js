import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Game from './components/game.js';
import UserStats from './components/user_stats.js';
import CompareChoices from './containers/compare_choices';
import StatsListItem from './components/stats_list_item.js';
import PromptList from './containers/prompt_list';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={CompareChoices} />
    <Route path="stats" component={PromptList} />
    <Route path="game" component={CompareChoices} />

  </Route>
);
