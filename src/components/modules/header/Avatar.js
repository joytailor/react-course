import React from 'react';

const Avatar = ({ imgUrl = '', width = 60, height = 60 }) => (
  <img
    className="Avatar"
    src={imgUrl}
    alt="user avatar"
    width={width}
    height={height}
  />
);

export default Avatar;
