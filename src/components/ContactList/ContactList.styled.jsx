import styled from '@emotion/styled';
export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 100%;
  width: 400px;
  margin: 0 auto;
  padding: 15px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;
export const Items = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const BtnDelete = styled.button`
  border: none;
  padding: 4px;
  :hover,
  :focus {
    outline: none;
    background: #000;
    color: #fff;
    cursor: pointer;
  }
`;
