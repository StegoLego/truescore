import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePrompt, throttledFetchStatsByPrompt } from '../actions/actions';

class MiniPromptList extends Component {

  render() {
  	const miniPic = {
  		height: '80px',
  		width: '80px',
  		display: 'block',
  		'marginLeft': 'auto',
  		'marginRight': 'auto'

  	}

    return (
        <div className="mini-prompt-tile"
        	onClick={() => {
            this.props.updatePrompt(this.props.prompt);
            this.props.throttledFetchStatsByPrompt(this.props.prompt.id);
          }}>
        	<img className="miniPrompt" style={miniPic} src={this.props.tileImage}/>
          <h6>{this.props.text}</h6>
        </div>
    );
  }
}



export default connect(null, { updatePrompt, throttledFetchStatsByPrompt })(MiniPromptList);

//connection(state, action)(component)
