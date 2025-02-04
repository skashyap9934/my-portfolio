// Imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Stylesheets
import "./index.css";

// Components
import App from "./App.tsx";
import { ConfigProvider } from "antd";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </StrictMode>
);
