import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "../components";
import { About, Experience, Home, Projects } from "../pages";

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
          element: <About />,
        },
        {
          path: "experience",
          element: <Experience />,
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
          element: <Projects />,
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
