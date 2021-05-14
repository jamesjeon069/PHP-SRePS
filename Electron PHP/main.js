const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;
let secondWindow;

//listen for app to be ready
app.on("ready", function () {
  //Create main Window
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false,
      plugins: true,
    },
  });
  // Load html into main window
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "/html/home.html"),
      protocol: "file",
      slashes: true,
    })
  );

  //quit app when closed
  mainWindow.on("closed", function () {
    app.quit();
  });
});

//Second window loading logic
ipcMain.on("showWindow", function (e, windowName) {
  console.log(windowName);
  secondWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false,
      plugins: true,
    },
  });

  secondWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/html/${windowName}.html`),
      protocol: "file",
      slashes: true,
    })
  );

  // secondWindow.webContents.send("item:add", item);
});
