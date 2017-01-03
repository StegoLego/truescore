import React from 'react';

const StatsListItem = (props) => {
  console.log("HERE'S STATSLIST props: ", props);
  return (
    <dl>
      <dt>{props.prompt}</dt>
      <dd className="percentage">
        <span className="text">
          {props.average}
        </span>
      </dd>
    </dl>
  );
};

export default StatsListItem;