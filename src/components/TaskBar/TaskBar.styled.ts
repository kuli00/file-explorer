import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: calc(${({ theme }) => theme.headerHeight} - 1px);
  border-bottom: 1px solid #0000003c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  -webkit-app-region: drag;
`;

export const FunctionButtons = styled.div``;

export const SystemButtons = styled.div``;
