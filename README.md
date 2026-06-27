<div align="center">
  <h1>TrackOS</h1>
  <p><b>Real-time desktop hand tracking and gesture automation controller</b></p>
  <p>
    <a href="https://github.com/harsh2hell/Finger-Tracking-Web/licenses"><img src="https://img.shields.io/github/license/harsh2hell/Finger-Tracking-Web?style=flat-square&color=58a6ff" alt="License" /></a>
    <a href="https://github.com/harsh2hell/Finger-Tracking-Web/releases"><img src="https://img.shields.io/github/v/release/harsh2hell/Finger-Tracking-Web?style=flat-square&color=2ea043" alt="Latest Version" /></a>
    <img src="https://img.shields.io/badge/Platform-macOS%20%7C%20Windows-8b949e?style=flat-square" alt="Platforms" />
  </p>
</div>

---

### Update: Rebranded to TrackOS (v2.0)

This repository has been upgraded from **Finger Tracking Web** to **TrackOS v2.0 Desktop**. The application is now containerized inside an Electron runtime wrapper, allowing you to control your local system's volume and key navigation through high-precision, on-device gesture tracking.

Key improvements in version 2.0:
* **Native Desktop Integration**: Migrated from a web-only codebase to a native Electron wrapper shell.
* **On-Device Gesture Controls**: Hand configurations trigger physical system actions (like Arrow Key presses and Audio Volume ticks) using secure background scripting.
* **Dual Hand Telemetry**: Track up to two hands concurrently with dynamic wrist tracking statistics.
* **Visual HUD Overlays**: Custom Canvas-rendered skeletal structures, joint coordinate nodes, and active fingertip targeting rings.
* **Installer Compilation Config**: Pre-configured build systems to package distributions into installable targets (.dmg and .exe).

---

## Core Features

* **Privacy-First Inference**: Runs Google MediaPipe Hands classification locally on your GPU/CPU. Webcam feeds are processed fully in the application layer and never sent to cloud servers.
* **Configurable Action Mappings**: Choose which system actions trigger when specific gestures (Victory Sign, Index Finger, Thumbs Up/Down, Fist, and Rock On) are detected.
* **Telemetry Diagnostics Panel**: Live feed monitors for current classification output, active tracking frames-per-second, tracked fingers count, and system logs.
* **Control Safeguards**: Cooldown restrictions (800ms for navigation, 250ms for volume adjustments) to prevent unintended key-trigger looping.
* **Setup Installer Pipelines**: Build settings are prepared to package app files directly into installer environments.

---

## System Architecture

```
TrackOS/
├── main.js                 # Electron main script & OS command executor processes
├── preload.js              # Secure IPC bridge exposing platform and command interfaces
├── index.html              # Master application dashboard structure and GUI
├── css/
│   └── style.css           # Application design styling (Primer inspired dark mode)
├── js/
│   ├── app.js              # State synchronizer, user configurations, and UI listeners
│   ├── tracking.js         # MediaPipe processor, canvas graphics, and wrist HUD overlays
│   ├── gestures.js         # Math-based gesture classification logic (knuckle positions)
│   └── actions.js          # Cooldown managers and command execution requests
├── package.json            # Build descriptors, dependencies, and builder configuration
└── README.md               # Quickstart description page
```

---

## Tech Stack

* **Shell UI**: HTML5 / Vanilla CSS3 (Custom styling) / JavaScript (ES6 Modules)
* **Application Shell**: Electron container
* **AI Computer Vision**: Google MediaPipe Hands API
* **OS Bridge scripting**: macOS AppleScript (`osascript`) / Windows PowerShell COM Shell objects

---

## Development Setup

TrackOS requires Node.js to be installed on your workstation.

### 1. Install Dependencies
Clone this repository locally, navigate to the folder, and run:
```bash
npm install
```

### 2. Run in Developer Mode
Launch the application shell with active inspector consoles:
```bash
npm start
```

---

## Compilation & Packaging

Convert raw source code folders into single installer wizards for end-users.

### Package for macOS (DMG Installer)
Creates a distribution folder with a `.dmg` mounting volume setup inside `dist/`:
```bash
npm run build:mac
```

### Package for Windows (NSIS EXE Installer)
Compiles a setup wizard installer executable under `dist/`:
```bash
npm run build:win
```

### Package for All Targets
```bash
npm run build:all
```

---

## Credits & License

* **Author & Maintainer**: harsh2hell (GitHub: [@harsh2hell](https://github.com/harsh2hell))
* **Core Libraries**: MediaPipe Hands by Google, Electron by OpenJS Foundation.
* **License**: GPL-3.0 License. Free for learning, modification, and distribution.
