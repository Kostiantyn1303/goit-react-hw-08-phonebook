import React from 'react';

import { nanoid } from 'nanoid';
import { useState } from 'react';
import { logIn } from 'redux/auth/authOperation';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const LoginViews = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let emailInputId = nanoid();
  let passwordId = nanoid();

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const userData = {
        email,
        password,
      };
      dispatch(logIn(userData));
      navigate('/contacts');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor={emailInputId}>
          Email
          <input
            type="email"
            value={email}
            onChange={handleInputChange}
            name="email"
            //   pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            //   title="Please enter a valid email address"
            required
            id={emailInputId}
          />
        </label>

        <label htmlFor={passwordId}>
          Password
          <input
            type="password"
            value={password}
            onChange={handleInputChange}
            name="password"
            //   pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            //   title="Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit"
            required
            id={passwordId}
          />
        </label>

        <button type="submit">Log in</button>
      </form>
    </div>
  );
};
export default LoginViews;
