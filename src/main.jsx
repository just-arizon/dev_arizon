import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Contact from "./layouts/contact.jsx";
import ErrorPage from "./components/error.jsx";
import "./index.css";
import { ThemeProvider } from "@/components/theme-provider";
import Projects from "./layouts/project.jsx";
import Tools from "./layouts/tools.jsx";
import About from "./layouts/about.jsx";

// Setup your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/skills",
    element: <Tools />,
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);

// Render the application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
