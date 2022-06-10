import { useLayoutEffect, useState } from 'react';

import { commonLocationsDictionary } from './Sidebar.const';
import type { CommonLocation, UseSidebar } from './Sidebar.types';
import { COMMON_LOCATIONS_NAMES } from './Sidebar.types';

export const useSidebar: UseSidebar = () => {
  const [commonPaths, setCommonPaths] = useState<Array<CommonLocation>>([]);

  useLayoutEffect(() => {
    const getCommonPaths = async () => {
      const paths: Array<CommonLocation> = await Promise.all(
        Object.values(COMMON_LOCATIONS_NAMES).map(async name => ({
          Icon: commonLocationsDictionary[name].icon,
          path: await window.api.getPath(name),
          name: commonLocationsDictionary[name].name,
        })),
      );

      setCommonPaths(paths);
    };

    getCommonPaths();
  }, []);

  return { commonPaths };
};
