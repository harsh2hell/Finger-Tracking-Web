# Finger Tracking Web

Finger Tracking Web is a real-time **hand and finger tracking web application** built  by harsh2hell using **MediaPipe Hands** and modern JavaScript.  
It runs completely in the browser and uses your webcam to detect fingers and basic hand gestures — no cloudAI backend required.

This project is still in development, secured by General Public License v3.0. Contributions and feedback are welcome on github.

---

##  Latest Version
**v1.5 - Updation of UI & UX **

---

## Features

- Real-time webcam-based hand tracking  
- Finger counting (index, middle, ring, pinky)  
- Basic gesture recognition  
  - Fist  
  - Index Finger  
  - Open Palm  
  - 
- Menu-based UI (camera opens only after user selection)  
- Runs fully in the browser (no backend, no uploads)  
- Modular file structure (easy to extend)

---

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)
- MediaPipe Hands
- Web Camera API

---

## Project Structure

Finger-Tracking-Web/
│
├── index.html # Landing / menu page
├── finger.html # Finger tracking feature
├── gesture.html # Gesture recognition feature
│
├── css/
│ └── style.css # Global styles & UI
│
├── js/
│ ├── finger.js # Finger counting logic
│ └── gesture.js # Gesture detection logic
│
└── README.md


---

## ▶️ How to Run the Project

⚠️ **Important:**  
Camera-based web apps **must be run using a local server**.  
Opening HTML files directly (`file://`) will NOT work.

### Option 1: VS Code Live Server (Recommended)

1. Open the project folder in **VS Code**
2. Install the extension **Live Server** 
3. Right-click `index.html`
4. Click **Open with Live Server**

The project will open at:
```
http://127.0.0.1:5500/index.html
```

---

### Alternate Option 2: Using Python

If Python is installed:

```bash
cd Finger-Tracking-Web
python -m http.server 8000
```

Then open in browser:
```
http://127.0.0.1:5500/index.html
```

## Features

- The project currently ignores thumb detection for stability
- Finger counting is based on vertical finger position
- Gesture recognition is rule-based (not ML-trained gestures)
- Works best on desktop browsers (Chrome / Edge)

## Credits

Built and maintained by harsh2hell
GitHub: @harsh2hell 
Repository: [https://github.com/harsh2hell/Finger-Tracking-Web]()
Powered by MediaPipe Hands by Google.

## License

This project is made under General Public Licence and free to use for learning and experimentation.
Feel free to fork, modify, and build upon it.

## Future Improvements (v2.0)

Face detection (Age, Gender)
Multi-hand tracking
Gesture-based actions (keyboard / volume / slides)

**Full Changelog**: https://github.com/harsh2hell/Finger-Tracking-Web/compare/V1...V1.5
