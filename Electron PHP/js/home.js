const electron = require("electron");
const { ipcRenderer } = electron;

function showWindow(name) {
  console.log(name);
  ipcRenderer.send("showWindow", name);
}
