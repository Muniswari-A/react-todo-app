# ✅ React To-Do List App

An interactive task manager built with **React.js** — demonstrates core React concepts for a front-end developer portfolio.

## 🚀 Live Demo
Deploy free on [Netlify Drop](https://app.netlify.com/drop) after running `npm run build`

---

## 🛠️ Tech Stack

| Technology | How it's used |
|---|---|
| **React.js** | UI library, component-based architecture |
| **useState Hook** | Manages todos, input value, and filter state |
| **Components** | App.js (parent) + TodoItem.js (child) |
| **Props** | Data & functions passed from parent to child |
| **CSS3** | Styling, animations, responsive layout |

---

## ✨ Features

- ✅ Add tasks (click button or press Enter)
- ✅ Mark tasks complete / incomplete
- ✅ Delete any task
- ✅ Filter by All / Active / Done
- ✅ Progress bar showing % completed
- ✅ Clear all completed tasks
- ✅ Fully responsive (mobile + desktop)

---

## 📁 Project Structure

```
todo-app/
├── public/
│   └── index.html                 # HTML shell
├── src/
│   ├── components/
│   │   ├── TodoItem.js            # Child component (receives props)
│   │   └── TodoItem.css           # TodoItem styles
│   ├── App.js                     # Parent component (all state lives here)
│   ├── App.css                    # App styles + CSS variables
│   ├── index.js                   # React DOM entry point
│   └── index.css                  # Global reset
└── package.json
```

---

## ⚛️ React Concepts Demonstrated

```
useState    → 3 state variables: todos[], inputValue, filter
.map()      → renders a <TodoItem /> for each todo
.filter()   → handles delete, filter tabs, clear completed
Props       → todo, onToggle, onDelete passed to TodoItem
Conditional → shows empty state when no tasks exist
Events      → onClick, onChange, onKeyDown
```

---

## 💻 Run Locally

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/react-todo-app.git
cd react-todo-app

# Install dependencies
npm install

# Start development server
npm start
# Opens at http://localhost:3000
```

---

## 👤 Author
**Your Name** — Front-End Developer (Fresher) · Chennai, India

[GitHub](https://github.com/YOUR_USERNAME) · [LinkedIn](https://linkedin.com/in/YOUR_USERNAME)
