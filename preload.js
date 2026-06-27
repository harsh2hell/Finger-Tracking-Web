const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  platform: process.platform,
  triggerAction: (action, data) => {
    ipcRenderer.send("gesture-action", { action, ...data });
  },
});
