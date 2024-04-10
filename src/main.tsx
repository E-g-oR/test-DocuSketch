import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import RandomIconProvider from "./components/random-icon/random-icon-context.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RandomIconProvider>
      <App />
    </RandomIconProvider>
  </React.StrictMode>
);
