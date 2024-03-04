import React from "react";
import ReactDOM from "react-dom/client";
// import ErrorPage from "./error-page";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Skillset from './assets/components/skillset.jsx';
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
      <RouterProvider router={router} />
    </React.StrictMode>
);
