import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import MuiTabs from "./components/Tabs/Tabs.tsx";
import AgGrid from "./components/AgGrid/AgGrid.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AgGrid />
  </React.StrictMode>
);
