import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Home from "../pages/Home";
import Work from "../pages/Work";
import Plant from "../pages/Plant";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "work",
        element: <Work />,
      },
      {
        path: "plant",
        element: <Plant />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
