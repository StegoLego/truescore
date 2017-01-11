import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import UserStats from './components/user_stats.js';
import CompareChoices from './containers/compare_choices';
import StatsListItem from './components/stats_list_item.js';
import StatsByPrompt from './containers/stats_by_prompt';
import LoginView from './components/login.js';
import PromptsContainer from './containers/prompts_container';
import Privacy from './components/privacy_policy';
import Navigation from './components/navigation';
import TopFive from './components/topFive';

import { store } from './index';

function requireAuth(nextState, replace) {
  if (!store.getState().currentUser.id) { //if !user, then redirect to #/#/login
    replace({ nextPathname: nextState.location.pathname }, '/#/login')
  }
}

export default (
  <Route path="/" component={App} >
    <IndexRoute components={ {main: LoginView } } />
    <Route path="stats" components={ {main: StatsByPrompt, navigation: Navigation} } onEnter={requireAuth} />
    <Route path="game" components={ {main: CompareChoices, navigation: Navigation} } onEnter={requireAuth} />
    <Route path= "login" component={LoginView} />
    <Route path= "home" components={ {main: PromptsContainer, navigation: Navigation} } />
    <Route path= "privacy" components={ {main: Privacy, navigation: Navigation} }  onEnter={requireAuth} />
    <Route path= "topFive" components={ {main: TopFive, navigation: Navigation} }  onEnter={requireAuth} />

  </Route>
);
