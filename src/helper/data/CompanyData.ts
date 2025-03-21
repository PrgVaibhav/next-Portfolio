interface COMPANY_DATA {
  id: number;
  name: string;
  location: string;
  role: string;
  duration: string;
  description: string;
  image: string;
  url: string;
}

interface DETAILED_COMPANY_DATA {
  id: number;
  role?: string;
  location?: string;
  tech: string[];
  name: string;
  projectDescription: string;
  thumbnail: string;
  duration?: string;
  aboutProject: {
    id: number;
    header: string;
    description: string;
    image?: string;
  }[];
}

import petEye from "../../assets/images/peteye.webp";
import GrayAcumen from "../../assets/images/assets/GrayAcumen.png";
import mile from "../../assets/images/assets/24thMile.png";
import infozIT from "../../assets/images/assets/infozit.png";

export const SmallCompanyData: COMPANY_DATA[] = [
  {
    id: 2,
    name: "Gray Acumen",
    location: "Remote",
    role: "ReactJS Developer Intern",
    duration: "May 2023 - Oct 2023",
    description:
      "Assisted in front-end development, gaining hands-on experience in React, state management, and responsive design.",
    image: GrayAcumen,
    url: "/company/Gray%20Acumen",
  },
  {
    id: 3,
    name: "24thMile",
    location: "Remote",
    role: "ReactJS Developer Intern",
    duration: "Oct 2023 - Jan 2024",
    description:
      "Designed and developed interactive, accessible, and performance-optimized UI components for various web projects.",
    image: mile,
    url: "/company/24thMile",
  },
  {
    id: 4,
    name: "InfozIT",
    location: "Hyderabad, Telangana",
    role: "ReactJS Developer Intern",
    duration: "Jan 2024 - Apr 2024",
    description:
      "Contributed to the front-end of an ERP system, enhancing UI/UX, optimizing form validation, and improving API efficiency.",
    image: infozIT,
    url: "/company/InfozIT",
  },
  {
    id: 5,
    name: "PetEye",
    location: "Hyderabad, Telangana",
    role: "ReactJS Developer",
    duration: "May 2024 - Present",
    description:
      "Developing and optimizing a scalable pet management platform using React.js, improving user experience, performance, and real-time data handling.",
    image: petEye,
    url: "/company/PetEye",
  },
];

