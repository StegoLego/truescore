import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStatsByPrompt } from '../actions/actions';

class StatsListItem extends Component {

  render() {
    let actualPercentage = "percentage percentage-" + (this.props.average).toString();
    return (
      <div>
        {this.props.name}
        <dd className={actualPercentage}>
          <span className="text">
            {(this.props.average + "%")}
          </span>
        </dd>
      </div>
    );
  }
};

export default connect(null, { fetchStatsByPrompt })(StatsListItem);