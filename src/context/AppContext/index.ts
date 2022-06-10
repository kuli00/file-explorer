import type { AppContextState } from './AppContext.types';

export { AppContext as default } from './AppContext.factory';
export { AppContextProvider } from './AppContext.Provider';

export const getParentDirectory = (path: string): string => {
  const fullPath = path.split('/');
  fullPath.pop();
  return fullPath.join('/') || '/';
};

const initialDirectory = window.api.getCurrentDirectory();
export const initialState: AppContextState = {
  currentDirectory: initialDirectory,
  currentSelection: null,
  files: null,
  history: [initialDirectory],
  historyPointer: 0,
  parentDirectory: getParentDirectory(initialDirectory),
};
