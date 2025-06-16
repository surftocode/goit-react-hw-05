import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataProvider from "./DataContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter
    // basename={}
    // forceRefresh={}
    // getUserConfirmation={}
    // keyLength={}
    >
      <DataProvider>
        <App />
      </DataProvider>
    </BrowserRouter>
  </StrictMode>
);
