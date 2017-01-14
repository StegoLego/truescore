import React, { Component } from 'react';

import CompareChoices from '../containers/compare_choices';
import Navigation from './navigation.js';

export default class App extends Component {
  constructor (props){
    super(props);
  }

  render() {
    return (
      <div id="app">
        <div>{this.props.navigation}</div>
        <div className="main">{this.props.main}</div>
      </div>
    );
  }
}
