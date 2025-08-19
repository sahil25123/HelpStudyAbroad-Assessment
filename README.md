# 📘 Help Study Abroad – MERN Full Stack Internship Assignment

## 📌 Overview
This project is built as part of the **MERN Full Stack Developer Internship Assignment** for **Help Study Abroad**.  
It demonstrates backend and frontend integration using the MERN stack, with features like authentication, CSV uploads, course management, AI-powered recommendations, and caching.

---

## 🛠️ Tech Stack
- **Frontend:** React + TypeScript + Tailwind + Shadcn/UI  
- **Backend:** Node.js, Express.js, MongoDB, Mongoose  
- **Authentication:** JWT, bcrypt  
- **File Upload & Parsing:** Multer, csv-parser  
- **Caching:** Redis  
- **AI Integration:** Google Generative AI (Gemini API, mock/fallback supported)  
- **DevOps (Partially Implemented):** Docker, CI/CD (planned with GitHub Actions)  

---

## 🚀 Features Implemented

### ✅ Backend
- **Admin Authentication**
  - Signup, Login with JWT authentication
  - Passwords securely hashed with bcrypt
  - Protected routes for admin access

- **Course Management**
  - Upload CSV of courses → stored in MongoDB
  - Advanced search by title with **Redis caching**
  - Mock CSV file supported with required schema

- **Gemini AI Course Recommendations**
  - API endpoint to get recommendations based on topic & skill level
  - Supports real Gemini API (via `@google/generative-ai`) with fallback mock data

---

### ✅ Frontend
- **Admin Login**
  - Connected to backend login API
  - JWT token stored in localStorage
  - Redirect to dashboard on success

- **Admin Dashboard**
  - Upload CSV files for Universities & Courses
  - Download CSV templates with required headers
  - Shows list of uploaded courses in real-time after upload
  - Toast notifications for success/failure

---

### ⚠️ Pending / Incomplete Tasks
- **Frontend**
  - Course search functionality (by title/category) to be added in dashboard
  - University data upload integration with backend
  - Display AI-powered course recommendations in frontend  

- **DevOps**
  - GitHub Actions pipeline partially drafted, not fully implemented
  - Dockerfile for backend is ready but not tested with frontend in containerized environment
  - Deployment steps on Linux (Nginx + PM2) documented but not executed
  - Kafka usage is documented conceptually but not integrated

---

## ⚡ Project Structure
```
mern-assessment/
├── backend/
│   ├── models/        # MongoDB models (Admin, Course, University)
│   ├── routes/        # Express routes
│   ├── controllers/   # Controllers for business logic
│   ├── config/        # Redis, DB config
│   ├── server.js      # Entry point
│   ├── Dockerfile     # Backend dockerization
│   └── .env           # Environment variables
├── frontend/          # Provided React project (integrated with APIs)
│   ├── components/    # UI components
│   ├── pages/         # Login, Dashboard, etc.
│   └── ...
└── README.md
```

---

## ⚙️ Setup & Run Locally

### 🔹 Backend
```bash
cd backend
npm install
cp .env.example .env   # set MONGO_URI, JWT_SECRET, REDIS_URL, GEMINI_API_KEY
npm start
```
Runs at: `http://localhost:5000`

---

### 🔹 Frontend
```bash
cd frontend
npm install
npm run dev
```
Runs at: `http://localhost:3000`

---

## 🐳 Docker (Backend)
```bash
docker build -t mern-assessment .
docker run -p 5000:5000 mern-assessment
```

---

## 📌 Notes
- The backend is **functional** (auth, CSV upload, search with cache, Gemini API integration).  
- The frontend is **partially implemented** (login, CSV upload, course listing).  
- DevOps is **partially documented/implemented** (Docker + CI/CD draft + hosting guide).  

---

## ✨ Next Steps
- Implement frontend course search with `/api/courses/search?title=`  
- Integrate Gemini AI recommendations on frontend UI  
- Add university upload endpoint in backend  
- Finalize GitHub Actions CI/CD pipeline  
- Test and deploy on Linux server with Docker + PM2 + Nginx  

---

📩 **Author:** Jagrat Gupta  
🎯 Assignment: MERN Full Stack Developer Internship – Help Study Abroad  
