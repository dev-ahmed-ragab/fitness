# Fitness Club — Modern Exercise & Workout Application

[![Live Demo](https://img.shields.io/badge/demo-online-brightgreen.svg?style=for-the-badge&logo=vercel)](https://fitness-zeta-mauve.vercel.app)
[![React](https://img.shields.io/badge/React-18.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Material UI](https://img.shields.io/badge/Material--UI-v5-007FFF?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)
[![RapidAPI](https://img.shields.io/badge/RapidAPI-ExerciseDB-0055FF?style=for-the-badge&logo=rapidapi&logoColor=white)](https://rapidapi.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A responsive, feature-packed Fitness & Workout Web Application built with **React 18**, **Material UI 5**, and powered by **RapidAPI** ([ExerciseDB](https://rapidapi.com/justin-WFlarvgFilter/api/exercisedb) and [YouTube Search & Download API](https://rapidapi.com/h0beg909/api/youtube-search-and-download)). 

The application enables fitness enthusiasts to explore over 1,000+ exercises with detailed execution instructions, filter by target muscle groups and gym equipment, calculate Body Mass Index (BMI), watch embedded YouTube video tutorials, and browse similar recommended workouts.

🔗 **Live Demo:** [https://fitness-zeta-mauve.vercel.app](https://fitness-zeta-mauve.vercel.app)

---

## ✨ Features

- **🏋️ 1,000+ Exercise Library:** Comprehensive catalog of workouts complete with animated demonstration GIFs, target muscles, and required equipment.
- **🎯 Muscle & Equipment Filtering:** Categorized horizontal scrolling menu to quickly filter exercises by body parts (Back, Cardio, Chest, Lower Arms, Lower Legs, Neck, Shoulders, Upper Arms, Upper Legs, Waist).
- **🔍 Instant Search Engine:** Fast search query matching exercise names, body parts, target muscles, or specific equipment.
- **⚖️ Interactive BMI Calculator:** Built-in tool to compute Body Mass Index with immediate metric categorization (Underweight, Healthy, Overweight, Obese) and fitness advice.
- **🎬 Integrated Video Tutorials:** Automatically fetches context-aware YouTube workout and form-correction videos for each exercise.
- **🔄 Similar Workout Recommendations:** Intelligent suggestions for related exercises targeting the same muscle group or utilizing the same equipment.
- **📄 Responsive Pagination:** Client-side pagination allowing smooth navigation across hundreds of exercise cards.
- **📱 Fully Responsive Design:** Clean layout built on Material UI Flexbox and Grid systems, optimized for mobile phones (320px+), tablets, and desktop displays.

---

## 🛠️ Tech Stack

| Domain | Technology / Library | Description |
| :--- | :--- | :--- |
| **Frontend Framework** | [React 18](https://reactjs.org/) | Core UI component architecture |
| **UI Components & Icons** | [Material UI (MUI v5)](https://mui.com/) | Material Design components & styling system |
| **Routing** | [React Router v6](https://reactrouter.com/) | Client-side routing with clean URL parameters (`/exercise/:id`) |
| **API Integration** | RapidAPI (ExerciseDB & YouTube API) | Real-time exercise databases and YouTube search integration |
| **Carousels & Scrolling** | `react-horizontal-scrolling-menu` | Smooth category exploration |
| **Deployment** | [Vercel](https://vercel.com/) | Continuous integration & cloud hosting |

---

## 📁 Project Structure

```plaintext
fitness/
├── public/                 # HTML templates, SEO meta & custom gym favicons
├── src/
│   ├── assets/             # Icons & background imagery
│   │   ├── icons/          # Gym, body-part, target icons
│   │   └── images/         # Hero banners and branding
│   ├── components/
│   │   ├── BmiCalculator.js       # Interactive BMI calculator & training pillars
│   │   ├── BodyPart.js            # Body part category chip card
│   │   ├── Detail.js              # Detailed exercise overview & muscle badges
│   │   ├── ExerciseCard.js        # Compact exercise preview card
│   │   ├── Exercises.js           # Paginated grid displaying active exercises
│   │   ├── ExerciseVideos.js      # Embedded YouTube demonstration videos
│   │   ├── Footer.js              # Application footer
│   │   ├── HeroBanner.js          # Engaging hero section with call-to-action
│   │   ├── HorizontalScrollbar.js # Interactive horizontal scroll menu
│   │   ├── Loader.js              # Loading spinner component
│   │   ├── Navbar.js              # Header navigation bar with smooth anchors
│   │   ├── SearchExercises.js     # Responsive search bar & category chips
│   │   └── SimilarExercises.js    # Target muscle & equipment recommendations
│   ├── pages/
│   │   ├── ExerciseDetail.js      # Complete single exercise watch/guide page
│   │   └── Home.js                # Main landing page
│   ├── utils/
│   │   └── fetchData.js           # Fetch API utility with RapidAPI headers
│   ├── App.css                    # Responsive styling & elevation transitions
│   ├── App.js                     # Root layout & route definitions
│   └── index.js                   # BrowserRouter & React DOM entry
├── .env.example            # Environment variables template
├── .gitignore              # Ignored files (secures .env and build output)
├── package.json            # Project dependencies and scripts
├── vercel.json             # Vercel SPA routing rewrite rules
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

Follow these steps to run the project locally or deploy it to production.

### Prerequisites

- [Node.js](https://nodejs.org/) (`v16.0` or higher)
- `npm` or `yarn`
- A [RapidAPI](https://rapidapi.com/) account with access to:
  1. [ExerciseDB API](https://rapidapi.com/justin-WFlarvgFilter/api/exercisedb)
  2. [YouTube Search and Download API](https://rapidapi.com/h0beg909/api/youtube-search-and-download)

### 1. Clone the Repository

```bash
git clone https://github.com/dev-ahmed-ragab/fitness.git
cd fitness
```

### 2. Configure Environment Variables

Create a local `.env` file from `.env.example`:

```bash
# On Linux / macOS
cp .env.example .env

# On Windows PowerShell
copy .env.example .env
```

Open `.env` and insert your RapidAPI key:

```env
REACT_APP_RAPID_API_KEY=your_actual_rapid_api_key_here
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

### 5. Build for Production

```bash
npm run build
```

---

## ☁️ Deploying to Vercel

When deploying to **Vercel**, ensure you configure the environment variable in the Vercel dashboard:

1. Import your `fitness` repository into Vercel.
2. In the **Configure Project** step, expand **Environment Variables**:
   - **Key:** `REACT_APP_RAPID_API_KEY`
   - **Value:** `your_actual_rapid_api_key_here`
3. Click **Deploy**. The `vercel.json` included in the root handles client-side routing rewrites automatically.

---

## 👨‍💻 Author

**Ahmed Ragab**
- GitHub: [@dev-ahmed-ragab](https://github.com/dev-ahmed-ragab)
- Live Project: [Fitness Club on Vercel](https://fitness-zeta-mauve.vercel.app)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
