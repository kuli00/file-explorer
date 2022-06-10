import type { ReactElement } from 'react';
import React from 'react';
import {
  StyleSheetManager,
  ThemeProvider as ThemeProviderBase,
} from 'styled-components';

import type { ThemeProviderProps } from './styled';
import { theme } from './theme';

const ThemeProvider = ({ children }: ThemeProviderProps): ReactElement => (
  <StyleSheetManager disableVendorPrefixes>
    <ThemeProviderBase theme={theme}>{children}</ThemeProviderBase>
  </StyleSheetManager>
);
export default ThemeProvider;
