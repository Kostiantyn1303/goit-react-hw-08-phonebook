import { NavLink } from 'react-router-dom';
import { AuthContainer } from './AuthNav.styled';
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
export default function AuthNav() {
  return (
    <AuthContainer>
      <StyledLink to="/registration"> Registration</StyledLink>
      <StyledLink to="/login"> LogIn</StyledLink>
    </AuthContainer>
  );
}
