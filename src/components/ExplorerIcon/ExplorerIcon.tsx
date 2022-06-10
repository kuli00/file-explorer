import { File as FileIcon } from '@styled-icons/boxicons-regular';
import { FileDirectory as DirectoryIcon } from '@styled-icons/octicons';
import AppContext from 'Contexts/AppContext';
import type { ReactElement } from 'react';
import React, { useContext, useEffect, useState } from 'react';

import { Icon } from './ExplorerIcon.styled';
import type { ExplorerIconProps } from './ExplorerIcon.types';

export const ExplorerIcon = ({
  isDir,
  name,
  fullPath,
}: ExplorerIconProps): ReactElement => {
  const {
    actions: { changeDirectory, selectFile },
    state: { currentSelection },
  } = useContext(AppContext);

  const [click, setClick] = useState<number>(0);

  useEffect(() => {
    if (click === 0) return;

    selectFile(fullPath);

    const timer = setTimeout(() => {
      setClick(0);
    }, 200);

    if (click === 2) {
      if (isDir) {
        changeDirectory(fullPath);
      } else {
        window.api.openFile(fullPath);
      }
    }

    return () => clearTimeout(timer);
  }, [click]);

  return (
    <Icon
      isSelected={fullPath === currentSelection}
      onClick={() => setClick(prevState => prevState + 1)}
    >
      {isDir ? (
        <DirectoryIcon size={40} color="#FFFFFF" />
      ) : (
        <FileIcon size={40} color="#FFFFFF" />
      )}
      <span>{name}</span>
    </Icon>
  );
};
