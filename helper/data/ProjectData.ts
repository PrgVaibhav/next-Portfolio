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

    techStack: [
      "NextJS",
      "TailwindCSS",
      "JavaScript",
      "REST APIs",
      "Axios",
      "TypeScript",
      "ShadCNui",
    ],

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

    github: "",
    liveDemo: "https://bitsndbricks.com",
    images: [
      "/projects/busybrains/dashboard.webp",
      "/projects/busybrains/home.webp",
      "/projects/busybrains/login.webp",
      "/projects/busybrains/signup.webp",
      "/projects/busybrains/user-management.webp",
      "/projects/busybrains/work-page.webp",
      "/projects/busybrains/work.webp",
      "/projects/busybrains/project.webp",
      "/projects/busybrains/work-detail.webp",
    ],
  },

  {
    id: 2,
    cover: "/projects/cover/cultui.jpg",
    title: "CultUI",
    snippet:
      "CultUI is a modern, developer-friendly component library designed to streamline the UI development process. It offers a collection of high-quality, customizable, and accessible React components built with TailwindCSS.",
    slug: "cultui",

    description:
      "CultUI is my personal UI library built to speed up React development. While working on multiple projects, I found myself reusing the same patterns and styles repeatedly. CultUI solves that by providing pre-built, customizable, and accessible components crafted with TailwindCSS. The library emphasizes developer experience, scalability, and clean code practices.",

    techStack: ["ReactJS", "TypeScript", "TailwindCSS", "Vite", "Axios"],

    role: "Frontend Developer & Library Creator",
    status: "In Progress",

    features: [
      "Reusable React components with TailwindCSS styling",
      "Customizable props for flexibility",
      "Focus on accessibility (ARIA roles, keyboard navigation)",
      "Built with Typescript for more type safety",
    ],

    challenges: [
      "Designing reusable components that balance flexibility with simplicity",
      "Maintaining a consistent design language across all components",
      "Ensuring accessibility without compromising styling",
      "Setting up proper documentation and versioning for the library",
    ],

    outcomes: [
      "Built a scalable UI library that can be reused across projects",
      "Enhanced my understanding of design systems and component driven development",
      "Improved development speed for future projects",
    ],

    github: "https://github.com/prgvaibhav/cultui", // placeholder if real repo exists
    liveDemo: "https://cultui.vercel.app", // if docs/preview site
    images: [
      "/projects/cultui/home.webp",
      "/projects/cultui/components.webp",
      "/projects/cultui/button-1.webp",
      "/projects/cultui/button-2.webp",
    ],
  },

  {
    id: 3,
    cover: "/projects/cover/peteye.jpg",
    title: "PetEye",
    snippet:
      "PetEye is an all-in-one platform catering to pet owners, providing innovative solutions for pet data management, e-commerce, tracking, and community engagement.",
    slug: "peteye",

    description:
      "PetEye was a project I worked on at PetEye, where I contributed as a React developer. The platform aimed to serve pet owners by offering a single solution for medical records, e-commerce (pet food & accessories), real-time GPS tracking, and informative blogs. My responsibility was to develop scalable and user-friendly interfaces that ensured smooth navigation across these diverse features.",

    techStack: [
      "ReactJS",
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "Redux Toolkit",
      "REST APIs",
      "ContextAPI",
      "Axios",
    ],

    role: "Frontend Developer",
    status: "Completed",

    features: [
      "User authentication and profile management",
      "Pet medical record storage and access",
      "E-commerce module for pet products",
      "GPS tracking and location visualization",
      "Community engagement with blogs and guides",
    ],

    challenges: [
      "Integrating multiple complex modules into one consistent UI",
      "Ensuring responsive design across data-heavy pages",
      "Managing API state efficiently with Redux Toolkit",
      "Balancing performance while rendering real-time tracking data",
      "Adding payment integration for e-commerce of pet store",
    ],

    outcomes: [
      "Gained practical experience working on a multi-feature production project",
      "Improved skills in API integration and modular UI design",
      "Learned to collaborate in a professional environment with backend teams",
      "Enhanced ability to manage large-scale state with Redux Toolkit",
    ],

    github: "", // client-owned, may not be public
    liveDemo: "https://peteye.pet", // internal project, no live site
    images: [],
  },

  {
    id: 4,
    cover: "/projects/cover/movie-gyaan.jpg",
    title: "Movie Gyaan",
    snippet:
      "Movie Gyaan is a go to platform for movie enthusiasts, offering detailed insights into a wide range of films. From ratings to budgets, this site provides everything you need to explore the world of cinema.",
    slug: "movie-gyaan",

    description:
      "Movie Gyaan was a personal project designed to strengthen my API handling and data visualization skills. It connects with third-party APIs to fetch detailed information about movies, including cast, ratings, reviews, and budgets. I focused on building an intuitive interface that makes movie discovery engaging and informative.",

    techStack: ["React", "TailwindCSS", "JavaScript", "TMDB API", "Axios"],

    role: "Frontend Developer",
    status: "Completed",

    features: [
      "Search and explore movies by title, genre, or release date",
      "Detailed movie pages with cast, reviews, and ratings",
      "Responsive and modern UI built with TailwindCSS",
      "Integration with TMDB API for up-to-date information",
    ],

    challenges: [
      "Efficiently handling API requests to avoid performance bottlenecks",
      "Presenting data-heavy content in a clean, readable manner",
      "Designing a search system with real-time feedback",
    ],

    outcomes: [
      "Improved API handling and frontend data visualization skills",
      "Delivered a functional movie discovery app with modern UI",
      "Enhanced my understanding of integrating third-party APIs",
    ],

    github: "https://github.com/PrgVaibhav/moviezone",
    liveDemo: "https://moviegyaaan.netlify.app/",
    images: [
      "/projects/movie/home.webp",
      "/projects/movie/popular.webp",
      "/projects/movie/search.webp",
    ],
  },

  {
    id: 5,
    cover: "/projects/cover/redditwrap.jpg",
    title: "RedditWrap",
    snippet:
      "RedditWrap is your curated gateway to the best of Reddit for developers. No spam. No distractions. Just the most insightful discussions, tips, and resources tailored for the coding community.",
    slug: "redditwrap",

    description:
      "RedditWrap is a side project I built to practice API integration and content curation. The idea was to filter out noise from Reddit and display only developer-related threads and insights in a minimal UI. It focuses on helping developers stay informed without getting distracted by irrelevant content.",

    techStack: ["ReactJS", "TailwindCSS", "Reddit API", "Axios"],

    role: "Fullstack Developer",
    status: "Completed",

    features: [
      "Fetch and display curated Reddit posts from developer-related subreddits",
      "Filter by topics like JavaScript, React, Web Dev, etc.",
      "Responsive UI optimized for reading content quickly",
    ],

    challenges: [
      "Understanding Reddit’s API authentication and rate limits",
      "Filtering and cleaning raw API data into developer-friendly insights",
      "Balancing between minimal UI and showing enough context for posts",
    ],

    outcomes: [
      "Built a working prototype for developer-focused Reddit feed",
      "Improved skills in filtering and transforming API responses",
    ],

    github: "https://github.com/PrgVaibhav/RedditWrap",
    liveDemo: "https://redditwrap.vercel.app",
    images: [],
  },
];
