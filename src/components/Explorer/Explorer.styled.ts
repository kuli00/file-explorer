import styled from 'styled-components';

export const Wrapper = styled.div`
  max-height: calc(100vh - ${({ theme }) => theme.headerHeight});
  height: fit-content;
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  row-gap: 10px;
  column-gap: 10px;
  padding: 10px 10px 0;
`;
