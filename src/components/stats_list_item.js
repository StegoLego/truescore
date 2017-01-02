import React from 'react';

const StatsListItem = ({video}) => {
  const imageUrl = video.imageUrl;
  return (
    <dl>
      <dt>{video.name}</dt>
      <dd className="media-left">
        <img className="media-object" src={imageUrl} />
        <span className="text">
          {video.wins / video.losses}
        </span>
      </dd>
    </dl>
  );
};

export default StatsListItem;