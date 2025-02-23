import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "../components";

export const UserRoute = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <h1>Home Page</h1>,
        },
        {
          path: "about",
          element: <h1>About</h1>,
        },

        {
          path: "contact",
          element: <h1>Contact</h1>,
        },
        {
          path: "projects",
          element: <h1>Projects</h1>,
        },
        {
          path: "updates",
          element: <h1>Updates</h1>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
