import styled from '@emotion/styled';
export const Form = styled.form`
  margin-bottom: 60px;
  text-align: center;
`;
export const FormLabel = styled.label`
  font-size: 20px;
  font-weight: 700;
  display: block;
  margin-bottom: 10px;
  background-clip: text;
  background-image: linear-gradient(45deg, #553c9a, #ee4b2b);
  color: transparent;
`;

export const FormBtn = styled.button`
  cursor: pointer;

  display: block;
  margin: 0 auto;
  margin-top: 6px;

  width: 100%;
  max-width: 180px;
  height: 30px;
  padding: 2px 5px;

  color: black;
  background-color: #e6e6fa;
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
export const FormInput = styled.input`
  width: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: all 250ms linear;

  &:focus {
    box-shadow: rgba(100, 100, 111, 0.6) 0px 7px 29px 0px;
  }
`;
