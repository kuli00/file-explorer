import ExplorerIcon from 'Components/ExplorerIcon';
import AppContext from 'Contexts/AppContext';
import type { ReactElement } from 'react';
import React, { useContext } from 'react';

import { Wrapper } from './Explorer.styled';

export const Explorer = (): ReactElement => {
  const {
    state: { files },
    actions: { selectFile },
  } = useContext(AppContext);

  return (
    <Wrapper onClick={() => selectFile(null)}>
      {files?.map((file, idx) => (
        <ExplorerIcon key={`${file.fullPath}-${idx}`} {...file} />
      ))}
    </Wrapper>
  );
};
