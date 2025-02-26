import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "../components";
import { About, Experiences, Home, Project, Projects } from "../pages";
import { Experience } from "../pages/experiences/experience/Experience";

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
          element: <Experiences />,
        },
        {
          path: "company/:id",
          element: <Experience />,
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
          element: <Project />,
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
