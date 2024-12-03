import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ModelXPage from "./pages/ModelXPage.jsx";
import ModelSPage from "./pages/ModelSPage.jsx";
import CyberTruckPages from "./pages/CybertruckPage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/model_s",
    element: <ModelSPage />
  },
  {
    path: "/model_x",
    element: <ModelXPage />
  },
  {
    path: "/cybertruck",
    element: <CyberTruckPages />
  }
]);
createRoot(document.getElementById("root"))
  .render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
