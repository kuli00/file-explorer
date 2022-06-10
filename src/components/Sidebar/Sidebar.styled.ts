import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: calc(100vh - ${({ theme }) => theme.headerHeight});
  overflow: auto;
  row-gap: 10px;

  & button {
    width: calc(100% - 20px);
    display: flex;
    align-items: center;
    column-gap: 10px;
    padding: 5px 5px 5px 15px;
  }
`;
