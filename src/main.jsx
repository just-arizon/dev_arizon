import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./components/error.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Projects from "./layouts/project.jsx";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "@/components/theme-provider"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
  },

  {
    path: "/*",
    element: <ErrorPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
//   <React.StrictMode>
//     <RouterProvider router={router} />
// </React.StrictMode>
);
