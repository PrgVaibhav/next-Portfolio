import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages";
import { Error } from "../components";
import { Layout } from "../components/layout/Layout";
import { ProjectLoadingSkeleton } from "../components/UI/LoadingSkeleton";
export const AllRoutes = () => {
  const AllProjects = lazy(() =>
    import("../pages/Projects/AllProjects").then((module) => ({
      default: module.AllProjects,
    }))
  );
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "projects",
          element: (
            <Suspense fallback={<ProjectLoadingSkeleton />}>
              <AllProjects />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
