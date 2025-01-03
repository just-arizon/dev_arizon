import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./components/error.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Projects from "./components/project.jsx";
import { NextUIProvider } from "@nextui-org/react";

const projects = [
  {
    id: 1,
    title: 'Fast',
    languages: [        'JavaScript',
      'React', 'CSS'],
     details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, nesciunt reprehenderit voluptatibus culpa deserunt laudantium nulla ea alias blanditiis quos nihil aperiam, ',
    preview: 'https://fast-gamma.vercel.app/',
    code: 'https://github.com/just-arizon/fast'
  },
  {
    id: 2,
    title: 'El-Neema',
    languages: [        'JavaScript',
      'React', 'CSS'],  
        details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, nesciunt reprehenderit voluptatibus culpa deserunt laudantium nulla ea alias blanditiis quos nihil aperiam,'
  },
  {
    id: 3,
    title: 'Mymindspace',
    languages: [        'JavaScript',
      'React', 'CSS'],
    details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, nesciunt reprehenderit voluptatibus culpa deserunt laudantium nulla ea alias blanditiis quos nihil aperiam, '
  },

]

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/projects",
    element: <Projects projects={projects}/>,
  },
  {
    path: "/*",
    element: <ErrorPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
);
