import React from 'react';
import { useLocation } from 'react-router-dom';

const Response = () => {
  const location = useLocation();
  const { responseData } = location.state;

  return (
    <div>
      <h1>Response Page</h1>
      <pre>{JSON.stringify(responseData, null, 2)}</pre>
    </div>
  );
};

export default Response;
