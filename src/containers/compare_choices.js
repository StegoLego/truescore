import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchComparison } from '../actions/actions';
import Choice from './choice.js'

class CompareChoices extends Component {

  componentWillMount() {
    this.props.fetchComparison();
  }

  renderChoices(){

    console.log("my comparison: ", this.props.comparison);
    return this.props.comparison.choices.map(choice => {
      console.log("current choice is ", choice);
      return (
        <Choice 
          name={choice.name}
          imageUrl={choice.imageUrl}
          key={choice.name} />
      );
    });
  }

  render () {

    return (
      <div className="game-container">
      <h4 className="game-info">{this.props.comparison ? this.props.comparison.prompt : 'Loading...'}</h4>
      <button
        onClick={() => this.props.fetchComparison()}
        className="btn btn-secondary">
        Refresh
      </button>
      <div className="game-comparison">
        {this.renderChoices.bind(this)()}
      </div>
    </div>

    );
  }
}

function mapStateToProps (state) {
  return {comparison: state.comparison};
}

export default connect(mapStateToProps, { fetchComparison })(CompareChoices);