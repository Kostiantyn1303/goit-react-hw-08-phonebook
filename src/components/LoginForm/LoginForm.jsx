import React from 'react';
import { Form, FormInput, FormBtn, FormLabel } from './LoginForm.styled';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { logIn } from 'redux/auth/authOperation';

import Notiflix from 'notiflix';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

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
      Notiflix.Notify.success('Your login was success');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormLabel htmlFor={emailInputId}>
          Email
          <FormInput
            type="email"
            value={email}
            onChange={handleInputChange}
            name="email"
            //   pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            //   title="Please enter a valid email address"
            required
            id={emailInputId}
          />
        </FormLabel>

        <FormLabel htmlFor={passwordId}>
          Password
          <FormInput
            type="password"
            value={password}
            onChange={handleInputChange}
            name="password"
            //   pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            //   title="Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit"
            required
            id={passwordId}
          />
        </FormLabel>

        <FormBtn type="submit">Log in</FormBtn>
      </Form>
    </div>
  );
};
export default LoginForm;
