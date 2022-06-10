import {
  Book as DocumentIcon,
  Desktop as DesktopIcon,
  Download as DownloadIcon,
  Home as HomeIcon,
} from '@styled-icons/boxicons-regular';
import type { StyledIcon } from '@styled-icons/styled-icon';
import Button from 'Components/Button';
import AppContext from 'Contexts/AppContext';
import type { ReactElement } from 'react';
import React, { useContext, useLayoutEffect, useState } from 'react';

import { Wrapper } from './Sidebar.styled';

enum COMMON_LOCATIONS_NAMES {
  HOME = 'home',
  DOWNLOADS = 'downloads',
  DESKTOP = 'desktop',
  DOCUMENTS = 'documents',
}

const commonLocationsDictonary = {
  [COMMON_LOCATIONS_NAMES.HOME]: {
    icon: HomeIcon,
    name: 'HOME',
  },
  [COMMON_LOCATIONS_NAMES.DESKTOP]: {
    icon: DesktopIcon,
    name: 'Desktop',
  },
  [COMMON_LOCATIONS_NAMES.DOWNLOADS]: {
    icon: DownloadIcon,
    name: 'Downloads',
  },
  [COMMON_LOCATIONS_NAMES.DOCUMENTS]: {
    icon: DocumentIcon,
    name: 'Documents',
  },
};

interface CommonLocation {
  Icon: StyledIcon;
  path: string;
  name: string;
}

export const Sidebar = (): ReactElement => {
  const {
    actions: { changeDirectory },
  } = useContext(AppContext);

  const [commonPaths, setCommonPaths] = useState<Array<CommonLocation>>([]);

  useLayoutEffect(() => {
    const getCommonPaths = async () => {
      const paths: Array<CommonLocation> = await Promise.all(
        Object.values(COMMON_LOCATIONS_NAMES).map(async name => ({
          Icon: commonLocationsDictonary[name].icon,
          path: await window.api.getPath(name),
          name: commonLocationsDictonary[name].name,
        })),
      );

      setCommonPaths(paths);
    };

    getCommonPaths();
  }, []);

  return (
    <Wrapper>
      {commonPaths?.map((location, idx) => (
        <Button
          key={`common-${idx}`}
          onClick={() => changeDirectory(location.path)}
        >
          <location.Icon size={20} />
          {location.name}
        </Button>
      ))}
    </Wrapper>
  );
};
