import type { Reducer } from 'react';
import { useEffect, useReducer, useRef } from 'react';

import { appContextReducer } from './AppContext.reducer';
import type {
  AppContextAction,
  AppContextActions,
  AppContextProps,
  AppContextState,
} from './AppContext.types';
import { AppContextActionType } from './AppContext.types';
import { initialState } from './index';

export const useAppContext = (): AppContextProps => {
  const [state, dispatch] = useReducer<
    Reducer<AppContextState, AppContextAction>
  >(appContextReducer, initialState);

  const { current: actions } = useRef<AppContextActions>({
    changeDirectory: (newDirectoryPath: string) => {
      dispatch({
        type: AppContextActionType.CHANGE_DIRECTORY,
        newDirectoryPath,
      });
    },
    selectFile: (selectedFile: string | null) => {
      dispatch({
        type: AppContextActionType.SELECT_FILE,
        selectedFile,
      });
    },
    loadFiles: async (path: string) => {
      const files = await window.api.getDirectoryContents(path);
      dispatch({
        type: AppContextActionType.LOAD_FILES,
        files,
      });
    },
    goBack: () => {
      dispatch({
        type: AppContextActionType.GO_BACK,
      });
    },
    goForward: () => {
      dispatch({
        type: AppContextActionType.GO_FORWARD,
      });
    },
  });

  useEffect(() => {
    actions.loadFiles(state.currentDirectory);
  }, [state.currentDirectory]);

  useEffect(() => {
    actions.changeDirectory(state.history[state.historyPointer]);
  }, [state.historyPointer]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      actions.loadFiles(state.currentDirectory);
    }, 5000);

    return () => clearInterval(intervalId);
  });

  useEffect(() => {
    console.log('curr', state.currentSelection);
  }, [state.currentSelection]);

  return {
    state,
    actions,
  };
};
