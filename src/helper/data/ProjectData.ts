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

import PodHead from "../../assets/images/logo.png";

export const ProjectData: PROJECT_DATA[] = [
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
