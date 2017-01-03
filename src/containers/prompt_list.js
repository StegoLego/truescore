import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPrompt } from '../actions/actions';
import StatsListItem from '../components/stats_list_item';

class PromptList extends Component {

  componentWillMount() {
    this.props.fetchPrompt();
  }

  renderStatsListItem () {
    console.log('WHAT I DONT KNOW: ', this.props);
    return this.props.prompt.map(data => {
      return (
        <StatsListItem
          prompt={data.promptHistory[0]}
          wins={5}
          losses={2}
          key={data._id} />
      );
    });
  }

  render () {
    return (
      <div className="statList-container">
        {this.renderStatsListItem.bind(this)()}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {prompt: state.prompt};
}

export default connect(mapStateToProps, { fetchPrompt })(PromptList);

