import React, { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: trimmed, completed: false }
    ]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const styles = {
    container: {
      fontFamily: "Arial, Helvetica, sans-serif",
      backgroundColor: "#fff0f5",
      minHeight: "100vh",
      padding: "1rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: "#333"
    },
    header: {
      fontSize: "2rem",
      marginBottom: "0.5rem",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem"
    },
    form: {
      display: "flex",
      gap: "0.5rem",
      marginBottom: "1rem",
      width: "100%",
      maxWidth: "400px"
    },
    input: {
      flex: 1,
      padding: "0.5rem",
      border: "2px solid #ffb6c1",
      borderRadius: "4px",
      fontSize: "1rem"
    },
    button: {
      backgroundColor: "#ff69b4",
      color: "white",
      border: "none",
      borderRadius: "4px",
      padding: "0.5rem 1rem",
      cursor: "pointer",
      fontSize: "1rem"
    },
    list: {
      listStyle: "none",
      padding: 0,
      width: "100%",
      maxWidth: "400px"
    },
    listItem: {
      backgroundColor: "white",
      marginBottom: "0.5rem",
      padding: "0.5rem",
      borderRadius: "4px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
    },
    taskText: (completed) => ({
      textDecoration: completed ? "line-through" : "none",
      color: completed ? "#999" : "#333",
      flex: 1,
      marginLeft: "0.5rem"
    }),
    iconButton: {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: "1.2rem",
      marginLeft: "0.5rem"
    }
  };

  return (
    <main style={styles.container}>
      <header style={styles.header}>
        <span role="img" aria-label="Hello Kitty">🐱</span>
        Hello Kitty To‑Do List
      </header>
      <form style={styles.form} onSubmit={handleAdd} aria-label="Add new task">
        <input
          type="text"
          placeholder="What to do?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
          aria-label="Task description"
        />
        <button type="submit" style={styles.button} aria-label="Add task">
          Add
        </button>
      </form>
      <ul style={styles.list} aria-label="Task list">
        {tasks.map((task) => (
          <li key={task.id} style={styles.listItem}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
            />
            <span style={styles.taskText(task.completed)}>{task.text}</span>
            <button
              onClick={() => deleteTask(task.id)}
              style={styles.iconButton}
              aria-label="Delete task"
            >
              ✖️
            </button>
          </li>
        ))}
        {tasks.length === 0 && (
          <li style={{ textAlign: "center", color: "#777" }}>No tasks yet! 🎀</li>
        )}
      </ul>
    </main>
  );
}
