import styled from 'styled-components';

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  height: calc(100vh - ${({ theme }) => theme.headerHeight});
`;
