import React from "react";
import ReactDOM from "react-dom/client";
// import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Skillset from "./components/skillset.jsx";
import { NextUIProvider } from "@nextui-org/react";
// import { NextUIProvider } from "@nextui-org/react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "Skillset",
    element: <Skillset />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
);
