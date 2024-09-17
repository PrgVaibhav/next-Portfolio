import React from "react";
import ReactDOM from "react-dom/client";
// import { Analytics } from "@vercel/analytics/react";
import App from "./App";
import "./styles/index.css";

const rootElement = document.getElementById("root");

// Type assertion to ensure rootElement is not null
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement as HTMLElement);
  root.render(
    <React.StrictMode>
      <App />
      {/* <Analytics /> */}
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
