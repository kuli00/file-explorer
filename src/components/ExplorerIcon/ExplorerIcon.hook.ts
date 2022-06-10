import AppContext from 'Contexts/AppContext';
import { useContext, useEffect, useState } from 'react';

import type { UseExplorerIcon } from './ExplorerIcon.types';

export const useExplorerIcon: UseExplorerIcon = (isDir, fullPath) => {
  const {
    actions: { changeDirectory, selectFile },
    state: { currentSelection },
  } = useContext(AppContext);

  const [click, setClick] = useState<number>(0);

  const handleClick = (): void => setClick(prevState => prevState + 1);

  useEffect(() => {
    if (click === 0) return;

    selectFile(fullPath);

    const timer = setTimeout((): void => {
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

  return {
    currentSelection,
    handleClick,
  };
};
