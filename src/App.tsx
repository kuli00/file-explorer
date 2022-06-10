import Explorer from 'Components/Explorer';
import MainContainer from 'Components/MainContainer';
import Sidebar from 'Components/Sidebar';
import TaskBar from 'Components/TaskBar';
import { AppContextProvider } from 'Contexts/AppContext';
import type { ReactElement } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalStyle, ThemeProvider } from 'Styles';

const FileExplorer = (): ReactElement => (
  <AppContextProvider>
    <ThemeProvider>
      <TaskBar />
      <MainContainer>
        <Sidebar />
        <Explorer />
      </MainContainer>
      <GlobalStyle />
    </ThemeProvider>
  </AppContextProvider>
);

const root = createRoot(document.getElementById('root'));
root.render(<FileExplorer />);
