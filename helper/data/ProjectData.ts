export interface ProjectData {
  id: number;
  cover: string;
  title: string;
  snippet: string;
  slug: string;
  description?: string;
  techStack?: string[];
  role?: string;
  status?: string;
  features?: string[];
  challenges?: string[];
  outcomes?: string[];
  github?: string;
  liveDemo?: string;
  images: string[];
}

export const PROJECTS: ProjectData[] = [
  {
    id: 1,
    cover: "/projects/cover/bitsndbricks.jpg",
    title: "BitsndBricks",
    snippet:
      "A platform where property professionals companies or individuals sign up, register, and start building or applying for work. My very first big project, crafted entirely from scratch, laying the foundation for scalable, user friendly real estate solutions.",
    slug: "bitsndbricks",

    description:
      "BitsndBricks is a real estate web application inspired by platforms like Naukri, but designed specifically for property professionals. It allows companies and individuals to register, create projects, manage work, and collaborate efficiently. As my first major assignment, I built the entire frontend ecosystem from scratch, focusing on clean UI, seamless onboarding, and multiple user perspectives.",

    techStack: ["React", "TailwindCSS", "JavaScript", "REST APIs", "Vercel"],

    role: "Frontend Developer",
    status: "Completed",

    features: [
      "Authentication flow with login and signup",
      "Company registration and user onboarding",
      "Project creation, work posting, and application system",
      "Dedicated views for service providers, clients, and landing page",
      "Responsive design with mobile-first approach",
    ],

    challenges: [
      "Designing a scalable frontend architecture without prior reference",
      "Implementing multiple role-based views within the same app",
      "Balancing between clean UI and feature-heavy workflows",
      "Learning to manage component-level state effectively",
    ],

    outcomes: [
      "Successfully delivered a fully functional real estate platform prototype",
      "Gained hands-on experience in building authentication and role-based flows",
      "Learned the importance of UI/UX in user onboarding",
      "Set a strong foundation for tackling larger, production-ready projects",
    ],

    github: "https://github.com/vaibhavkumar/bitsndbricks", // update with real link if available
    liveDemo: "https://bitsndbricks.vercel.app", // update if hosted
    images: [
      "/projects/busybrains/dashboard.png",
      "/projects/busybrains/home.png",
      "/projects/busybrains/login.png",
      "/projects/busybrains/signup.png",
      "/projects/busybrains/user-management.png",
      "/projects/busybrains/work-page.png",
      "/projects/busybrains/work.png",
      "/projects/busybrains/project.png",
      "/projects/busybrains/work-detail.png",
    ],
  },

  {
    id: 2,
    cover: "/projects/cover/cultui.jpg",
    title: "CultUI",
    snippet:
      "CultUI is a modern, developer-friendly component library designed to streamline the UI development process. It offers a collection of high-quality, customizable, and accessible React components built with TailwindCSS. The library aims to provide developers with a seamless experience, enabling them to integrate sleek UI elements with minimal effort.",
    slug: "cultui",
    images: [
      "/projects/busybrains/dashboard.png",
      "/projects/busybrains/home.png",
      "/projects/busybrains/login.png",
      "/projects/busybrains/signup.png",
      "/projects/busybrains/user-management.png",
      "/projects/busybrains/work-page.png",
      "/projects/busybrains/work.png",
      "/projects/busybrains/project.png",
      "/projects/busybrains/work-detail.png",
    ],
  },

  {
    id: 3,
    cover: "/projects/cover/peteye.jpg",
    title: "PetEye",
    snippet:
      "PetEye is an all-in-one platform catering to pet owners, providing innovative solutions for pet data management, e-commerce, tracking, and community engagement. The platform is designed to streamline the pet care process by integrating document storage, online shopping, real-time tracking, and informative content all in one place.",
    slug: "peteye",
    images: [
      "/projects/busybrains/dashboard.png",
      "/projects/busybrains/home.png",
      "/projects/busybrains/login.png",
      "/projects/busybrains/signup.png",
      "/projects/busybrains/user-management.png",
      "/projects/busybrains/work-page.png",
      "/projects/busybrains/work.png",
      "/projects/busybrains/project.png",
      "/projects/busybrains/work-detail.png",
    ],
  },

  {
    id: 5,
    cover: "/projects/cover/redditwrap.jpg",
    title: "RedditWrap",
    snippet:
      "RedditWrap is your curated gateway to the best of Reddit for developers. No spam. No distractions. Just the most insightful discussions, tips, and resources tailored for the coding community.",
    slug: "redditwrap",
    images: [
      "/projects/busybrains/dashboard.png",
      "/projects/busybrains/home.png",
      "/projects/busybrains/login.png",
      "/projects/busybrains/signup.png",
      "/projects/busybrains/user-management.png",
      "/projects/busybrains/work-page.png",
      "/projects/busybrains/work.png",
      "/projects/busybrains/project.png",
      "/projects/busybrains/work-detail.png",
    ],
  },
  {
    id: 4,
    cover: "/projects/cover/movie-gyaan.jpg",
    title: "Movie Gyaan",
    snippet:
      "Movie Gyaan is a go-to platform for movie enthusiasts, offering detailed insights into a wide range of films. From ratings to budgets, this site provides everything you need to explore the world of cinema.",
    slug: "movie-gyaan",
    images: [
      "/projects/busybrains/dashboard.png",
      "/projects/busybrains/home.png",
      "/projects/busybrains/login.png",
      "/projects/busybrains/signup.png",
      "/projects/busybrains/user-management.png",
      "/projects/busybrains/work-page.png",
      "/projects/busybrains/work.png",
      "/projects/busybrains/project.png",
      "/projects/busybrains/work-detail.png",
    ],
  },
];
