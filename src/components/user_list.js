import React from 'react';

const UserList = (props) => {
  console.log("HERE'S userList props: ", props);
  return (
    <div>
      <ul>
        <li>{props.name}</li>
      </ul>
    </div>
  );
};

export default UserList;