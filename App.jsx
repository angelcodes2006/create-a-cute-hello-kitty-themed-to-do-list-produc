import React, { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input }]);
    setInput("");
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const styles = {
    container: {
      fontFamily: "'Comic Sans MS', cursive, sans-serif",
      backgroundColor: "#E6E6FA", // lavender background
      minHeight: "100vh",
      padding: "1rem",
      color: "#4B0082",
    },
    header: {
      textAlign: "center",
      marginBottom: "1rem",
    },
    form: {
      display: "flex",
      gap: "0.5rem",
      marginBottom: "1rem",
    },
    input: {
      flex: 1,
      padding: "0.5rem",
      border: "2px solid #9370DB",
      borderRadius: "4px",
    },
    button: {
      padding: "0.5rem 1rem",
      backgroundColor: "#9370DB",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    list: {
      listStyle: "none",
      padding: 0,
    },
    listItem: {
      backgroundColor: "#FFF",
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
      color: "#FF4500",
      cursor: "pointer",
      fontSize: "1rem",
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 aria-label="Hello Kitty To-Do List">Hello Kitty To-Do List</h1>
      </header>
      <main>
        <form onSubmit={addTask} style={styles.form} aria-label="Add new task">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="New task"
            style={styles.input}
            aria-label="Task input"
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
                aria-label={"Delete " + task.text}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
