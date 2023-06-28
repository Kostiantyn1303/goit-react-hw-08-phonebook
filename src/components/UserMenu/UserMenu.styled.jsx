import styled from '@emotion/styled';
export const BtnLogOut = styled.button`
  cursor: pointer;

  display: block;
  margin: 0 auto;
  margin-top: 6px;

  width: 100%;
  max-width: 150px;
  height: 30px;
  padding: 2px 5px;

  color: black;
  background-color: #c4c4f4;
  font-size: 14px;
  font-weight: 700;

  border: none;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.24) 10px 10px 5px 0px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #010101;
    background-color: #c8e9e3;
    box-shadow: rgb(255, 255, 255) -2px -2px 5px,
      rgba(0, 0, 0, 0.24) 2px 2px 5px;
  }
`;
export const UserEmail = styled.p`
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
