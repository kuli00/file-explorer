import 'styled-components';

import type { ReactElement, ReactNode } from 'react';

import type { theme } from './theme';

type Theme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

type Children = ReactNode | ReactElement;

interface ThemeProviderProps {
  children: Children | Children[];
}
