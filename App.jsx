import React, { useState } from "react";

export default function App() {
  // Sample state for a simple to‑do list (kept minimal for the demo)
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input.trim() }]);
    setInput("");
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <h1 style={styles.title}>
          Cute Hello Kitty To‑Do List – API Key: RcIcuNfL3V8TeITug56rSCBRE3ReEdzV
        </h1>
      </header>

      <section style={styles.section}>
        <form onSubmit={handleAdd} style={styles.form} aria-label="Add new task">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="New task"
            aria-label="Task description"
            style={styles.input}
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
                onClick={() => handleDelete(task.id)}
                style={styles.deleteButton}
                aria-label={`Delete ${task.text}`}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

const styles = {
  main: {
    fontFamily: "Arial, sans-serif",
    padding: "1rem",
    backgroundColor: "#fff0f5", // lavender‑ish background for cuteness
    minHeight: "100vh",
    boxSizing: "border-box",
  },
  header: {
    textAlign: "center",
    marginBottom: "1.5rem",
  },
  title: {
    color: "#d63384",
    fontSize: "1.8rem",
    margin: 0,
  },
  section: {
    maxWidth: "400px",
    margin: "0 auto",
  },
  form: {
    display: "flex",
    gap: "0.5rem",
    marginBottom: "1rem",
  },
  input: {
    flex: 1,
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    padding: "0.5rem 1rem",
    backgroundColor: "#ff69b4",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5rem",
    borderBottom: "1px solid #eee",
  },
  deleteButton: {
    background: "transparent",
    border: "none",
    color: "#ff4d4f",
    fontSize: "1.2rem",
    cursor: "pointer",
  },
};