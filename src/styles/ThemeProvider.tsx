import type { ReactElement, ReactNode } from 'react';
import React from 'react';
import {
  StyleSheetManager,
  ThemeProvider as ThemeProviderBase,
} from 'styled-components';

import { theme } from './theme';

type Children = ReactNode | ReactElement;

interface ThemeProviderProps {
  children: Children | Children[];
}

const ThemeProvider = ({ children }: ThemeProviderProps): ReactElement => (
  <StyleSheetManager disableVendorPrefixes>
    <ThemeProviderBase theme={theme}>{children}</ThemeProviderBase>
  </StyleSheetManager>
);
export default ThemeProvider;
