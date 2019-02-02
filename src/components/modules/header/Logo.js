import React from 'react';

const Logo = ({ imgUrl = '', width = 60, height = 60 }) => (
  <img className="logo" src={imgUrl} alt="logo" width={width} height={height} />
);

export default Logo;
