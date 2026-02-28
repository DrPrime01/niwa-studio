import { RouterProvider } from "react-router/dom";
import { router } from "./constants/routes";

export default function App() {
  return <RouterProvider router={router} />;
}
