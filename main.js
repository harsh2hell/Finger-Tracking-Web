const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { exec } = require("child_process");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    title: "Finger Tracking Desktop v2.0",
    icon: path.join(__dirname, "icon.png"), // Optional
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  mainWindow.loadFile("index.html");

  // Open developer tools in development mode if desired:
  // mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// IPC Handler for OS Actions
ipcMain.on("gesture-action", (event, data) => {
  const { action, key } = data;
  const isMac = process.platform === "darwin";

  console.log(`Executing action: ${action} (key: ${key}) on platform: ${process.platform}`);

  if (action === "press-key") {
    if (isMac) {
      // macOS: arrow keys using osascript key codes
      // 124 is Right Arrow, 123 is Left Arrow
      const keyCode = key === "right" ? 124 : 123;
      const script = `osascript -e 'tell application "System Events" to key code ${keyCode}'`;
      exec(script, (err) => {
        if (err) console.error("Error executing keypress (macOS):", err);
      });
    } else {
      // Windows: arrow keys using PowerShell
      const psKey = key === "right" ? "{RIGHT}" : "{LEFT}";
      const script = `powershell -Command "$wobj = New-Object -ComObject Wscript.Shell; $wobj.SendKeys('${psKey}')"`;
      exec(script, (err) => {
        if (err) console.error("Error executing keypress (Windows):", err);
      });
    }
  } else if (action === "volume") {
    if (isMac) {
      if (key === "up") {
        exec("osascript -e 'set volume output volume (output volume of (get volume settings) + 6)'");
      } else if (key === "down") {
        exec("osascript -e 'set volume output volume (output volume of (get volume settings) - 6)'");
      } else if (key === "mute") {
        exec("osascript -e 'set volume output volume 0'");
      }
    } else {
      // Windows volume adjustments
      let vkCode = 173; // Mute
      if (key === "up") vkCode = 175;
      if (key === "down") vkCode = 174;
      const script = `powershell -Command "$wobj = New-Object -ComObject Wscript.Shell; $wobj.SendKeys([char]${vkCode})"`;
      exec(script, (err) => {
        if (err) console.error("Error executing volume adjustment (Windows):", err);
      });
    }
  }
});
