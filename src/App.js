import { useState } from "react";
import TodoItem from "./components/TodoItem";
import "./App.css";

// ════════════════════════════════════════════════════
//  App Component — Parent / Main Component
//
//  React Concepts used here:
//  ✅ useState  — manages state (todos, input, filter)
//  ✅ Components — renders <TodoItem /> child component
//  ✅ Props      — passes data & functions to TodoItem
//  ✅ Array methods — .map() .filter() to work with todos
//  ✅ Conditional rendering — shows empty state when no tasks
//  ✅ Event handlers — onClick, onChange, onKeyDown
// ════════════════════════════════════════════════════

function App() {

  // ── STATE 1: List of all todos ──────────────────
  // Each todo = { id: number, text: string, completed: boolean }
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React useState hook",   completed: true  },
    { id: 2, text: "Build a To-Do List project",  completed: false },
    { id: 3, text: "Push code to GitHub",          completed: false },
  ]);

  // ── STATE 2: Controlled input field value ────────
  const [inputValue, setInputValue] = useState("");

  // ── STATE 3: Active filter tab ───────────────────
  const [filter, setFilter] = useState("all"); // "all" | "active" | "done"


  // ── FUNCTION 1: Add a new task ───────────────────
  function addTodo() {
    const trimmed = inputValue.trim();
    if (!trimmed) return; // guard: don't add empty task

    const newTodo = {
      id: Date.now(),    // unique id using current timestamp
      text: trimmed,
      completed: false,
    };

    setTodos([...todos, newTodo]); // spread old array + add new todo
    setInputValue("");             // clear input after adding
  }

  // ── FUNCTION 2: Toggle complete / incomplete ─────
  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed } // flip completed
          : todo
      )
    );
  }

  // ── FUNCTION 3: Delete a task ────────────────────
  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // ── FUNCTION 4: Clear all completed tasks ────────
  function clearCompleted() {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  // ── FUNCTION 5: Submit on Enter key ──────────────
  function handleKeyDown(e) {
    if (e.key === "Enter") addTodo();
  }


  // ── DERIVED VALUES (calculated from state) ───────
  const completedCount = todos.filter((t) => t.completed).length;
  const totalCount     = todos.length;
  const pendingCount   = totalCount - completedCount;
  const progress       = totalCount === 0
    ? 0
    : Math.round((completedCount / totalCount) * 100);

  // Filter the list based on active tab
  const visibleTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "done")   return todo.completed;
    return true; // "all"
  });


  // ── JSX: What this component renders ─────────────
  return (
    <div className="app">

      {/* ── Page Header ── */}
      <header className="app-header">
        <p className="app-label">⚛ React.js + useState</p>
        <h1>Task <span>Manager</span></h1>
        <p className="app-sub">Add tasks · Mark done · Stay organised</p>
      </header>

      <main className="card">

        {/* ── Input Section ── */}
        <section className="input-section">
          <div className="input-row">
            <input
              type="text"
              className="task-input"
              placeholder="Add a new task..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="add-btn" onClick={addTodo}>
              + Add
            </button>
          </div>

          {/* ── Filter Tabs ── */}
          <div className="filter-tabs">
            {["all", "active", "done"].map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${filter === tab ? "active" : ""}`}
                onClick={() => setFilter(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </section>

        {/* ── Stats Bar ── */}
        <div className="stats-bar">
          <span className="stat"><span className="dot dot-total" />{totalCount} Total</span>
          <span className="stat"><span className="dot dot-pending" />{pendingCount} Pending</span>
          <span className="stat"><span className="dot dot-done" />{completedCount} Done</span>
        </div>

        {/* ── Todo List ── */}
        <ul className="todo-list">
          {visibleTodos.length === 0 ? (
            // Conditional rendering: show when list is empty
            <div className="empty-state">
              <p className="empty-icon">{filter === "done" ? "🎉" : "📝"}</p>
              <p>{filter === "done" ? "No completed tasks yet!" : "No tasks here. Add one above!"}</p>
            </div>
          ) : (
            // Render a <TodoItem /> for each todo using .map()
            visibleTodos.map((todo) => (
              <TodoItem
                key={todo.id}      // unique key required by React
                todo={todo}        // pass todo object as prop
                onToggle={toggleTodo} // pass toggle function as prop
                onDelete={deleteTodo} // pass delete function as prop
              />
            ))
          )}
        </ul>

        {/* ── Footer: Progress Bar + Clear Button ── */}
        <footer className="card-footer">
          <div className="progress-section">
            <p className="progress-label">{progress}% completed</p>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          {completedCount > 0 && (
            <button className="clear-btn" onClick={clearCompleted}>
              Clear done
            </button>
          )}
        </footer>

      </main>
    </div>
  );
}

export default App;
