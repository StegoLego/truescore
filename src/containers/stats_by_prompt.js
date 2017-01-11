import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchStatsByPrompt, fetchPrompts } from '../actions/actions';
import StatsListItem from '../components/stats_list_item.js';
import UsersList from './users_list';
import MiniPromptList from '../components/mini_prompt_list';

class StatsByPrompt extends Component {

  componentWillMount() {
    this.props.fetchPrompts();
    this.props.fetchStatsByPrompt();
  }

  renderStatsListItem () {
    return this.props.statsByPrompt.map((user, index) => {
      const wins = user.wins;
      const losses = user.losses;
      const total = wins + losses;

      const average = total ? Math.floor(wins/total * 100) : 0;

      return (
        <div key={user.id}>
            <StatsListItem 
              name={user.name}
              average={average} />
        </div> 
      );
    });
  }

  renderPromptListItem () {
    return this.props.prompts.map(prompt => {
      return (
        <div key={prompt.id}>
          <MiniPromptList
            text={prompt.text}
            tileImage={prompt.tileImage}
            prompt={prompt} />
        </div>
        )
    });
  }

  render () {
    const textPos = {
      'color': 'black'
    };
    return (
      <div>
        <br />
        <h2>Cohort Stats</h2>
        <br />
          <div className="row">
            {this.renderPromptListItem.bind(this)()}
          </div>
        <br />
        <h4 style={textPos}>{this.props.prompt.text}</h4>
        <br />
        <div className="network-list">
          <h5>Your Network (players)</h5>
          <UsersList />
        </div>
        <div className="statList-container">
          <dl>
            {this.renderStatsListItem.bind(this)()}
          </dl>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  console.log('Current STATE inside statsview: ', state);
  return {statsByPrompt: state.statsByPrompt, prompt: state.prompt, prompts: state.prompts};
}

export default connect(mapStateToProps, { fetchPrompts, fetchStatsByPrompt })(StatsByPrompt);

