import Button from 'Components/Button';
import AppContext from 'Contexts/AppContext';
import type { ReactElement } from 'react';
import React, { useContext } from 'react';

import { useSidebar } from './Sidebar.hook';
import { Wrapper } from './Sidebar.styled';

export const Sidebar = (): ReactElement => {
  const {
    state: { currentDirectory },
    actions: { changeDirectory },
  } = useContext(AppContext);

  const { commonPaths } = useSidebar();

  return (
    <Wrapper>
      {commonPaths?.map(({ path, Icon, name }, idx) => (
        <Button
          key={`common-${idx}`}
          onClick={() => changeDirectory(path)}
          active={path === currentDirectory}
        >
          <Icon size={20} />
          {name}
        </Button>
      ))}
    </Wrapper>
  );
};
