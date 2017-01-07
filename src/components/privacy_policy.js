import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitDecision } from '../actions/actions'; //update

class Privacy extends Component {

  render() {

    return (
      <div>
        <h6>{this.props.user.name}</h6>
      </div>
    );
  }

};


export default connect(null, { submitDecision })(Choice);
