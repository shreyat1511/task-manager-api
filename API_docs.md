# API Documentation

## Base URL
http://localhost:5000/api/v1

## Auth Endpoints

### POST /auth/register
**Body:**
```json
{
  "name": "John",
  "email": "john@example.com",
  "password": "123456",
  "role": "user"
}
```
**Response:** 201 - Returns JWT token + user object

### POST /auth/login
**Body:**
```json
{
  "email": "john@example.com",
  "password": "123456"
}
```
**Response:** 200 - Returns JWT token + user object

## Task Endpoints (Require Authorization Header)
`Authorization: Bearer <token>`

### POST /tasks
**Body:**
```json
{
  "title": "My Task",
  "description": "Task description"
}
```
**Response:** 201 - Returns created task

### GET /tasks
**Response:** 200 - Returns array of user's tasks

### PUT /tasks/:id
**Body:**
```json
{
  "title": "Updated Title",
  "completed": true
}
```
**Response:** 200 - Returns updated task

### DELETE /tasks/:id
⚠️ Admin only
**Response:** 200 - `{ "msg": "Task deleted" }`

## Database Schema

### User
| Field | Type | Description |
|-------|------|-------------|
| name | String | Required |
| email | String | Required, Unique |
| password | String | Hashed with bcrypt |
| role | String | "user" or "admin" |

### Task
| Field | Type | Description |
|-------|------|-------------|
| title | String | Required |
| description | String | Optional |
| completed | Boolean | Default: false |
| user | ObjectId | Reference to User |