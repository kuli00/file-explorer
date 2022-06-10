import AppContext from 'Contexts/AppContext';
import type { ReactElement } from 'react';
import React, { useContext } from 'react';

import {
  BackIcon,
  Button,
  CloseIcon,
  ForwardIcon,
  FunctionButtons,
  MaximizeIcon,
  MinimizeIcon,
  SystemButtons,
  UpIcon,
  Wrapper,
} from './TaskBar.styled';
export const TaskBar = (): ReactElement => {
  const {
    state: { parentDirectory },
    actions: { goBack, goForward, changeDirectory },
  } = useContext(AppContext);

  return (
    <Wrapper>
      <FunctionButtons>
        <Button onClick={goBack}>
          <BackIcon />
        </Button>
        <Button onClick={goForward}>
          <ForwardIcon />
        </Button>
        <Button onClick={() => changeDirectory(parentDirectory)}>
          <UpIcon />
        </Button>
      </FunctionButtons>
      <SystemButtons>
        <Button onClick={window.api.minimizeApp}>
          <MinimizeIcon />
        </Button>
        <Button onClick={window.api.maximizeApp}>
          <MaximizeIcon />
        </Button>
        <Button onClick={window.api.closeApp}>
          <CloseIcon />
        </Button>
      </SystemButtons>
    </Wrapper>
  );
};
