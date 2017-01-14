import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updatePrompt } from '../actions/actions';

class PromptTile extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  tileClick(){
    this.props.updatePrompt(this.props.prompt);
    this.context.router.push('/game')
  }


  render() {

    console.log("from inside this.props", this.props);
    return (

        <li className ="list-group-item"
        onClick={ () => this.tileClick() }>
          <div className="media-left">
            <img className="media-left" src={this.props.tileImage}/>
          </div>
            <div className="media-body">
              <div className="media-heading">{this.props.title}</div>
            </div>
        </li>


    );
  }
}

export default connect(null, { updatePrompt })(PromptTile);

//connection(state, action)(component)
