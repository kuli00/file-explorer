import { File } from '@styled-icons/boxicons-regular';
import { FileDirectory } from '@styled-icons/octicons';
import styled, { css } from 'styled-components';

interface WrapperProps {
  isSelected: boolean;
}

export const Wrapper = styled.button<WrapperProps>`
  background-color: transparent;
  width: 100px;
  height: 85px;
  display: flex;
  user-select: none;
  border: 0;
  position: relative;
  padding: 5px;
  z-index: 1;
  overflow: visible;

  & > svg {
    padding: 3px;
  }

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      overflow: visible;
      z-index: 10;

      & > svg,
      & ${FileName} {
        background-color: ${theme.palette.selection};
      }

      ${FileName} {
        text-overflow: unset;
        overflow: visible;
        white-space: unset;
        word-break: break-all;
        height: fit-content;
      }
    `};
`;

export const FileName = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
  display: block;
  width: calc(100% - 6px);
  position: absolute;
  top: 55px;
  left: 0;
  right: 0;
  color: ${({ theme }) => theme.palette.fileIcon};
  z-index: 2;
  padding: 3px;
`;

const iconStyle = css`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: block;
  margin: 0 auto;
  color: ${({ theme }) => theme.palette.fileIcon};
`;

export const DirectoryIcon = styled(FileDirectory)`
  ${iconStyle}
`;

export const FileIcon = styled(File)`
  ${iconStyle}
`;
