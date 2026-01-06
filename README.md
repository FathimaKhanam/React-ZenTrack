## 🌐 Live Demo

**Try the app:** [https://fathimakhanam.github.io/React-ZenTrack/]

> Click the link above to see the live application in action!

# 🌙 ZenTrack: Sleep & Focus Optimization Platform

A gamified productivity tracker that helps users monitor sleep patterns and focus sessions while making habit tracking fun and engaging.

## 📋 Project Description

ZenTrack is a client-side web application designed to help students, professionals, and freelancers optimize their sleep and focus patterns through:

- **Sleep Tracking:** Monitor bedtime, wake time, duration, and quality
- **Focus Session Logging:** Track work periods with productivity ratings
- **Gamification System:** Earn points, unlock badges, and level up
- **Smart Insights:** Data-driven recommendations with visual analytics
- **Environmental Tracking:** Identify factors affecting performance

### 🎯 Key Features

- User registration and authentication
- Sleep quality tracking with duration calculation
- Focus session monitoring with productivity metrics
- Points system and achievement badges
- Visual data analytics with charts
- Personalized productivity suggestions
- Fully responsive design
- Works offline (localStorage persistence)

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with gradients, animations, and glassmorphism
- **JavaScript (ES6+)** - Application logic and DOM manipulation

### Libraries
- **Chart.js** - Data visualization and analytics charts

### Storage
- **localStorage API** - Client-side data persistence

### Development Tools
- **VS Code** - Code editor
- **Live Server** - Local development server
- **Git** - Version control
- **GitHub** - Repository hosting

## 🚀 Steps to Run the Project

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- VS Code (recommended)
- Live Server extension for VS Code

### Installation & Setup

**Method 1: Using Live Server (Recommended)**

1. **Clone the repository**
```bash
   git clone https://github.com/FathimaKhanam/zentrack.git
   cd zentrack
```

2. **Open in VS Code**
```bash
   code .
```

3. **Install Live Server extension**
   - Open Extensions in VS Code (Ctrl+Shift+X)
   - Search for "Live Server" by Ritwick Dey
   - Click Install

4. **Run the application**
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - Application opens at `http://127.0.0.1:5500`

**Method 2: Using Python**
```bash
# Python 3
python -m http.server 8080

# Then open browser to: http://localhost:8080/index.html
```

**Method 3: Direct File Opening**

Simply double-click `index.html` to open in your default browser.

## 📱 How to Use

### Registration
1. Open the application
2. Click "Join the Fun Squad"
3. Enter email and password
4. Confirm password and submit

### Login
1. Enter your registered email
2. Enter password
3. Click "Beam Me In!"

### Track Sleep
1. Go to Dashboard
2. Select bedtime (date and time)
3. Select wake time (date and time)
4. Rate sleep quality (1-10)
5. Click "Log & Earn Points!"

### Track Focus Sessions
1. Enter start time
2. Enter end time
3. Rate productivity (1-10)
4. Add environmental factors (optional)
5. Click "Log & Level Up!"

### View Insights
1. Click "Unlock Insights & Badges"
2. View your sleep and focus trends
3. Check earned badges and points
4. Read personalized suggestions

## 🎮 Gamification System

### Points
- **Sleep:** Quality rating × 2 points (max 20 per log)
- **Focus:** Productivity rating × 3 points (max 30 per log)

### Levels
- 🥔 **Couch Potato** (0-49 points)
- ⭐ **Rising Star** (50-199 points)
- 💪 **Superhuman** (200+ points)

### Badges
- 🥷 **Sleep Ninja** - Achieve 8+ hours sleep with quality 8+
- 🧙 **Focus Wizard** - Complete 2+ hour session with productivity 9+

## 📊 Project Structure
```
ZenTrack/
├── index.html          # Login page
├── register.html       # Registration page
├── dashboard.html      # Main tracking interface
├── insights.html       # Analytics and visualizations
├── styles.css          # All styling
├── script.js           # Application logic
├── README.md           # This file
├── .gitignore          # Git ignore rules
└── screenshots/        # Application screenshots
```

## 🔐 Data Storage

All data is stored locally using browser's localStorage:
- User credentials (email/password)
- Sleep logs (bedtime, waketime, quality, duration)
- Focus logs (starttime, endtime, productivity, environment)
- Points and badges

**Note:** Data is device-specific and not synced across devices.

## 🎨 Design Features

- Dark gradient background for modern look
- Glassmorphism effects on cards
- Smooth animations and transitions
- Responsive design for all screen sizes
- Fun, engaging user interface

## 🔮 Future Enhancements

- Backend API with database
- User authentication with JWT
- Cloud data synchronization
- Mobile application
- Wearable device integration
- Advanced ML-based insights
- Social features (leaderboards, challenges)
- Export reports (PDF, CSV)

## 🐛 Known Limitations

- Client-side only (no backend)
- Passwords stored in plain text (demo purposes)
- Data tied to single browser
- No data backup or recovery

## 👨‍💻 Developer

**Fathima Khanam**
- Roll No: 2501050008
- Email: 2501050008@kluniversity.in
- Course: Front End Development

## 📄 License

This project is created for educational purposes.

## 🙏 Acknowledgments

- Chart.js for visualization library
- KL University
- Dr. Chaitanya

---

**Made with ❤️ for better productivity**
```