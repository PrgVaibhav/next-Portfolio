import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Loading, RootLayout } from "../components";

const Home = lazy(() =>
  import("../pages/home/Home").then((module) => ({ default: module.Home }))
);
const About = lazy(() =>
  import("../pages/about/About").then((module) => ({ default: module.About }))
);
const Experiences = lazy(() =>
  import("../pages/experiences/Experiences").then((module) => ({
    default: module.Experiences,
  }))
);
const Experience = lazy(() =>
  import("../pages/experiences/experience/Experience").then((module) => ({
    default: module.Experience,
  }))
);
const Contact = lazy(() =>
  import("../pages/contact/Contact").then((module) => ({
    default: module.Contact,
  }))
);
const Projects = lazy(() =>
  import("../pages/projects/Projects").then((module) => ({
    default: module.Projects,
  }))
);
const Project = lazy(() =>
  import("../pages/projects/project/Project").then((module) => ({
    default: module.Project,
  }))
);
const Updates = lazy(() =>
  import("../pages/updates/Updates").then((module) => ({
    default: module.Updates,
  }))
);
export const UserRoute = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loading />}>
              {" "}
              <Home />{" "}
            </Suspense>
          ),
        },
        {
          path: "about",
          element: (
            <Suspense fallback={<Loading />}>
              {" "}
              <About />{" "}
            </Suspense>
          ),
        },
        {
          path: "experience",
          children: [
            {
              index: true,
              element: (
                <Suspense fallback={<Loading />}>
                  {" "}
                  <Experiences />{" "}
                </Suspense>
              ),
            },
            {
              path: ":id",
              element: (
                <Suspense fallback={<Loading />}>
                  {" "}
                  <Experience />{" "}
                </Suspense>
              ),
            },
          ],
        },
        {
          path: "contact",
          element: (
            <Suspense fallback={<Loading />}>
              {" "}
              <Contact />{" "}
            </Suspense>
          ),
        },
        {
          path: "projects",
          children: [
            {
              index: true,
              element: (
                <Suspense fallback={<Loading />}>
                  {" "}
                  <Projects />{" "}
                </Suspense>
              ),
            },
            {
              path: ":id",
              element: (
                <Suspense fallback={<Loading />}>
                  {" "}
                  <Project />{" "}
                </Suspense>
              ),
            },
          ],
        },
        {
          path: "updates",
          element: (
            <Suspense fallback={<Loading />}>
              {" "}
              <Updates />{" "}
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
