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
          prompt="Shortest Hair"
          name={data[0]}
          average={(data[1]*100)}
          key={data[0]} />
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

