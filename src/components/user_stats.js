import React, { Component } from 'react';
import StatsListItem from './stats_list_item.js';
import UserList from './user_list.js';

const UserStats = ({props}) => {
  console.log('HERE\'s props for USERSTATS: ', props);
  return (
    <div>
      <h3>MUST NOT BE HARD CODED</h3>
      <div>
        <StatsListItem />
      </div>
      <div>
        <UserList />
      </div>
    </div>
  );
};

export default UserStats;