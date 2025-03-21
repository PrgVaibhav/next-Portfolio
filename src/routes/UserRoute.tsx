import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "../components";
import {
  About,
  Contact,
  Experiences,
  Home,
  Project,
  Projects,
  Updates,
} from "../pages";
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
          element: <Contact />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "project/:id",
          element: <Project />,
        },
        // {
        //   path: "blogs",
        //   element: <h1>Blogs</h1>,
        // },
        {
          path: "updates",
          element: <Updates />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
