import React, { Component } from 'react';
import { connect } from 'react-redux';
import { throttledSubmitDecision, throttledFetchComparison} from '../actions/actions';
import Results from '../components/results.js';

class Choice extends Component {
  constructor(props) {
    super(props);
    this.state = {showResults: false}
  }
  
  submit(winnerId){
    this.props.throttledSubmitDecision(winnerId);
    this.props.throttledFetchComparison();
  }


  render() {
    let overlay = {
      zIndex: 1,
      opacity: 0.4
    }


    return (
      <div className="choice-container"
        onClick={() => this.submit.bind(this)(this.props.id) } >
        <h3>{this.props.name}</h3>
        <img src={this.props.imageUrl} />
      </div>
    );
  }

};


export default connect(null, { throttledSubmitDecision, throttledFetchComparison })(Choice);
