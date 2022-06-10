import type { InDirectoryItem } from 'Main/preload';
import type { ReactNode } from 'react';

export enum AppContextActionType {
  CHANGE_DIRECTORY,
  SELECT_FILE,
  LOAD_FILES,
  GO_BACK,
  GO_FORWARD,
}

export type AppContextAction =
  | {
      type: AppContextActionType.CHANGE_DIRECTORY;
      newDirectoryPath: string;
    }
  | {
      type: AppContextActionType.SELECT_FILE;
      selectedFile: string | null;
    }
  | {
      type: AppContextActionType.LOAD_FILES;
      files: Array<InDirectoryItem> | null;
    }
  | {
      type: AppContextActionType.GO_BACK;
    }
  | {
      type: AppContextActionType.GO_FORWARD;
    };

export interface AppContextActions {
  changeDirectory: (path: string) => void;
  selectFile: (path: string) => void;
  loadFiles: (path: string) => void;
  goBack: () => void;
  goForward: () => void;
}

export interface AppContextState {
  currentDirectory: string;
  currentSelection: string | null;
  files: Array<InDirectoryItem> | null;
  history: Array<string>;
  historyPointer: number;
  parentDirectory: string;
}

export interface AppContextProps {
  state: AppContextState;
  actions: AppContextActions;
}

export interface AppContextProviderProps {
  children: ReactNode;
}
