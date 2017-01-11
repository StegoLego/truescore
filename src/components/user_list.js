import React from 'react';

const UserList = (props) => {
  console.log("HERE'S userList props: ", props);
  return (
    <div className="container">
      <ul>
        <li>{props.imageUrl}</li>
      </ul>
    </div>
  );
};

export default UserList;
