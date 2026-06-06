import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Mounts the React app into <div id="root"> in public/index.html
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
