import React, { Component } from 'react';

class UserStats extends Component {
  render() {
    return (
      <dl>
        <dt>Users Stats</dt>
        <dd className="percentage percentage-75">
          <span className="text">
            Cheese Steak: 75%
          </span>
        </dd>
        <dd className="percentage percentage-25">
          <span className="text">
            Ice Cream: 25%
          </span>
        </dd>
        <dd className="percentage percentage-1">
          <span className="text">
            Fries: 1%
          </span>
        </dd>
      </dl>
    );
  }
};

export default UserStats;