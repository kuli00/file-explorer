import type { AppContextAction, AppContextState } from './AppContext.types';
import { AppContextActionType } from './AppContext.types';
import { getParentDirectory } from './index';

export const appContextReducer = (
  state: AppContextState,
  action: AppContextAction,
): AppContextState => {
  switch (action.type) {
    case AppContextActionType.CHANGE_DIRECTORY:
      if (!action.newDirectoryPath) return state;

      if (
        !state.history.includes(action.newDirectoryPath) &&
        state.historyPointer < state.history.length - 1
      ) {
        return {
          ...state,
          currentSelection: null,
          parentDirectory: getParentDirectory(action.newDirectoryPath),
          currentDirectory: action.newDirectoryPath,
          historyPointer: state.historyPointer + 1,
          history: [
            ...state.history.slice(0, state.historyPointer + 1),
            action.newDirectoryPath,
          ],
        };
      }
      if (!state.history.includes(action.newDirectoryPath)) {
        return {
          ...state,
          parentDirectory: getParentDirectory(action.newDirectoryPath),
          currentDirectory: action.newDirectoryPath,
          history: [...state.history, action.newDirectoryPath],
          historyPointer: state.historyPointer + 1,
          currentSelection: null,
        };
      }
      return {
        ...state,
        parentDirectory: getParentDirectory(action.newDirectoryPath),
        currentDirectory: action.newDirectoryPath,
        currentSelection: null,
      };
    case AppContextActionType.SELECT_FILE:
      return {
        ...state,
        currentSelection: action.selectedFile,
      };
    case AppContextActionType.LOAD_FILES:
      return {
        ...state,
        files: action.files,
      };
    case AppContextActionType.GO_BACK:
      if (state.historyPointer === 0) {
        return state;
      }

      return {
        ...state,
        historyPointer: state.historyPointer - 1,
      };
    case AppContextActionType.GO_FORWARD:
      if (state.historyPointer === state.history.length - 1) {
        return state;
      }

      return {
        ...state,
        historyPointer: state.historyPointer + 1,
      };
    default:
      return state;
  }
};
