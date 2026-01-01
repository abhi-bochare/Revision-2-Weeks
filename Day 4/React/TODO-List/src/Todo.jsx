import { useState } from "react";

const initialTodos = [
  {
    id: "1",
    text: "Complete React project",
    priority: "High",
    completed: false,
  },
  { id: "2", text: "Revise JS", priority: "Medium", completed: true },
  { id: "3", text: "Revisit DSA Concepts", priority: "Low", completed: false },
];

const priorityColors = {
  High: "red",
  Medium: "orange",
  Low: "green",
};

export default function Todo() {
  const [todos, setTodos] = useState(initialTodos);
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Low");

  const addTodo = () => {
    if (!text.trim()) return;

    setTodos([
      ...todos,
      {
        id: Date.now().toString(),
        text,
        priority,
        completed: false,
      },
    ]);

    setText("");
    setPriority("Low");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ maxWidth: 500, margin: "auto" }}>
      <h2>Todo List</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: 10 }}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>

            <span
              style={{
                marginLeft: 10,
                padding: "2px 8px",
                background: priorityColors[todo.priority],
                color: "white",
                borderRadius: 6,
                fontSize: 12,
              }}
            >
              {todo.priority}
            </span>

            <button
              onClick={() => deleteTodo(todo.id)}
              style={{ marginLeft: 10 }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
