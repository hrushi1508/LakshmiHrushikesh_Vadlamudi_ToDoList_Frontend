# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


#  ToDo List Frontend (Vite + React)

This is the **frontend** of the ToDo List web application built with **React.js** and **Vite**, designed for seamless interaction with a Node.js + Express backend. The app supports user registration, login, and full CRUD operations for tasks.

---

##  Project Structure
```bash

client/
├── public/ # Static assets
├── src/
│ ├── assets/ # Images or static media (if used)
│ ├── components/ # Reusable UI components
│ │ ├── components.css # Styles for components
│ │ ├── landing.css # Styles for Landing.jsx
│ │ ├── Landing.jsx # Landing/Home page
│ │ ├── login.jsx # Login page
│ │ ├── register.jsx # Register page
│ │ ├── taskcard.jsx # UI for a single task
│ │ └── tasklist.jsx # Task list display
│ ├── App.css # Global styles
│ ├── App.jsx # Main App layout and routes
│ └── main.jsx # App entry point
├── .env # Environment variables
├── .gitignore
├── eslint.config.js # ESLint config
├── index.html # HTML template
├── package.json
├── package-lock.json
├── README.md # You're reading this 🙂
├── vercel.json # Deployment config
└── vite.config.js # Vite config
```
yaml
Copy
Edit

---

##  Features
```bash
-  React + Vite for lightning-fast builds
-  JWT-based Authentication (Login/Register)
-  CRUD Operations for tasks
-  Component-based design
-  CSS Modules and custom styles
-  Backend API Integration
-  Deployable via Vercel or Netlify
```
---

##  Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/todo-frontend.git
```
cd client
2. Install Dependencies
bash
Copy
Edit
```bash
npm install
```
3. Configure .env
Create a .env file in the root directory:

bash
Copy
Edit
```bash
VITE_API_BASE_URL=http://localhost:5000/api
```
Change the URL based on your backend deployment (e.g., Vercel/Render/Netlify functions).

Running the App (Dev Mode)
bash
Copy
Edit
```bash
npm run dev
```
Open http://localhost:5173 in your browser.

Components Summary
Component	Description
```bash
Landing.jsx	Welcome / landing screen
login.jsx	User login page
register.jsx	User registration page
taskcard.jsx	Individual task component (UI)
tasklist.jsx	List of all tasks
App.jsx	Main routes and layout
main.jsx	App entry point with root render
```

API Integration
API calls use Axios or Fetch with base URL from .env. Example usage:

js
Copy
Edit
```bash
const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/tasks`, {
  headers: {
    Authorization: `Bearer ${token}`,
  }
});
```
Build for Production
bash
Copy
Edit
```bash
npm run build
```
The build output will be in the dist/ folder.

Scripts
Command	Description
```bash
npm run dev
```
Start local dev server
```bash
npm run build
```
Build app for production
```bash
npm run
```
preview	Preview production build

🙌 Acknowledgements
React
Vite
Vercel
