import { app, BrowserWindow, ipcMain } from 'electron';

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;
const DEFAULT_WINDOW_HEIGHT = 600;
const DEFAULT_WINDOW_WIDTH = 1000;

let mainWindow: BrowserWindow;

const createWindow = (): void => {
  mainWindow = new BrowserWindow({
    height: DEFAULT_WINDOW_HEIGHT,
    width: DEFAULT_WINDOW_WIDTH,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
    titleBarStyle: 'hidden',
    frame: false,
    trafficLightPosition: { x: -100, y: -100 },
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
};
app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on('close', () => {
  app.quit();
});

ipcMain.on('minimize', () => {
  mainWindow.minimize();
});

ipcMain.on('maximize', () => {
  if (mainWindow.isMaximized()) {
    mainWindow.setSize(DEFAULT_WINDOW_WIDTH, DEFAULT_WINDOW_HEIGHT, true);
  } else {
    mainWindow.maximize();
  }
});

ipcMain.handle('getPath', async (_, path) => app.getPath(path));
