import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Monta el componente App dentro del div con id="root"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
