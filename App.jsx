import React, { useState } from "react";

export default function App() {
  const apiKey = "cehcejdejhgfrhujiekn889";
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input.trim() }]);
    setInput("");
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#E6E6FA",
      color: "#333",
      fontFamily: "Arial, Helvetica, sans-serif",
      padding: "1rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    header: {
      marginBottom: "1.5rem",
    },
    form: {
      display: "flex",
      gap: "0.5rem",
      marginBottom: "1rem",
    },
    input: {
      padding: "0.5rem",
      fontSize: "1rem",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    button: {
      padding: "0.5rem 1rem",
      fontSize: "1rem",
      borderRadius: "4px",
      border: "none",
      backgroundColor: "#ff69b4",
      color: "#fff",
      cursor: "pointer",
    },
    list: {
      listStyle: "none",
      padding: 0,
      width: "100%",
      maxWidth: "400px",
    },
    listItem: {
      backgroundColor: "#fff",
      marginBottom: "0.5rem",
      padding: "0.5rem",
      borderRadius: "4px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    deleteBtn: {
      background: "none",
      border: "none",
      color: "#ff4d4f",
      cursor: "pointer",
      fontSize: "1.2rem",
    },
  };

  return (
    <main style={styles.container}>
      <header style={styles.header}>
        <h1 aria-label="Hello Kitty To-Do List">
          Hello Kitty To-Do List – API Key: {apiKey}
        </h1>
      </header>

      <form style={styles.form} onSubmit={addTask} aria-label="Add new task">
        <input
          type="text"
          placeholder="New task"
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
            <span>{task.text}</span>
            <button
              onClick={() => removeTask(task.id)}
              style={styles.deleteBtn}
              aria-label={`Delete ${task.text}`}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
