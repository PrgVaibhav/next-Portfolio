// import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../Pages";
import { Error } from "../Components";
import { Layout } from "../Components";
// import { ProjectLoadingSkeleton } from "../components/UI/LoadingSkeleton";
export const AllRoutes = () => {
  // const AllProjects = lazy(() =>
  //   import("../old-pages/Projects/AllProjects").then((module) => ({
  //     default: module.AllProjects,
  //   }))
  // );
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
            <>Hello World</>
            // <Suspense fallback={<ProjectLoadingSkeleton />}>
            //   <AllProjects />
            // </Suspense>
          ),
        },
        {
          path: "updates",
          element: (
            <>Updates</>
            // <Suspense fallback={<ProjectLoadingSkeleton />}>
            //   <AllProjects />
            // </Suspense>
          ),
        },
        {
          path: "hire-me",
          element: (
            <>Hire-me</>
            // <Suspense fallback={<ProjectLoadingSkeleton />}>
            //   <AllProjects />
            // </Suspense>
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
