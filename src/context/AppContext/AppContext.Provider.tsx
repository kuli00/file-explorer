import type { ReactElement } from 'react';
import React from 'react';

import { AppContext } from './AppContext.factory';
import { useAppContext } from './AppContext.hook';
import type { AppContextProviderProps } from './AppContext.types';

export const AppContextProvider = ({
  children,
}: AppContextProviderProps): ReactElement => {
  const appContextData = useAppContext();

  return (
    <AppContext.Provider value={appContextData}>{children}</AppContext.Provider>
  );
};
