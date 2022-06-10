import { Book as DocumentIcon } from '@styled-icons/boxicons-regular/Book';
import { Desktop as DesktopIcon } from '@styled-icons/boxicons-regular/Desktop';
import { Download as DownloadIcon } from '@styled-icons/boxicons-regular/Download';
import { Home as HomeIcon } from '@styled-icons/boxicons-regular/Home';

import { COMMON_LOCATIONS_NAMES } from './Sidebar.types';

export const commonLocationsDictionary = {
  [COMMON_LOCATIONS_NAMES.HOME]: {
    icon: HomeIcon,
    name: 'Home',
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
