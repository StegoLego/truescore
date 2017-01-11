import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPrompts, fetchUserData } from '../actions/actions';

import PromptTile from './prompt_tile';
import StatsByPrompt from './stats_by_prompt';

class PromptContainer extends  Component {

  componentWillMount() {
    this.props.fetchPrompts();
    this.props.fetchUserData();
  }

	renderPrompts () {
		return this.props.prompts.map((prompt) => {
			return(
				<PromptTile
				prompt={prompt}
				{...prompt}
				key={prompt.id} />
			)
		});
	}


	render () {

    return (
      	<div className="prompt-container">
        	{this.renderPrompts.bind(this)()}
      	</div>

    );
  }
}

function mapStateToProps (state) {
  return {prompts: state.prompts};
}


export default connect(mapStateToProps, { fetchPrompts, fetchUserData })(PromptContainer); // this makes actions available as props of the component
