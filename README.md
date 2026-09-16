Community Connect

[![GitHub Pages](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue)](https://mmetja-lethabo-kekana.github.io/community_connect_frontend/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

**About:**
Community Connect is a community-driven platform that empowers residents to report local issues, track progress with unique reference numbers, discover community events, volunteer, and support local businesses, all without creating an account or sharing personal data.

**Live Demo:** [https://mmetja-lethabo-kekana.github.io/community_connect_frontend/](https://mmetja-lethabo-kekana.github.io/community_connect_frontend/)


## Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Key Features Explained](#-key-features-explained)
- [Design Thinking Process](#-design-thinking-process)
- [Future Enhancements](#-future-enhancements)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## Features

### Dashboard & Map
- **Interactive Map** - View all reported issues with color-coded markers (🔴 Submitted, 🟡 In Progress, 🟢 Resolved)
- **Location-Based** - Map centers on user's location using geolocation
- **Map/List Toggle** - Switch between visual map view or detailed list view
- **Welcome Banner** - Personalized greeting with user's name and location
- **Urgent Report Button** - Quick access to urgent issue reporting

### Issue Reporting
- **Simple Form** - Category → Location → Description → Photo (Optional)
- **Reference Number** - Auto-generated unique tracking number (e.g., CVP-2026-570)
- **Real-time Feedback** - Instant confirmation with reference number
- **Urgent Reports** - Dedicated urgent reporting with URG- prefix and 911 warning

### Issue Tracking
- **Reference Number Search** - Track any report by its unique reference number
- **Full Details** - View title, location, category, status, and description
- **Status Timeline** - See progress from Submitted → In Progress → Resolved
- **Visual Status Badges** - Color-coded for quick recognition

### Community Events
- **Event Discovery** - Browse and filter events by category (Cleanup, Workshop, Fundraiser, etc.)
- **Volunteer Sign-up** - One-click volunteering with confirmation popup
- **Post Events** - Community members can create and share their own events
- **Volunteer Tracking** - See signed vs. needed volunteer counts

### Business Directory
- **Discover Local Businesses** - Browse businesses by category
- **Search & Filter** - Find businesses by name, category, or description
- **Business Profiles** - View details including rating, reviews, contact info
- **Add Your Business** - Community members can list their businesses
- **Rating System** - Star ratings with review counts

### Privacy First
- **No Passwords** - Simple name-only login
- **No Data Collection** - No personal information stored
- **Privacy Notice** - Users are informed location is used only for map display

---

## Tech Stack

**Frontend** - React 18, Vite |
**Mapping** - Leaflet, React-Leaflet |
**Styling** - CSS3, Flexbox, Grid |
**Data Persistence** - localStorage (prototype) |

**Version Control** | Git, GitHub 
**Deployment** | GitHub Pages, GitHub Actions 
**Icons** | Lucide React 
**Geocoding** | OpenStreetMap Nominatim 

---

## Getting Started

### Prerequisites

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (for cloning)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/mmetja-lethabo-kekana/community_connect_frontend.git
cd community_connect_frontend
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open your browser** and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Deploying to GitHub Pages

```bash
# Build the project
npm run build

# Deploy (if using GitHub Actions, it deploys automatically on push)
git add .
git commit -m "Update app"
git push
```

---

## Project Structure

```
community_connect_frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── events/
│   │   │   └── EventCard.jsx
│   │   ├── reports/
│   │   │   └── ReportCard.jsx
│   │   └── UrgentReportModal.jsx
│   ├── data/
│   │   ├── mockData.js
│   │   └── mockBusinesses.js
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Reports.jsx
│   │   ├── NewReport.jsx
│   │   ├── TrackIssue.jsx
│   │   ├── Events.jsx
│   │   ├── PostEvent.jsx
│   │   ├── AddBusiness.jsx
│   │   ├── FindBusinesses.jsx
│   │   └── Login.jsx
│   ├── utils/
│   │   ├── reportStorage.js
│   │   ├── businessStorage.js
│   │   └── referenceGenerator.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Key Features Explained

### Reference Number System
- **Format:** `CVP-YYYY-XXX` (Standard) or `URG-YYYY-XXX` (Urgent)
- **Purpose:** Provides accountability and transparency
- **Usage:** Track reports, check status, follow up

### Map Integration
- **Marker Colors:** Red (Submitted), Yellow (In Progress), Green (Resolved)
- **Location:** Centers on user's location via geolocation
- **Popup:** Click markers to view issue details
- **Legend:** Explains color coding

### Data Persistence
- **localStorage:** All reports, events, and businesses are stored in the browser
- **Mock Data:** Pre-populated with sample data for testing
- **No Database:** Designed for prototyping and testing purposes

---

## Design Thinking Process

### Empathize
- Understanding user needs: community members want to report issues easily and track progress
- Users value transparency and accountability

### Define
- Problem: Residents don't know who to report issues to and can't track their reports
- Solution: A simple, transparent platform with reference numbers

### Ideate
- Brainstormed features: reporting, tracking, events, businesses
- Focused on simplicity and user value

### Prototype
- Built using React with mock data
- Tested core assumptions

### Test
- User feedback on usability and features
- Iterative improvements based on testing

---

## Screenshots

### Login Page
*Simple name-only entry with privacy notice*

### Dashboard
*Welcome banner, urgent report button, and interactive map*

### Report Form
*Category → Location → Description → Photo flow*

### Reference Number
*Success message with tracking number*

### Track Issue
*Search and view full details with timeline*

### Events
*Browse, filter, and volunteer for community events*

### Business Directory
*Discover and support local businesses*

---

## Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch:** `git checkout -b feature/YourFeature`
3. **Commit your changes:** `git commit -m 'Add YourFeature'`
4. **Push to the branch:** `git push origin feature/YourFeature`
5. **Open a Pull Request**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact & Support

**Project Maintainer:** Mmetja Lethabo Kekana

**Live Demo:** [https://mmetja-lethabo-kekana.github.io/community_connect_frontend/](https://mmetja-lethabo-kekana.github.io/community_connect_frontend/)

---

## Acknowledgments
- Tshepiso Teshane, Kganya Lekgotle and Tumelo Mufeba
- **OpenStreetMap** for mapping services
- **Leaflet** for the mapping library
- **React** for the frontend framework
- **Vite** for the build tool

---