import AppContext from 'Contexts/AppContext';
import type { ReactElement } from 'react';
import React, { useContext } from 'react';

import { FunctionButtons, SystemButtons, Wrapper } from './TaskBar.styled';

export const TaskBar = (): ReactElement => {
  const {
    state: { parentDirectory },
    actions: { goBack, goForward, changeDirectory },
  } = useContext(AppContext);

  return (
    <Wrapper>
      <FunctionButtons>
        <button onClick={goBack}>&lt;</button>
        <button onClick={goForward}>&gt;</button>
        <button onClick={() => changeDirectory(parentDirectory)}>^</button>
      </FunctionButtons>
      <SystemButtons>
        <button onClick={window.api.minimizeApp}>-</button>
        <button onClick={window.api.maximizeApp}>O</button>
        <button onClick={window.api.closeApp}>X</button>
      </SystemButtons>
    </Wrapper>
  );
};
