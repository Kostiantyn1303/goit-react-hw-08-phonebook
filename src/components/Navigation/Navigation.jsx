import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import styled from '@emotion/styled';
const StyledLink = styled(NavLink)`
  color: transparent;
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  background-clip: text;
  background-image: linear-gradient(45deg, #553c9a, #ee4b2b);

  &:hover,
  &:focus {
    background-image: linear-gradient(to left, #553c9a, #b393d3);
  }
  &:active {
    color: #ff7f50;
  }
`;
const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </nav>
  );
};
export default Navigation;
