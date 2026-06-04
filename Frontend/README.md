# Taskora - Full Stack Task Manager
A full-stack task management application built using React.js, Node.js, Express.js, and Tailwind CSS. The application allows users to create, update, delete, search, and track tasks through an intuitive user interface. Tasks can be marked as completed or pending, filtered by status, and viewed with real-time statistics.

## Live Demo Links
### Frontend
https://taskora-task-manager.onrender.com
### Backend API
https://taskora-task-manager-api.onrender.com/api/tasks

## Tech Stack
### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- React Icons
### Backend
- Node.js
- Express.js
- CORS
### Deployment
- Render (Frontend)
- Render (Backend)
### Version Control
- Git
- GitHub

## How to Run Locally
### Prerequisites
- Node.js installed
### Clone Repository
```bash
git clone https://github.com/kirandikshit124/Project7-Task-Manager.git
cd Project7-Task-Manager
```
### Run Backend
```bash
cd Backend
npm install
npm start
```
Backend runs on:
```bash
http://localhost:3001
```
### Run Frontend
Open a new terminal:
```bash
cd Frontend
npm install
npm run dev
```
Frontend runs on:
```bash
http://localhost:5173
```

## API Documentation
### Get All Tasks
**Method**
```http
GET /api/tasks
```
**Response**
```json
[
  {
    "id": 1,
    "title": "Build Portfolio",
    "description": "Create personal portfolio website",
    "completed": false,
    "dueDate": "2026-06-10"
  }
]
```
### Create Task
**Method**
```http
POST /api/tasks
```
**Request Body**
```json
{
  "title": "Build Portfolio",
  "description": "Create personal portfolio website",
  "dueDate": "2026-06-10"
}
```
### Update Task
**Method**
```http
PUT /api/tasks/:id
```
**Request Body**
```json
{
  "title": "Updated Title",
  "description": "Updated Description",
  "dueDate": "2026-06-12"
}
```
### Toggle Task Status
**Method**
```http
PATCH /api/tasks/:id/toggle
```
### Delete Task
**Method**
```http
DELETE /api/tasks/:id
```

## Project Structure
```text
Project7-Task-Manager
│
├── Backend
│   ├── data
│   │   └── tasks.json
│   ├── routes
│   │   └── taskRouter.js
│   ├── models
│   │   └── taskModel.js
│   ├── controllers
│   │   └── taskController.js
│   ├── app.js
│   └── package.json
│
├── Frontend
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   │   ├── FilterBar.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── StatsCard.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskList.jsx
│   │   ├── services
│   │   │   └── taskApi.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## Future Improvements
The following features were not implemented due to project scope and time constraints:
- User Authentication
- MongoDB Database Integration
- Task Categories
- Priority Levels
- Drag and Drop Task Management
- Dark Mode Toggle
- Due Date Notifications
- Pagination

## Author
**Kiran Dikshit**
GitHub:
https://github.com/kirandikshit124