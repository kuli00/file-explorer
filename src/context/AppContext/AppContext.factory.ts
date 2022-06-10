import { createContext } from 'react';

import type { AppContextProps } from './AppContext.types';
import { initialState } from './index';

const noop = (): null => null;

export const AppContext = createContext<AppContextProps>({
  state: initialState,
  actions: {
    changeDirectory: noop,
    selectFile: noop,
    loadFiles: noop,
    goBack: noop,
    goForward: noop,
  },
});
