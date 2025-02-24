import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "../components";
import { Home } from "../pages";

export const UserRoute = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <h1>About</h1>,
        },
        {
          path: "experience",
          element: <h1>experience</h1>,
        },
        {
          path: "company/:id",
          element: <h1>Company</h1>,
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
          path: "project/:id",
          element: <h1>Projects</h1>,
        },
        {
          path: "blogs",
          element: <h1>Blogs</h1>,
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
