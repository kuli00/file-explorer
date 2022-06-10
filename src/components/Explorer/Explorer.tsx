import ExplorerIcon from 'Components/ExplorerIcon';
import AppContext from 'Contexts/AppContext';
import type { ReactElement } from 'react';
import { useContext } from 'react';
import React from 'react';

import { Wrapper } from './Explorer.styled';

export const Explorer = (): ReactElement => {
  const {
    state: { files },
  } = useContext(AppContext);

  return (
    <Wrapper>
      {files?.map((file, idx) => (
        <ExplorerIcon key={`${file.fullPath}-${idx}`} {...file} />
      ))}
    </Wrapper>
  );
};
