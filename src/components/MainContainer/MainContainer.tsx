import AppContext from 'Contexts/AppContext';
import type { ReactElement } from 'react';
import React, { useContext } from 'react';

import { Container } from './MainContainer.styled';
import type { MainContainerProps } from './MainContainer.types';
export const MainContainer = ({
  children,
}: MainContainerProps): ReactElement => {
  const {
    actions: { selectFile },
  } = useContext(AppContext);

  return <Container onClick={() => selectFile(null)}>{children}</Container>;
};
