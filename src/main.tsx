import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";

const rootContainer = document.getElementById("root");
if (!rootContainer) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootContainer);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
