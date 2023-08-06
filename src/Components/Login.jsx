import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);        //sets the value username from input 
  };

  const handleFormSubmit = (event) => {
    // event.preventDefault();     
    navigate(`/welcome-page/${username}`);      //navigate to the newly generated link
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
