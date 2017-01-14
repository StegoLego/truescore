import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPrompts, fetchStatsByPrompt } from '../actions/actions'; //gets us promptsId, and stats by prompt

import TopFive from '../components/topFive'; //this is how we reference components from external

class TopFiveTilesContainer extends  Component {

  componentWillMount() {

    this.props.prompts.forEach(prompt => this.props.fetchStatsByPrompt(prompt.id));

    setInterval(() => {
      this.props.prompts.forEach(prompt => this.props.fetchStatsByPrompt(prompt.id));
    }, 3000)
  }

  renderTopFiveTiles () {
    return this.props.prompts.map( (prompt) => {
        if(!this.props.allStats[prompt.id]) {
          return (<div key={prompt.id}>Loading...</div>)
        } else {
          return (
            <TopFive
              key={prompt.id}
              prompt={prompt}
              arrayOfUserObjects={this.props.allStats[prompt.id]}
            />
          )
        }
    });
  }

  render () {

    return (
        <div className="prompt-container">
          {this.renderTopFiveTiles.bind(this)()}
        </div>

    );
  }
}

function mapStateToProps (state) {
  return {
    prompts: state.prompts,
    statsByPromptId: state.statsByPromptId,
    allStats: state.allStats
  };
}

export default connect(mapStateToProps, { fetchPrompts, fetchStatsByPrompt })(TopFiveTilesContainer); // this makes actions available as props of the component
