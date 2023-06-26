import { nanoid } from 'nanoid';
import { useState } from 'react';
import { register } from '../redux/auth/authOperation';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RegistrViews = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userNameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const userData = {
      name,
      email,
      password,
    };
    dispatch(register(userData));
    setEmail('');
    setName('');
    setPassword('');
    navigate('/login');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={userNameInputId}>
        User Name
        <input
          type="text"
          value={name}
          onChange={handleInputChange}
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={userNameInputId}
        />
      </label>
      <label htmlFor={emailInputId}>
        Email
        <input
          type="email"
          value={email}
          onChange={handleInputChange}
          name="email"
          // pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          // title="Please enter a valid email address"
          required
          id={emailInputId}
        />
      </label>

      <label htmlFor={passwordInputId}>
        Password
        <input
          type="password"
          value={password}
          onChange={handleInputChange}
          name="password"
          // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          // title="Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit"
          required
          id={passwordInputId}
        />
      </label>

      <button type="submit">Registrate</button>
    </form>
  );
};

export default RegistrViews;
