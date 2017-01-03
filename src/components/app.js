import React, { Component } from 'react';

import CompareChoices from '../containers/compare_choices';
import Navigation from './navigation.js';

export default class App extends Component {
  constructor (props){
    super(props);
  }

  render() {
    // Render test for UserStats; it must be visited from a nav link later
    return (
      <div>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}