export const DetailedCompanyData: DETAILED_COMPANY_DATA[] = [
  {
    id: 1,
    role: "React.js Developer",
    name: "PetEye",
    location: "Hyderabad, Telangana",
    duration: "May 2024 – Present",
    projectDescription:
      "Building a scalable pet management platform to enhance pet adoption and care by leveraging modern web technologies.",
    thumbnail: petEye,
    aboutProject: [
      {
        id: 1,
        header: "Optimized Pet Registration System",
        description:
          "Designed and developed a highly efficient pet registration and management system, reducing user effort and improving workflow efficiency by 30%. Users can now add, update, and manage pet details seamlessly.",
      },
      {
        id: 2,
        header: "Reusable UI Components",
        description:
          "Created a collection of modular and reusable UI components, ensuring consistent design and reducing future development time by 40%. These components support dynamic theming and improved maintainability.",
      },
      {
        id: 3,
        header: "Enhanced API Performance",
        description:
          "Integrated Redux and ContextAPI for optimized state management and API caching, leading to a 35% faster page load time. This significantly reduced unnecessary network requests, enhancing overall performance.",
      },
      {
        id: 4,
        header: "Security & Role-Based Access Control (RBAC)",
        description:
          "Implemented a robust Role-Based Access Control (RBAC) system to enhance security, ensuring that different user roles have appropriate permissions for managing pet data and platform functionalities.",
      },
      {
        id: 6,
        header: "UI/UX Collaboration",
        description:
          "Worked closely with UI/UX designers to refine and enhance interface elements, improving accessibility and engagement by 20%. The updated design ensures a seamless user experience across all devices.",
      },
    ],
    tech: ["ReactJS", "Redux", "TailwindCSS", "Axios", "Firebase"],
  },
  {
    id: 2,
    role: "React.js Developer",
    name: "InfozIT",
    location: "Hyderabad, Telangana",
    duration: "Jan 2024 – Apr 2024",
    projectDescription:
      "Contributed to a large-scale ERP system, focusing on UI enhancements, performance optimizations, and a seamless user experience.",
    thumbnail: infozIT,
    aboutProject: [
      {
        id: 1,
        header: "Student & Staff Registration System",
        description:
          "Designed and developed an efficient student and staff registration system, reducing form submission errors by 40% through real-time validation and user-friendly form structures.",
      },
      {
        id: 2,
        header: "Interactive Dashboard",
        description:
          "Built an intuitive dashboard that allowed administrators to track student progress, manage staff roles, and oversee workflows in a more structured manner, improving operational efficiency.",
      },
      {
        id: 3,
        header: "Performance Optimization",
        description:
          "Refactored existing React components to eliminate unnecessary re-renders, reducing memory usage and boosting overall application performance by 25%.",
      },

      {
        id: 5,
        header: "Seamless API Integration",
        description:
          "Collaborated closely with backend developers to integrate and optimize REST API calls, ensuring efficient data fetching and reducing API response time.",
      },
    ],
    tech: ["React.js", "Bootstrap", "SCSS", "Axios", "REST APIs"],
  },
  {
    id: 3,
    role: "React.js Developer (Freelancer)",
    name: "24thMile",
    location: "Pune, India",
    duration: "Oct 2023 – Jan 2024",
    projectDescription:
      "Developed multiple web-based solutions, focusing on UI/UX enhancements, accessibility, and performance optimizations.",
    thumbnail: mile,
    aboutProject: [
      {
        id: 1,
        header: "Interactive UI Development",
        description:
          "Designed and implemented highly engaging user interfaces, boosting user interaction and accessibility by 30%. Implemented animations and micro-interactions to enhance the user experience.",
      },
      {
        id: 2,
        header: "Cross-Browser Compatibility",
        description:
          "Ensured seamless performance across multiple browsers and screen resolutions, fixing inconsistencies and optimizing rendering for different devices.",
      },
      {
        id: 3,
        header: "Modular Component Library",
        description:
          "Developed a scalable and reusable component library, reducing future development time by 50% and ensuring design consistency across different projects.",
      },
      {
        id: 4,
        header: "Accessibility Enhancements",
        description:
          "Improved accessibility by implementing ARIA attributes, keyboard navigation, and screen reader support, ensuring compliance with WCAG guidelines.",
      },
      {
        id: 5,
        header: "API Data Optimization",
        description:
          "Worked with backend engineers to optimize API response handling, reducing load times by 20% and ensuring efficient data management.",
      },
    ],
    tech: ["React.js", "TailwindCSS", "SCSS", "REST APIs"],
  },
  {
    id: 4,
    role: "React.js Developer Intern",
    name: "Gray Acumen",
    location: "Ahmedabad, India",
    duration: "May 2023 – Oct 2023",
    projectDescription:
      "Gained hands-on experience in front-end development, collaborating with teams to build scalable web applications and improve UI consistency.",
    thumbnail: GrayAcumen,
    aboutProject: [
      {
        id: 1,
        header: "Real-World React Development",
        description:
          "Worked on developing and debugging large-scale React applications, assisting in feature implementation and fixing bugs to improve project timelines and delivery.",
      },
      {
        id: 2,
        header: "UI/UX Enhancements",
        description:
          "Contributed to UI consistency by improving styling and layout structures, ensuring a seamless experience across various screen sizes and devices.",
      },
      {
        id: 3,
        header: "Reusable Component Implementation",
        description:
          "Designed and implemented reusable UI components, reducing code redundancy and enhancing maintainability across multiple projects.",
      },
      {
        id: 4,
        header: "State Management Learning",
        description:
          "Applied Redux and Context API to optimize state management, improving data handling and user experience within the application.",
      },
    ],
    tech: ["React.js", "SCSS", "Git", "REST APIs"],
  },
];
