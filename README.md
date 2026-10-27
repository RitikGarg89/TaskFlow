# TaskFlow — Modern MERN Stack Task Management System

TaskFlow is a full-stack task management application built using the **MERN** stack (MongoDB, Express.js, React, Node.js), powered by **Redux Toolkit**, **React Router v7**, **Tailwind CSS v4**, and secured with **JWT & HTTP-Only cookies**.

---

## 🚀 Features

- **Authentication & Security**:
  - Secure registration and login with bcrypt password hashing (10 salt rounds).
  - Protected API routes via JWT stored in HTTP-Only cookies with Bearer header fallback.
  - Automatic session verification via `/api/auth/me`.
  - Passwords are never returned in API responses or stored in plaintext.
  - User-scoped access control: users can strictly view, update, and delete only their own tasks.

- **Task Management (Full CRUD)**:
  - Create tasks with title, description, priority (`low`, `medium`, `high`), status (`pending`, `in-progress`, `completed`), and due dates.
  - Interactive dashboard showing real-time metrics (Total, Completed, In-Progress, Pending).
  - Search tasks by title and filter by priority and status.
  - View individual task details with created/updated dates.
  - Update task details or toggle status with immediate visual feedback.
  - Delete tasks with immediate state updates and database persistence.
  - Automatic `completedAt` timestamp recording when a task status transitions to `completed`.

- **State Management**:
  - Redux Toolkit with asynchronous thunks (`createAsyncThunk`) communicating directly with the backend.
  - Centralized store managing authentication and tasks.

- **Profile Dashboard**:
  - Live task overview statistics dynamically calculated from MongoDB data.
  - User details reflecting account creation timestamp.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 19, Redux Toolkit, React Router v7, Tailwind CSS v4, Lucide Icons, Vite |
| **Backend** | Node.js (ES Modules), Express.js 5, MongoDB, Mongoose 9 |
| **Authentication** | JSON Web Tokens (`jsonwebtoken`), `bcryptjs`, `cookie-parser` |
| **Testing** | Automated integration tests against real MongoDB cluster |

---

## 📁 Project Structure

```
TaskFlow/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── constants.js          # Database constants (DB_NAME: "TaskFlow")
│   │   ├── controllers/
│   │   │   ├── authController.js # Register, login, getMe, logout
│   │   │   └── taskController.js # Complete CRUD for user tasks
│   │   ├── db/
│   │   │   └── index.js          # Mongoose connection handler
│   │   ├── middleware/
│   │   │   ├── authMiddleware.js  # JWT cookie & Bearer token verification
│   │   │   └── errorMiddleware.js # Centralized error & 404 handler
│   │   ├── models/
│   │   │   ├── Task.js           # Task Mongoose schema & methods
│   │   │   └── User.js           # User Mongoose schema & bcrypt hooks
│   │   ├── routes/
│   │   │   ├── authRoutes.js     # /api/auth routes
│   │   │   └── taskRoutes.js     # /api/tasks routes
│   │   ├── utils/
│   │   │   └── jwt.js            # JWT generator and cookie dispatcher
│   │   ├── app.js                # Express app configuration & middlewares
│   │   └── index.js              # Server entry point
│   ├── .env                      # Environment variables (git-ignored)
│   ├── .env.example              # Placeholder environment template
│   ├── package.json
│   └── test_integration.js       # 13 automated integration tests
│
├── frontend/
│   ├── src/
│   │   ├── App/
│   │   │   └── Store.js          # Redux Toolkit store
│   │   ├── Components/           # Task forms, cards, navbar, profile
│   │   ├── Features/
│   │   │   ├── AuthSlice.js      # Auth state slice
│   │   │   └── TaskSlice.js      # Task state slice + Async Thunks
│   │   ├── Pages/                # Home, Login, Register, TaskBoard, Profile
│   │   ├── Utils/
│   │   │   └── api.js            # Unified Fetch client with credentials
│   │   ├── App.jsx               # Routing & Auth verification
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher recommended)
- MongoDB Atlas cluster or local MongoDB instance

### 1. Backend Setup
1. Open a terminal and navigate to `backend/`:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables in `backend/.env` (see `backend/.env.example`):
   ```env
   PORT=8000
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net
   JWT_SECRET=your_jwt_secret_key_here
   JWT_EXPIRES_IN=7d
   CORS_ORIGIN=http://localhost:5173,http://127.0.0.1:5173
   NODE_ENV=development
   ```
4. Run automated backend integration tests:
   ```bash
   npm test
   ```
5. Start the backend server:
   ```bash
   npm run dev
   # or
   npm start
   ```
   The backend will start at `http://localhost:8000`.

### 2. Frontend Setup
1. In another terminal, navigate to `frontend/`:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   The frontend will start at `http://localhost:5173`.

---

## 📡 API Reference

### Health Check
- `GET /api/health` — Checks server health and uptime.

### Authentication (`/api/auth`)
- `POST /api/auth/register` — Create a new account (`name`, `email`, `password`).
- `POST /api/auth/login` — Log into an existing account (`email`, `password`).
- `GET /api/auth/me` — Retrieve the currently logged-in user profile (Requires Auth).
- `POST /api/auth/logout` — Clear the authentication cookie (Requires Auth).

### Tasks (`/api/tasks`) *(All require authentication)*
- `GET /api/tasks` — Fetch all tasks for the logged-in user (sorted newest first).
- `POST /api/tasks` — Create a new task (`title`, `description`, `priority`, `status`, `dueDate`).
- `GET /api/tasks/:id` — Retrieve a single task by its MongoDB ID.
- `PATCH /api/tasks/:id` (or `PUT`) — Update a task's title, description, priority, or status.
- `DELETE /api/tasks/:id` — Delete a task belonging to the user.

---

## 🔒 Security & Data Integrity

1. **User Scoping**: Every task database query checks `{ userId: req.user._id }`. Users can never view, mutate, or delete tasks belonging to other accounts.
2. **Password Security**: Passwords are hashed using `bcryptjs` with 10 salt rounds before storage.
3. **Cookie & Header Security**: JWT authentication tokens are transmitted via `httpOnly`, `sameSite: lax` cookies, preventing XSS-based token theft, with an `Authorization: Bearer <token>` fallback in `sessionStorage` for flexible cross-origin testing.
4. **Input Validation**: Mongoose schema validations enforce email structure, minimum password lengths, and valid status/priority enumerations. Invalid MongoDB ObjectIds return HTTP 400 with a clean error message instead of crashing the server.
