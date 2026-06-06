import "./TodoItem.css";

// ────────────────────────────────────────────────
// TodoItem — Child Component
//
// Receives 3 props from App.js (parent):
//   todo     → { id, text, completed }
//   onToggle → marks task complete / incomplete
//   onDelete → removes the task
// ────────────────────────────────────────────────

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>

      {/* Checkbox — toggles complete state */}
      <button
        className={`check-btn ${todo.completed ? "checked" : ""}`}
        onClick={() => onToggle(todo.id)}
        aria-label="Toggle complete"
      >
        {todo.completed ? "✓" : ""}
      </button>

      {/* Task text — strikethrough when done */}
      <span className="todo-text">{todo.text}</span>

      {/* Delete button — removes this task */}
      <button
        className="delete-btn"
        onClick={() => {onDelete(todo.id);
          if(onDelete) {
             console.log("items deleted");
            }
          }}
         
        
        
        aria-label="Delete task"
      >
        ✕
      </button>

    </li>
  );
}

export default TodoItem;
