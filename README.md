# Task Manager API

A scalable REST API with JWT Authentication and Role-Based Access Control, built with Node.js, Express, and MongoDB.

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (Mongoose)
- **Authentication:** JWT + bcryptjs
- **Frontend:** HTML, CSS, Vanilla JS

## Features
- User Registration & Login with password hashing
- JWT-based authentication
- Role-based access control (user vs admin)
- CRUD operations for Tasks
- Admin-only delete protection
- API versioning (/api/v1)
- Input validation & error handling

## Getting Started

### Prerequisites
- Node.js v20+
- MongoDB Atlas account

### Installation
```bash
git clone <your-repo-url>
cd backend-intern-project
npm install
```

### Environment Variables
Create a `.env` file:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Run the server
```bash
node server.js
```

## API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/v1/auth/register | Register a new user |
| POST | /api/v1/auth/login | Login and get token |

### Tasks (Protected)
| Method | Endpoint | Description | Role |
|--------|----------|-------------|------|
| POST | /api/v1/tasks | Create a task | User/Admin |
| GET | /api/v1/tasks | Get all tasks | User/Admin |
| PUT | /api/v1/tasks/:id | Update a task | User/Admin |
| DELETE | /api/v1/tasks/:id | Delete a task | Admin only |

## Scalability Notes
This project is structured for scalability:
- **Modular architecture** — controllers, routes, models and middleware are separated for easy addition of new modules
- **MongoDB Atlas** — cloud-hosted, horizontally scalable database
- **JWT stateless auth** — no server-side sessions, scales across multiple instances
- **API versioning** (/api/v1) — allows future versions without breaking existing clients
- **Future improvements:** Redis caching for frequent queries, Docker containerization, load balancing with Nginx, microservices split for auth and tasks

## Frontend
Open `frontend/index.html` in a browser. Make sure the backend server is running first.

## Author
Shreya Thapa