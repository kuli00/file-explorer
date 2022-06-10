import { useExplorerIcon } from 'Components/ExplorerIcon/ExplorerIcon.hook';
import type { ReactElement } from 'react';
import React from 'react';

import {
  DirectoryIcon,
  FileIcon,
  FileName,
  Wrapper,
} from './ExplorerIcon.styled';
import type { ExplorerIconProps } from './ExplorerIcon.types';

export const ExplorerIcon = ({
  isDir,
  name,
  fullPath,
}: ExplorerIconProps): ReactElement => {
  const { currentSelection, handleClick } = useExplorerIcon(isDir, fullPath);

  return (
    <Wrapper isSelected={fullPath === currentSelection} onClick={handleClick}>
      {isDir ? <DirectoryIcon /> : <FileIcon />}
      <FileName>{name}</FileName>
    </Wrapper>
  );
};
