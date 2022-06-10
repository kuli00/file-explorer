import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  margin-top: ${({ theme }) => theme.headerHeight};
  height: 100vh;
`;
