import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // EDIT MODE STATES
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const API = "http://localhost:5000/api/tasks";

  // ================= GET TASKS =================
  const fetchTasks = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // ================= ADD TASK =================
  const addTask = async (e) => {
    e.preventDefault();

    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });

    setTitle("");
    setDescription("");
    fetchTasks();
  };

  // ================= DELETE TASK =================
  const deleteTask = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });

    fetchTasks();
  };

  // ================= START EDIT =================
  const startEdit = (task) => {
    setIsEditing(true);
    setEditId(task._id);
    setTitle(task.title);
    setDescription(task.description);
  };

  // ================= UPDATE TASK =================
  const updateTask = async (e) => {
    e.preventDefault();

    await fetch(`${API}/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });

    setIsEditing(false);
    setEditId(null);
    setTitle("");
    setDescription("");
    fetchTasks();
  };

  return (
    <div className="container">
      <h1>Task Management System</h1>

      {/* ADD / UPDATE FORM */}
      <form onSubmit={isEditing ? updateTask : addTask}>
        <input
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>
          {isEditing ? "Update Task" : "Add Task"}
        </button>
      </form>

      {/* TASK LIST */}
      <ul>
        {tasks.map((task) => (
          <li key={task._id} className="task">
            <span>
              <b>{task.title}</b> — {task.description}
            </span>

            <div>
              <button
                className="edit-btn"
                onClick={() => startEdit(task)}
              >
                ✏️
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteTask(task._id)}
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
