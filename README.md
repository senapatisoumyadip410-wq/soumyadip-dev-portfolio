# Soumyadip Senapati — Developer Portfolio (MERN)

A dark-premium, responsive developer portfolio built with React + Vite, Express, Node.js and MongoDB.

## Features
- Responsive dark-premium UI
- Hero, About, Skills, Projects, Education and Contact sections
- Project cards with technology tags and live/GitHub links
- Project filtering by category
- Contact form with client/server validation
- Express REST API and MongoDB message storage
- Rate limiting, Helmet security headers and CORS configuration
- Demo mode: frontend still works if the API/MongoDB is not configured

## 1. Install prerequisites
- Node.js LTS: https://nodejs.org/
- VS Code: https://code.visualstudio.com/
- Git: https://git-scm.com/

Check installation in VS Code Terminal:
```bash
node -v
npm -v
```

## 2. Open the project
1. Extract the ZIP.
2. In VS Code choose **File → Open Folder**.
3. Select the `soumyadip-dev-portfolio` folder.

## 3. Start the frontend
Open a terminal in the project root:
```bash
cd client
npm install
npm run dev
```
Open the local URL printed by Vite (usually http://localhost:5173).

## 4. Start the backend
Open a **second terminal**:
```bash
cd server
npm install
```
Copy `server/.env.example` to `server/.env`, then edit it:
```env
PORT=5000
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/portfolio?retryWrites=true&w=majority
CLIENT_URL=http://localhost:5173
```
Run:
```bash
npm run dev
```
API health check: http://localhost:5000/api/health

### MongoDB Atlas setup
1. Create a free cluster at https://www.mongodb.com/atlas.
2. Create a database user and password.
3. In Network Access, allow your development IP address.
4. Copy the Node.js connection string and replace username, password and cluster details in `.env`.
5. Never commit `.env` or share your database password.

Without MongoDB configured, the site still runs. The contact form will show a helpful API connection message.

## 5. Personalize before publishing
Edit:
- `client/src/data.js` — bio, email, skills, projects and education
- `client/index.html` — page title and description
- `client/public/` — add your real `resume.pdf` and profile image if desired

Replace placeholder GitHub/LinkedIn URLs and project links with your real links. Do not claim internships, achievements or skills you have not earned.

## 6. Build and test
Frontend:
```bash
cd client
npm run build
```
Backend:
```bash
cd server
npm start
```

## 7. GitHub and deployment
- Push source code to a GitHub repository.
- Deploy the frontend to Vercel or Netlify.
- Deploy the backend to Render or another Node hosting provider.
- Create a production MongoDB Atlas database.
- Set backend environment variables on the hosting platform: `MONGODB_URI`, `CLIENT_URL`, `PORT`.
- Set frontend variable `VITE_API_URL` to your deployed backend URL plus `/api` (example: `https://your-api.onrender.com/api`).
- Redeploy frontend after setting environment variables.

## Folder structure
```text
soumyadip-dev-portfolio/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── data.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   ├── index.html
│   └── package.json
├── server/
│   ├── src/
│   │   ├── models/Message.js
│   │   ├── routes/contact.js
│   │   └── server.js
│   ├── .env.example
│   └── package.json
└── README.md
```
