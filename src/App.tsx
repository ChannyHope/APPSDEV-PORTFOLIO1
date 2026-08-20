import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import HomePage from "./pages/guest/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}