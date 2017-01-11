import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitDecision, fetchComparison } from '../actions/actions';
import Results from '../components/results.js';
  
class Choice extends Component {
  constructor(props) {
    super(props);
    this.state = {showResults: false}
  }
  submit(winnerId){
    console.log('PROPS??: ', this.props);
    this.props.submitDecision(winnerId);
    this.setState({ showResults: true });
    setTimeout(() => {
      this.setState({showResults: false});
      this.props.fetchComparison();
    }, 700);
  }

  renderUserStat () {
      if(this.props.name) {
        return (
          <Results
            average={Math.floor(this.props.average*100)} />
        );
      }
  }


  render() {
    let overlay = {
      zIndex: 1,
      opacity: 0.4
    }
    return (
      <div className="choice-container">
        <h3>{this.props.name}</h3>
        <img
        onClick={() => {
          this.submit.bind(this)(this.props.id);
        }}
        src={this.props.imageUrl} />
        {this.state.showResults ? this.renderUserStat.bind(this)() : null}
      </div>
    );
  }

};


export default connect(null, { submitDecision, fetchComparison })(Choice);

