interface PROJECT_DATA {
  id: number;
  name: string;
  //   role: string;
  duration: string;
  description: string;
  image: string;
  tech: string[];
  tag?: "Current" | "Ongoing" | "Completed";
}

interface DETAILED_PROJECT_DATA {
  id: number;
  tech: string[];
  type: string;
  name: string;
  link: string;
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

import PodHead from "../../assets/images/logo.png";

export const ProjectData: PROJECT_DATA[] = [
  {
    id: 2,
    name: "PetEye",
    duration: "May 2024 - Present",
    description:
      "PodHead is a platform that aggregates podcasts from YouTube, Spotify, and more, offering a seamless listening experience in one place",
    image: PodHead,
    tech: ["React", "Node", "MongoDB", "Express"],
    tag: "Ongoing",
  },
  {
    id: 2,
    name: "PodHead",
    duration: "May 2023 - Oct 2023",
    description:
      "PodHead is a platform that aggregates podcasts from YouTube, Spotify, and more, offering a seamless listening experience in one place",
    image: PodHead,
    tech: ["React", "Node", "MongoDB", "Express"],
    tag: "Ongoing",
  },
  {
    id: 3,
    name: "DevFort",
    duration: "Oct 2023 - Jan 2024",
    description:
      "Dev Fort is a dedicated platform designed as the ultimate destination for web developers, offering a comprehensive collection of resources to enhance productivity and skill development.",
    image:
      "https://plus.unsplash.com/premium_photo-1669078519237-61fb1374a915?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHBldCUyMGxvZ298ZW58MHx8MHx8fDA%3D",
    tech: ["React", "Node", "MongoDB", "Express"],
    tag: "Completed",
  },
  {
    id: 4,
    name: "Roll the dice",
    duration: "Jan 2024 - Apr 2024",
    description:
      "The game simulates the rolling of dice, adding an element of chance and excitement to the experience. ",
    image:
      "https://plus.unsplash.com/premium_photo-1669078519237-61fb1374a915?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHBldCUyMGxvZ298ZW58MHx8MHx8fDA%3D",
    tech: ["React", "Node", "MongoDB", "Express"],
    tag: "Completed",
  },

  {
    id: 5,
    name: "Movie Gyaaan",
    duration: "May 2024 - Present",
    description:
      "Movie Gyaaan is a comprehensive website dedicated to providing in-depth details about a vast array of movies. ",
    image:
      "https://plus.unsplash.com/premium_photo-1669078519237-61fb1374a915?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHBldCUyMGxvZ298ZW58MHx8MHx8fDA%3D",
    tech: ["React", "Node", "MongoDB ", "Express"],
    tag: "Completed",
  },
  {
    id: 6,
    name: "Password Generator",
    duration: "May 2024 - Present",
    description:
      "The application empowers users to generate passwords based on their preferences, ensuring a balance between security and usability.",
    image:
      "https://plus.unsplash.com/premium_photo-1669078519237-61fb1374a915?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHBldCUyMGxvZ298ZW58MHx8MHx8fDA%3D",
    tech: ["React", "Node", "MongoDB ", "Express"],
    tag: "Completed",
  },
];

export const DetailedProjectData: DETAILED_PROJECT_DATA[] = [
  {
    id: 1,
    tech: ["React", "Node", "MongoDB", "Express"],
    type: "Company Project",
    name: "PetEye",
    link: "https://peteye.pet",
    projectDescription:
      "PetEye is an all-in-one platform catering to pet owners, providing innovative solutions for pet data management, e-commerce, tracking, and community engagement. The platform is designed to streamline the pet care process by integrating document storage, online shopping, real-time tracking, and informative content all in one place.",
    thumbnail: "",
    duration: "2024",
    aboutProject: [
      {
        id: 1,
        header: "My Contributions",
        description:
          "I played a pivotal role in architecting and implementing the user interface using React, ensuring a seamless and responsive experience for all users. Additionally, I integrated backend APIs built with Node and Express, optimizing data flow and secure authentication. My contributions were critical in connecting the frontend to a robust MongoDB database, supporting smooth CRUD operations throughout the platform.",
        image: "",
      },
      {
        id: 2,
        header: "Pet Data Management",
        description:
          "I developed a comprehensive dashboard that empowers users to securely store and manage all their pet-related documents, from medical records to vaccination details. The feature is designed with both security and ease-of-use in mind, ensuring that pet owners can effortlessly access and update important information. This module forms the backbone of PetEye’s data management capability, centralizing essential pet data in one accessible location.",
        image: "",
      },
      {
        id: 3,
        header: "Pet Shop",
        description:
          "I built an engaging e-commerce interface where users can browse and purchase pet essentials such as food, toys, and vaccines. The shop is equipped with smooth navigation, intuitive filtering options, and a secure shopping cart system that enhances the overall buying experience. This module not only increases user engagement but also drives revenue by offering a one-stop solution for pet supplies.",
        image: "",
      },
      {
        id: 4,
        header: "Smart Pet Tag & Tracking",
        description:
          "I contributed to the development of a cutting-edge pet tracking system that integrates smart pet tags with real-time GPS tracking. The system allows owners to activate a 'Lost Mode' so that, in case of an emergency, anyone scanning the tag can access vital pet details and contact the owner directly. This feature significantly enhances pet safety and promotes community-driven support for recovering lost pets.",
        image: "",
      },
      {
        id: 5,
        header: "Pet Articles & Community",
        description:
          "I helped design and implement a dedicated blog and community section where pet owners can access insightful articles and share personal experiences. This module fosters a supportive environment by providing valuable pet care tips and enabling peer-to-peer engagement. It positions PetEye as not just a service provider, but also as a trusted resource in the pet care community.",
        image: "",
      },
      {
        id: 6,
        header: "Pet Profile",
        description:
          "I implemented an interactive pet profile feature that allows users to create detailed profiles for their pets, including information such as breed, age, and medical history. This component ensures that all pertinent pet information is easily accessible and continuously updated. The personalized profiles empower pet owners to keep a comprehensive record of their pet’s well-being, contributing to proactive pet care.",
        image: "",
      },
    ],
  },
  {
    id: 2,
    tech: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB"],
    type: "Personal Project",
    name: "PodHead",
    link: "https://podhead.netlify.app",
    projectDescription:
      "PodHead is a web application designed to aggregate and curate podcasts from multiple platforms like YouTube, bringing them all into one place for a seamless and unified listening experience. Unlike API-based podcast aggregation, we manually curate high-quality podcasts across diverse genres to ensure an enriched listening experience.",
    thumbnail: "",
    aboutProject: [
      {
        id: 1,
        header: "Team & Responsibilities",
        description:
          "PodHead is a collaborative project built by me and my friend. I handle the frontend development using React and TailwindCSS while also contributing to backend development with Node.js and Express to expand my backend skills. My friend focuses primarily on backend development, ensuring seamless data management and server-side functionalities.",
        image: "",
      },
      {
        id: 2,
        header: "Curated Podcast Collection",
        description:
          "Unlike automated API-based podcast aggregation, we handpick and manage podcast content manually to ensure quality. This approach allows us to offer high-value content across various genres without the limitations of platform restrictions.",
      },
      {
        id: 3,
        header: "Diverse Genre Selection",
        description:
          "PodHead offers an extensive range of categories like tech, business, self-improvement, and entertainment. I developed the frontend UI for smooth navigation and easy discovery of content based on user interests.",
      },
      {
        id: 4,
        header: "Personalized Experience",
        description:
          "Users can bookmark favorite episodes and receive tailored recommendations. I worked on designing and implementing these UI components, while my friend handled the backend logic for user preferences and data storage.",
      },
      {
        id: 5,
        header: "Smart Search & Filters",
        description:
          "To enhance discoverability, we implemented an advanced search and filtering system. I developed the frontend experience for these features, while my friend worked on the backend logic to efficiently fetch and filter results.",
      },
      {
        id: 6,
        header: "Minimalist & Intuitive UI",
        description:
          "PodHead features a clean and distraction-free interface. I focused on crafting an intuitive UI that enhances the listening experience, ensuring smooth interactions across devices.",
      },
      {
        id: 7,
        header: "Cross-Device Accessibility",
        description:
          "With full responsiveness in mind, I ensured PodHead provides a seamless experience across mobile, tablet, and desktop devices, adapting effectively to different screen sizes.",
      },
      {
        id: 8,
        header: "Future Plans",
        description:
          "We plan to introduce AI-powered recommendations, social sharing, and user-created podcast libraries. These enhancements will make PodHead an even more interactive and personalized platform.",
      },
    ],
  },
  {
    id: 3,
    tech: ["React", "CSS"],
    type: "Personal Project",
    name: "Dev Fort",
    link: "https://devfort.vercel.app",
    projectDescription:
      "Dev Fort is a dedicated platform for web developers, offering a rich collection of resources to boost productivity and skill development. It provides up-to-date tools, tutorials, and insights in one centralized place.",
    thumbnail: "",
    aboutProject: [
      {
        id: 1,
        header: "Purpose & Vision",
        description:
          "Dev Fort is built to be a go-to hub for developers, offering essential learning materials, coding challenges, and industry best practices. It ensures that both beginners and experienced developers have access to high-quality resources for continuous growth.",
      },
      {
        id: 2,
        header: "Tech Stack & Development",
        description:
          "The project is developed using React for a dynamic and interactive user experience, while CSS ensures a clean and responsive design. The focus was on creating an intuitive and efficient interface for developers to easily explore various tools and tutorials.",
      },
      {
        id: 3,
        header: "Comprehensive Resource Hub",
        description:
          "Dev Fort hosts a variety of resources, including web development tutorials, productivity-enhancing tools, roadmaps, and insightful articles. These resources help developers stay updated with the latest trends in the industry.",
      },
      {
        id: 4,
        header: "User-Centric Design",
        description:
          "The platform is designed with simplicity and usability in mind. A minimalist yet effective UI ensures a smooth navigation experience, allowing developers to quickly find the tools and learning materials they need.",
      },
      {
        id: 5,
        header: "Future Enhancements",
        description:
          "Planned updates include user accounts, personalized learning paths, and a community-driven section where developers can contribute content and insights.",
      },
    ],
  },
  {
    id: 4,
    tech: ["HTML", "CSS", "JavaScript"],
    type: "Personal Project",
    name: "Roll The Dice",
    link: "https://prgvaibhav.github.io/Roll_The_Dice/",
    projectDescription:
      "Roll The Dice is a simple and fun dice game built using HTML, CSS, and JavaScript. It’s a great little project for anyone looking to add a bit of randomness and excitement to their day.",
    thumbnail: "", // Add image URLs here
    aboutProject: [
      {
        id: 1,
        header: "What is Roll The Dice?",
        description:
          "This project is a small web-based dice game designed purely for fun. Whether you’re deciding who goes first in a board game or just feeling lucky, this game lets you roll the dice with a single click.",
      },
      {
        id: 2,
        header: "How It Works",
        description:
          "The game is super simple—you click a button, and the dice roll to give you a random number between 1 and 6. There are no complicated rules, just a straightforward and interactive experience.",
      },
      {
        id: 3,
        header: "Tech Behind the Game",
        description:
          "This project was built using only HTML, CSS, and JavaScript. JavaScript handles the random number generation and updates the dice face accordingly, while CSS keeps the UI clean and simple.",
      },
      {
        id: 4,
        header: "No Future Updates (For Now!)",
        description:
          "This was a fun little project to play around with JavaScript and DOM manipulation. It’s finished as it is, and there are no major updates planned—but it was a great learning experience!",
      },
    ],
  },
  {
    id: 5,
    tech: ["React", "TailwindCSS", "TMDB API"],
    type: "Personal Project",
    name: "Movie Gyaan",
    link: "https://moviegyaaan.netlify.app/",
    projectDescription:
      "Movie Gyaan is a go-to platform for movie enthusiasts, offering detailed insights into a wide range of films. From ratings to budgets, this site provides everything you need to explore the world of cinema.",
    thumbnail: "",
    aboutProject: [
      {
        id: 1,
        header: "All-in-One Movie Information Hub",
        description:
          "Whether you're looking for ratings, languages, genres, revenue, or release dates, Movie Gyaan brings all the essential movie details together in one place. It's perfect for both casual viewers and film buffs.",
      },
      {
        id: 2,
        header: "Built for Convenience",
        description:
          "Designed with React and styled using TailwindCSS, the platform offers a fast and smooth user experience. The data is fetched dynamically from the TMDB API, ensuring up-to-date and accurate movie details.",
      },
      {
        id: 3,
        header: "Find Your Next Watch",
        description:
          "Need a movie recommendation? With its clean and intuitive UI, Movie Gyaan makes discovering new films easy. Browse by genre, check ratings, and get all the details before you hit play.",
      },
    ],
  },

  {
    id: 6,
    tech: ["React", "CSS"],
    type: "Personal Project",
    name: "Password Generator",
    link: "https://generate-pass-word.vercel.app/",
    projectDescription:
      "A simple yet powerful password generator that helps users create strong and customizable passwords effortlessly. Built with React.js, this tool ensures security without compromising usability.",
    thumbnail: "",
    aboutProject: [
      {
        id: 1,
        header: "Generate Secure Passwords Instantly",
        description:
          "With just a few clicks, users can generate strong and random passwords tailored to their security needs. No more struggling to come up with unique passwords!",
      },
      {
        id: 2,
        header: "Customization at Its Best",
        description:
          "Users can choose the length and customize the inclusion of numbers, symbols, and uppercase/lowercase letters to create a password that suits their preferences.",
      },
      {
        id: 3,
        header: "Lightweight and User-Friendly",
        description:
          "Designed with a clean and minimal UI, the tool makes password generation quick and hassle-free. Built using React, it delivers a smooth and responsive experience.",
      },
    ],
  },
];
