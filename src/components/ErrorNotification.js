import React from 'react';

const ErrorNotification = ({ err }) => (
  <div>
    <h1>Error occured while fetching data</h1>
    <p>Error: {err}</p>
  </div>
);

export default ErrorNotification;
