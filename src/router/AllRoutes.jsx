import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AllProjects, Home } from "../pages";
import { Error } from "../components";
import { Layout } from "../components/layout/Layout";
export const AllRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: "projects", element: <AllProjects /> },
      ],
    },
  ]);
  return (
    <>
      <main aria-label="Main content of the website.">
        <RouterProvider router={router} />
      </main>
    </>
  );
};
