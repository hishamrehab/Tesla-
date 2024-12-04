import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ModelXPage from "./pages/ModelXPage.jsx";
import ModelSPage from "./pages/ModelSPage.jsx";
import CyberTruckPages from "./pages/CybertruckPage.jsx";
import App from "./App.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <HomePage />
      </App>
    ),
  },
  {
    path: "/model_s",
    element: (
      <App>
        <ModelSPage />
      </App>
    )
  },

  {
    path: "/model_x",
    element: (
      <App>
        <ModelXPage />
      </App>
    )
  },
  {
    path: "/cybertruck",
    element: (
      <App>
        <CyberTruckPages />
      </App>
    )
  }
]);
createRoot(document.getElementById("root"))
  .render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
