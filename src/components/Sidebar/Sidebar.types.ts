import type { StyledIcon } from '@styled-icons/styled-icon';

export type UseSidebar = () => {
  commonPaths: Array<CommonLocation>;
};

export enum COMMON_LOCATIONS_NAMES {
  HOME = 'home',
  DOWNLOADS = 'downloads',
  DESKTOP = 'desktop',
  DOCUMENTS = 'documents',
}

export interface CommonLocation {
  Icon: StyledIcon;
  path: string;
  name: string;
}
