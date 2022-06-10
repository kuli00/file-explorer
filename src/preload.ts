import type { Shell } from 'electron';
import { contextBridge, ipcRenderer, shell } from 'electron';
import { readdir } from 'fs/promises';

export interface InDirectoryItem {
  name: string;
  isDir: boolean;
  fullPath: string;
}

const getCurrentDirectory = (): string => process.cwd();

const getDirectoryContents = async (
  path: string,
): Promise<Array<InDirectoryItem>> => {
  const results = await readdir(path, { withFileTypes: true });
  return results.map(file => ({
    name: file.name,
    isDir: file.isDirectory(),
    fullPath: `${path}/${file.name}`,
  }));
};

const closeApp = (): void => {
  ipcRenderer.send('close');
};

const minimizeApp = () => {
  ipcRenderer.send('minimize');
};

const maximizeApp = () => {
  ipcRenderer.send('maximize');
};

contextBridge.exposeInMainWorld('api', {
  getCurrentDirectory,
  getDirectoryContents,
  openFile: shell.openPath,
  closeApp,
  minimizeApp,
  maximizeApp,
  getPath: (path: string) => ipcRenderer.invoke('getPath', path),
});

declare global {
  interface Window {
    api: {
      getCurrentDirectory: () => string;
      getDirectoryContents: (path: string) => Promise<Array<InDirectoryItem>>;
      openFile: Shell['openPath'];
      closeApp: () => void;
      minimizeApp: () => void;
      maximizeApp: () => void;
      getPath: (path: string) => Promise<string>;
    };
  }
}
