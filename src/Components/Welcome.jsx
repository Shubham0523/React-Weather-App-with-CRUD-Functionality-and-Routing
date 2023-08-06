import React from 'react';
import { useParams } from 'react-router-dom';

const Welcome = () => {
  const { username } = useParams();     //value from route 

  return (
    <div className='container'>
      <h1>Welcome, {username}</h1>
    </div>
  );
};

export default Welcome;
