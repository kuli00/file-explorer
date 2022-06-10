import styled from 'styled-components';

export const Icon = styled.div<{ isSelected: boolean }>`
  background: ${({ isSelected }) => (isSelected ? '#0000FF7F' : 'none')};
  width: 100px;
  height: 60px;
  word-break: break-word;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  user-select: none;
  color: white;
`;
