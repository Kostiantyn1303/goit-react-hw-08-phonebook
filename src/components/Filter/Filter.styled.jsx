import styled from '@emotion/styled';

export const FilterLable = styled.label`
  font-size: 20px;
  font-weight: 700;
  display: block;
  margin-bottom: 10px;
  background-clip: text;
  background-image: linear-gradient(45deg, #553c9a, #ee4b2b);
  color: transparent;
`;

export const FilterContainer = styled.div`
  margin-bottom: 20px;
`;
export const FilterInput = styled.input`
  width: 200px;
  margin-top: 20px;
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
