# 🚀 Task Management System (MERN Stack)

A full-stack **Task Management System** built using the **MERN stack**.  
This application allows users to create, view, update, and delete tasks with a clean and user-friendly interface.

---

## 📌 Features

- ➕ Add new tasks  
- 📄 View all tasks  
- ✏️ Update existing tasks  
- ❌ Delete tasks  
- ⚡ Real-time UI updates  
- 🌐 RESTful API integration  

---

## 🛠️ Tech Stack

### Frontend
- React.js
- HTML5
- CSS3
- Tailwind CSS (UI styling)
- Fetch API

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Tools
- Git & GitHub
- Thunder Client (API testing)
- VS Code

TaskManagementSystem
│
├── backend
│ ├── models
│ │ └── Task.js
│ ├── server.js
│ ├── package.json
│ └── .env
│
├── frontend
│ ├── src
│ │ ├── App.js
│ │ ├── App.css
│ │ └── index.js
│ ├── public
│ └── package.json
│
└── .gitignore


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Aditya-K98-create/TaskManagementSystem.git
cd TaskManagementSystem

2️⃣ Backend Setup
cd backend
npm install


Create a .env file:

MONGO_URI=mongodb://localhost:27017/taskmanager
PORT=5000


Run backend:

npm start

3️⃣ Frontend Setup
cd frontend
npm install
npm start


Frontend runs on:

http://localhost:3000


Backend runs on:

http://localhost:5000

🔗 API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Get all tasks
POST	/api/tasks	Create new task
PUT	/api/tasks/:id	Update task
DELETE	/api/tasks/:id	Delete task---

## 📂 Project Structure
## 👤 Author

**Aditya Kandalkar**  
- GitHub: https://github.com/Aditya-K98-create
## 📜 License

This project is open-source and available under the MIT License.

