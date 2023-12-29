import catchupHome from "../assets/home.webp";
import catchupLogin from "../assets/login.webp";
import catchupRegister1 from "../assets/register-1.webp";
import catchupRegister2 from "../assets/register-2.webp";
import catchupHome1 from "../assets/home-1.webp";
import catchupComment1 from "../assets/comment-1.webp";
import catchupComment2 from "../assets/comment-2.webp";
import catchupProfile from "../assets/profile.webp";
import catchupUpdate from "../assets/update.webp";
import newsFlash from "../assets/NewsFlash.webp";
import stayFit1 from "../assets/StayFit1.webp";
import stayFit2 from "../assets/StayFit2.webp";
import stayFit3 from "../assets/StayFit3.webp";
import stayFit4 from "../assets/StayFit4.webp";
import stayFit5 from "../assets/StayFit5.webp";
import edibleoil1 from "../assets/Edibleoil1.webp";
import edibleoil2 from "../assets/Edibleoil2.webp";
import edibleoil3 from "../assets/Edibleoil3.webp";
import edibleoil4 from "../assets/Edibleoil4.webp";
import edibleoil5 from "../assets/Edibleoil5.webp";
import devFortCommunity from "../assets/DevFortCommunity.webp";
import devFortCommunity1 from "../assets/DevFortCommunity1.webp";
import devFortCommunity2 from "../assets/DevFortCommunity2.webp";
import qr from "../assets/QR.webp";
import qr1 from "../assets/QR-1.webp";
import rollTheDice from "../assets/Roll-The-Dice.webp";
import rollTheDice2 from "../assets/Roll-The-Dice-2.webp";
import rollTheDice3 from "../assets/Roll-The-Dice-3.webp";
import gtn1 from "../assets/gtn-1.webp";
import gtn2 from "../assets/gtn-2.webp";
import gtn3 from "../assets/gtn-3.webp";
import gtn4 from "../assets/gtn-4.webp";
import gtn5 from "../assets/gtn-5.webp";
import movieGyaaan1 from "../assets/movieGyaaan-1.webp";
import movieGyaaan2 from "../assets/movieGyaaan-2.webp";
import movieGyaaan3 from "../assets/movieGyaaan-3.webp";
import movieGyaaan4 from "../assets/movieGyaaan-4.webp";

import tictactoe1 from "../assets/tic-tac-toe-start.webp";
import tictactoe2 from "../assets/tic-tac-toe-name.webp";
import tictactoe3 from "../assets/tic-tac-toe-ui.webp";
import tictactoe4 from "../assets/tic-tac-toe-game.webp";
import tictactoe5 from "../assets/tic-tac-toe-winner.webp";
import pd1 from "../assets/password-generator.webp";
import pd2 from "../assets/password.webp";
import pd3 from "../assets/password-copy.webp";

// Icons
import {
  FaFortAwesome,
  FaDice,
  FaOilCan,
  FaNewspaper,
  FaQrcode,
  FaHashtag,
} from "react-icons/fa";
import { TiSocialAtCircular } from "react-icons/ti";
import { RiMovie2Fill } from "react-icons/ri";
import { GoNumber } from "react-icons/go";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { TbPasswordFingerprint } from "react-icons/tb";

export const ProjectData = [
  {
    id: 1,
    title: "CatchUp",
    description:
      "This project is a full-stack social media website developed using React for the frontend, Node.js and Express.js for the backend, and MySQL for the database. The primary objective is to provide users with a platform to connect, share thoughts, and engage with each other through posts, comments, and likes.",
    date: "2023-01-01",
    completed: false,
    seenId: 7,
    techStack: ["React", "CSS", "Node.js", "Express.js", "MySQL"],
    icon: <TiSocialAtCircular />,
    keyFeatures: [
      {
        id: 1,
        title: "User Authentication",
        features: [
          {
            id: 1,
            featureOne:
              "Users can create accounts securely with a unique userurl and password.",
          },
          {
            id: 2,
            featureTwo:
              "Passwords are encrypted and stored in the database for enhanced security.",
          },
        ],
      },
      {
        id: 2,
        title: "User Profiles",
        features: [
          {
            id: 1,
            featureOne:
              "Each user has a personalized profile page displaying their posts and activity.",
          },
          {
            id: 2,
            featureTwo:
              "Profile pictures and user information are customizable.",
          },
        ],
      },
      {
        id: 3,
        title: "Post Creation and Sharing",
        features: [
          {
            id: 1,
            featureOne:
              "Users can compose and share their thoughts through posts.",
          },
          {
            id: 2,
            featureTwo:
              "Posts support text, images, and other multimedia content.",
          },
        ],
      },
      {
        id: 4,
        title: "Social Interactions",
        features: [
          {
            id: 1,
            featureOne: "Users can engage with posts by liking and commenting.",
          },
          {
            id: 2,
            featureTwo:
              "Real-time updates on likes and comments provide an interactive experience.",
          },
        ],
      },
      {
        id: 5,
        title: "News Feed",
        features: [
          {
            id: 1,
            featureOne:
              "The homepage features a dynamic news feed showcasing posts from the user's network.",
          },
          {
            id: 2,
            featureTwo:
              "Algorithmic timeline displays relevant and engaging content.",
          },
        ],
      },
      {
        id: 6,
        title: "Follow and Unfollow",
        features: [
          {
            id: 1,
            featureOne:
              "Users can follow and unfollow other users to customize their network.",
          },
          {
            id: 2,
            featureTwo:
              "Follower count and following count are displayed on user profiles.",
          },
        ],
      },
    ],
    images: [
      {
        id: 1,
        url: catchupHome,
        alt: "Social media website front page",
      },
      {
        id: 2,
        url: catchupLogin,
        alt: "Social media website login page",
      },
      {
        id: 3,
        url: catchupRegister1,
        alt: "Social media website register page",
      },
      {
        id: 4,
        url: catchupRegister2,
        alt: "Social media website register page",
      },
      {
        id: 5,
        url: catchupHome1,
        alt: "Social media website front page",
      },
      {
        id: 6,
        url: catchupComment1,
        alt: "Social media website comment page",
      },
      {
        id: 7,
        url: catchupComment2,
        alt: "Social media website comment page",
      },
      {
        id: 8,
        url: catchupProfile,
        alt: "Social media website profile page",
      },
      {
        id: 9,
        url: catchupUpdate,
        alt: "Social media website update page",
      },
    ],
  },
  {
    id: 2,
    title: "NewsFlashh",
    description:
      "NewsFlashh is a dynamic news website built with React, offering users a convenient platform to stay informed about the latest news. The website utilizes the Inshot API to fetch and display up-to-date news articles, providing a seamless and engaging news-reading experience.",
    date: "2022-04-10",
    completed: true,
    seenId: 8,
    techStack: ["React", "CSS", "Inshot API"],
    icon: <FaNewspaper />,
    keyFeatures: [
      {
        id: 1,
        title: "Real-Time News Updates",
        features: [
          {
            id: 1,
            featureOne:
              "The website leverages the Inshot API to fetch the most recent and relevant news articles.",
          },
          {
            id: 2,
            featureTwo:
              "Users can stay informed with real-time updates on various topics.",
          },
        ],
      },
      {
        id: 2,
        title: "User-Friendly Interface",
        features: [
          {
            id: 1,
            featureOne:
              "The user interface is designed to be intuitive and visually appealing.",
          },
          {
            id: 2,
            featureTwo:
              "Navigation is straightforward, allowing users to easily access different news categories.",
          },
        ],
      },
      {
        id: 3,
        title: "News Categories",
        features: [
          {
            id: 1,
            featureOne:
              "News articles are categorized into different topics such as politics, technology, sports, entertainment, and more.",
          },
          {
            id: 2,
            featureTwo:
              "Users can explore specific categories based on their interests.",
          },
        ],
      },
      {
        id: 4,
        title: "Responsive Design",
        features: [
          {
            id: 1,
            featureOne:
              "The website is designed to be responsive, ensuring a seamless experience across different devices and screen sizes.",
          },
          {
            id: 2,
            featureTwo:
              "Mobile-friendly layout for on-the-go news consumption.",
          },
        ],
      },
    ],
    images: [
      {
        id: 1,
        url: newsFlash,
        alt: "News website front page",
      },
    ],
    liveLink: "https://newsflashh.netlify.app/",
    gitHubLink: "https://kumarvaibhav.netlify.app/",
  },
  {
    id: 3,
    title: "StayFit",
    description:
      "StayFit is a sleek and user-friendly website built with React, providing users with a platform to discover the best gyms in their area. The website focuses on an intuitive and visually appealing design to enhance the user experience, offering information about various gyms and fitness centers.",
    date: "2022-04-01",
    completed: true,
    seenId: 6,
    techStack: ["React", "CSS"],
    icon: <MdOutlineSportsGymnastics />,
    images: [
      {
        id: 1,
        url: stayFit1,
        alt: "Gym website front page",
      },
      {
        id: 2,
        url: stayFit2,
        alt: "Gym website front page",
      },
      {
        id: 3,
        url: stayFit3,
        alt: "Gym website front page",
      },
      {
        id: 4,
        url: stayFit4,
        alt: "Gym website front page",
      },
      {
        id: 5,
        url: stayFit5,
        alt: "Gym website front page",
      },
    ],
    liveLink: "https://prgvaibhav.github.io/StayFit/",
    gitHubLink: "https://github.com/PrgVaibhav/StayFit",
  },
  {
    id: 4,
    title: "Edible Oil",
    description:
      "Edible Oil is a professional website crafted for an oil company, showcasing their products, services, and information about the business. Developed using HTML and designed with CSS, this website serves as an online platform to represent the company's brand and engage with potential clients.",
    date: "2022-03-12",
    completed: true,
    seenId: 9,
    techStack: ["HTML", "CSS"],
    keyFeatures: [
      {
        id: 1,
        title: "Product Showcase",
        features: [
          {
            id: 1,
            featureOne:
              "The website displays a comprehensive catalog of edible oils offered by the company.",
          },
          {
            id: 2,
            featureTwo:
              "High-quality images and detailed descriptions provide information about each product.",
          },
        ],
      },
      {
        id: 2,
        title: "Company Information",
        features: [
          {
            id: 1,
            featureOne:
              "A dedicated section introduces visitors to the company, its history, values, and mission.",
          },
          {
            id: 2,
            featureTwo:
              "Contact details and office locations are prominently featured for easy accessibility.",
          },
        ],
      },
      {
        id: 3,
        title: "Responsive Design",
        features: [
          {
            id: 1,
            featureOne:
              "The website is designed to be responsive, ensuring a consistent and enjoyable experience across different devices and screen sizes.",
          },
          {
            id: 2,
            featureTwo:
              "Mobile-friendly layout for users accessing the site on smartphones and tablets.",
          },
        ],
      },
      {
        id: 4,
        title: "Contact and Inquiry Form",
        features: [
          {
            id: 1,
            featureOne:
              "An interactive contact form allows visitors to reach out to the company with inquiries.",
          },
          {
            id: 2,
            featureTwo:
              "Form submissions are securely sent to the company's designated email address.",
          },
        ],
      },
      {
        id: 5,
        title: "Interactive Galleries",
        features: [
          {
            id: 1,
            featureOne:
              "Engaging image galleries showcase the manufacturing process, quality control, and other aspects of the company.",
          },
          {
            id: 2,
            featureTwo:
              "Supports an immersive visual experience for website visitors.",
          },
        ],
      },
      {
        id: 6,
        title: "Service Offerings",
        features: [
          {
            id: 1,
            featureOne:
              "Information about additional services provided by the company, such as bulk orders, custom blends, and distribution channels.",
          },
        ],
      },
    ],
    icon: <FaOilCan />,
    images: [
      {
        id: 1,
        url: edibleoil1,
        alt: "Edible oil website front page",
      },
      {
        id: 2,
        url: edibleoil2,
        alt: "Edible oil website front page",
      },
      {
        id: 3,
        url: edibleoil3,
        alt: "Edible oil website front page",
      },
      {
        id: 4,
        url: edibleoil4,
        alt: "Edible oil website front page",
      },
      {
        id: 5,
        url: edibleoil5,
        alt: "Edible oil website front page",
      },
    ],
    liveLink: "https://prgvaibhav.github.io/Oil-Manufacturing/",
    gitHubLink: "https://github.com/PrgVaibhav/Oil-Manufacturing",
  },
  {
    id: 5,
    title: "DevFort",
    description:
      "Dev Fort is a dedicated platform designed as the ultimate destination for web developers, offering a comprehensive collection of resources to enhance productivity and skill development. Built using React and styled with CSS, this website aims to empower developers by providing up-to-date tools, tutorials, and insights.",
    date: "2023-05-18",
    completed: false,
    seenId: 10,
    techStack: ["React", "CSS", "JSON"],
    keyFeatures: [
      {
        id: 1,
        title: "Resource Repository",
        features: [
          {
            id: 1,
            featureOne:
              "Dev Fort curates a vast repository of resources including articles, tutorials, tools, and frameworks.",
          },
          {
            id: 2,
            featureTwo:
              "Developers can explore content relevant to various web development technologies and stay informed about the latest trends.",
          },
        ],
      },
      {
        id: 2,
        title: "Latest Tools and Technologies",
        features: [
          {
            id: 1,
            featureOne:
              "The platform features a section highlighting the latest and most popular tools and technologies in the web development ecosystem.",
          },
          {
            id: 2,
            featureTwo:
              "Developers can discover and adopt new tools to streamline their workflow.",
          },
        ],
      },
      {
        id: 3,
        title: "Tutorials and Guides",
        features: [
          {
            id: 1,
            featureOne:
              "In-depth tutorials and guides cover a wide range of topics, from fundamental concepts to advanced techniques.",
          },
          {
            id: 2,
            featureTwo:
              "Practical examples and step-by-step instructions assist developers in mastering new skills.",
          },
        ],
      },
      {
        id: 4,
        title: "Responsive Design",
        features: [
          {
            id: 1,
            featureOne:
              "The website is crafted with a responsive design, ensuring a seamless and enjoyable experience across devices of varying screen sizes.",
          },
          {
            id: 2,
            featureTwo: "Mobile-friendly layout for developers on the go.",
          },
        ],
      },
    ],
    icon: <FaFortAwesome />,
    images: [
      {
        id: 1,
        url: devFortCommunity,
        alt: "DevFort website front page",
      },
      {
        id: 2,
        url: devFortCommunity1,
        alt: "DevFort website front page",
      },
      {
        id: 3,
        url: devFortCommunity2,
        alt: "DevFort website front page",
      },
    ],
    liveLink: "https://devfort.vercel.app/",
    gitHubLink: "https://github.com/PrgVaibhav/devFort",
  },
  {
    id: 6,
    title: "QR Code Generator",
    description:
      "The QR Code Generator is a user-friendly website developed with React and styled using CSS, allowing users to generate QR codes for various types of data, including text, links, and numbers. The website utilizes a QR code API to dynamically generate QR codes, providing a fun and convenient tool for users.",
    date: "2023-03-09",
    completed: true,
    seenId: 7,
    techStack: ["React", "CSS", "QR Code API"],
    icon: <FaQrcode />,
    keyFeatures: [
      {
        id: 1,
        title: "Dynamic QR Code Generation",
        features: [
          {
            id: 1,
            featureOne:
              "Users can easily generate QR codes for text, URLs, phone numbers, and other data types.",
          },
          {
            id: 2,
            featureTwo:
              "The website dynamically interfaces with a QR code API to generate unique QR codes on the fly.",
          },
        ],
      },
      {
        id: 2,
        title: "User-Friendly Interface",
        features: [
          {
            id: 1,
            featureOne:
              "The website features an intuitive and clean design for a seamless user experience.",
          },
          {
            id: 2,
            featureTwo:
              "Clear instructions guide users on how to use the QR code generator.",
          },
        ],
      },
      {
        id: 3,
        title: "Multiple Data Types",
        features: [
          {
            id: 1,
            featureOne:
              "Supports the generation of QR codes for various data types, including plain text, URLs, phone numbers, and email addresses.",
          },
        ],
      },
      {
        id: 4,
        title: "Download and Share Options",
        features: [
          {
            id: 1,
            featureOne:
              "Once a QR code is generated, users can download it as an image file for offline use.",
          },
          {
            id: 2,
            featureTwo:
              "Sharing options enable users to share the generated QR code with others through social media or messaging platforms.",
          },
        ],
      },
      {
        id: 5,
        title: "Responsive Design",
        features: [
          {
            id: 1,
            featureOne:
              "The website is designed to be responsive, ensuring a consistent and enjoyable experience across different devices and screen sizes.",
          },
          {
            id: 2,
            featureTwo:
              "Mobile-friendly layout for users on smartphones and tablets.",
          },
        ],
      },
    ],
    images: [
      {
        id: 1,
        url: qr,
        alt: "DevFort website front page",
      },
      {
        id: 2,
        url: qr1,
        alt: "DevFort website front page",
      },
    ],
    liveLink: "https://qr-generator-devxvaibhav.vercel.app/",
    gitHubLink: "https://github.com/PrgVaibhav/QR_Code_Generator",
  },
  {
    id: 7,
    title: "Roll The Dice",
    description:
      "Roll The Dice is an entertaining game website created with HTML, CSS, and JavaScript. Designed for friends to enjoy together, the game simulates the rolling of dice, adding an element of chance and excitement to the experience. The project combines front-end technologies to deliver a fun and interactive gaming platform.",
    date: "2023-05-15",
    completed: true,
    seenId: 10,
    techStack: ["HTML", "CSS", "JavaScript"],
    icon: <FaDice />,
    keyFeatures: [
      {
        id: 1,
        title: "Virtual Dice Rolling",
        features: [
          {
            id: 1,
            featureOne:
              "Users can simulate the rolling of dice by clicking a button.",
          },
          {
            id: 2,
            featureTwo:
              "The website visually displays the result of each roll with animated dice graphics.",
          },
        ],
      },
      {
        id: 2,
        title: "Multiplayer Mode",
        features: [
          {
            id: 1,
            featureOne:
              "Supports multiplayer gameplay, allowing friends to take turns rolling the dice.",
          },
          {
            id: 2,
            featureTwo:
              "Provides a shared and interactive experience for users playing together.",
          },
        ],
      },
      {
        id: 3,
        title: "Realistic Dice Animation",
        features: [
          {
            id: 1,
            featureOne:
              "The rolling dice animation adds a touch of realism to the game.",
          },
          {
            id: 2,
            featureOne:
              "Enhances the overall user experience with engaging visuals.",
          },
        ],
      },
      {
        id: 4,
        title: "Dynamic Scoreboard",
        features: [
          {
            id: 1,
            featureOne:
              "Keeps track of each player's rolls and displays the results on a dynamic scoreboard",
          },
          {
            id: 2,
            featureTwo:
              "Users can easily see who has the highest or lowest rolls.",
          },
        ],
      },
      {
        id: 5,
        title: "User-friendly Interface",
        features: [
          {
            id: 1,
            featureOne:
              "Intuitive design and clear instructions make it easy for users to understand and play the game.",
          },
          {
            id: 2,
            featureTwo:
              "Simple controls enhance accessibility for players of all ages",
          },
        ],
      },
    ],

    images: [
      {
        id: 1,
        url: rollTheDice,
        alt: "Roll the dice game",
      },
      {
        id: 2,
        url: rollTheDice2,
        alt: "Roll the dice game",
      },
      {
        id: 3,
        url: rollTheDice3,
        alt: "Roll the dice game",
      },
    ],
    liveLink: "https://prgvaibhav.github.io/Roll_The_Dice/",
    gitHubLink: "https://github.com/PrgVaibhav/Roll_The_Dice",
  },
  {
    id: 8,
    title: "Guess The Number",
    description:
      "Guess The Number is an engaging game website crafted with HTML, CSS, and JavaScript. Designed for friendly competition, the game challenges users to guess a randomly generated number within a specified range. The project incorporates front-end technologies to deliver an interactive and entertaining gaming experience.",
    date: "2023-05-14",
    completed: true,
    seenId: 9,
    techStack: ["HTML", "CSS", "JavaScript"],
    keyFeatures: [
      {
        id: 1,
        title: "Random Number Generation",
        features: [
          {
            id: 1,
            featureOne:
              "The game generates a random number within a predefined range.",
          },
          {
            id: 2,
            featureTwo:
              "Players must guess this secret number to win the game.",
          },
        ],
      },
      {
        id: 2,
        title: "User Input and Validation",
        features: [
          {
            id: 1,
            featureOne:
              "Users can input their guesses through a text input field.",
          },
          {
            id: 2,
            featureTwo:
              "The game validates input to ensure it is within the specified range and is a valid number.",
          },
        ],
      },
      {
        id: 3,
        title: "Feedback and Clues",
        features: [
          {
            id: 1,
            featureOne:
              "Provides feedback to users after each guess, indicating whether the guess is too high, too low, or correct.",
          },
          {
            id: 2,
            featureOne:
              "Clues assist players in narrowing down the possible correct numbers.",
          },
        ],
      },
      {
        id: 4,
        title: "Score Tracking",
        features: [
          {
            id: 1,
            featureOne:
              "Keeps track of the number of attempts each player takes to guess the correct number.",
          },
          {
            id: 2,
            featureTwo:
              "Displays a dynamic scoreboard for friendly competition.",
          },
        ],
      },
      {
        id: 5,
        title: "Responsive Design",
        features: [
          {
            id: 1,
            featureOne:
              "The website is designed to be responsive, ensuring an enjoyable experience on various devices and screen sizes.",
          },
          {
            id: 2,
            featureTwo:
              "Enables users to play the game seamlessly on desktops, laptops, and mobile devices.",
          },
        ],
      },
      {
        id: 6,
        title: "User-friendly Interface:",
        features: [
          {
            id: 1,
            featureOne:
              "Intuitive design and clear instructions make it easy for users to understand and play the game.",
          },
          {
            id: 2,
            featureTwo:
              "Simple controls enhance accessibility for players of all ages.",
          },
        ],
      },
    ],
    icon: <GoNumber />,
    images: [
      {
        id: 1,
        url: gtn1,
        alt: "DevFort website front page",
      },
      {
        id: 2,
        url: gtn2,
        alt: "DevFort website front page",
      },
      {
        id: 3,
        url: gtn3,
        alt: "DevFort website front page",
      },
      {
        id: 4,
        url: gtn4,
        alt: "DevFort website front page",
      },
      {
        id: 5,
        url: gtn5,
        alt: "DevFort website front page",
      },
    ],
    liveLink: "https://prgvaibhav.github.io/Guess_the_number/",
    gitHubLink: "https://github.com/PrgVaibhav/Guess_the_number",
  },
  {
    id: 9,
    title: "Movie Gyaaan",
    description:
      "Movie Gyaaan is a comprehensive website dedicated to providing in-depth details about a vast array of movies. Whether you're a movie enthusiast, critic, or someone seeking recommendations, MovieHub covers it all. The platform offers detailed information, including ratings, languages, genres, revenue, budget, and release dates, ensuring users have a wealth of information at their fingertips.",
    date: "2023-07-28",
    completed: false,
    seenId: 10,
    techStack: ["React", "CSS", "TMDB API"],
    keyFeatures: [
      {
        id: 1,
        title: "Extensive Movie Database",
        features: [
          {
            id: 1,
            featureOne:
              "Movie Gyaaan uses an extensive database (TMDB API) covering a wide range of movies.",
          },
          {
            id: 2,
            featureTwo:
              "Users can explore details about both classic and contemporary films.",
          },
        ],
      },
      {
        id: 2,
        title: "Detailed Movie Information",
        features: [
          {
            id: 1,
            featureOne:
              "Each movie page provides comprehensive details, including ratings, languages, genres, revenue, budget, and release dates.",
          },
          {
            id: 2,
            featureTwo:
              "Users can make informed decisions about which movies to watch based on their preferences.",
          },
        ],
      },
      {
        id: 3,
        title: "Searching Options",
        features: [
          {
            id: 1,
            featureOne:
              "Users can easily search for specific movies. Enhances the user experience by providing tailored results.",
          },
        ],
      },
      {
        id: 4,
        title: "Responsive Design",
        features: [
          {
            id: 1,
            featureOne:
              "Movie Gyaaan is designed with responsiveness in mind, ensuring an optimal viewing experience on various devices and screen sizes.",
          },
          {
            id: 2,
            featureTwo:
              "Allows users to access movie information seamlessly on desktops, laptops, and mobile devices.",
          },
        ],
      },
    ],
    icon: <RiMovie2Fill />,
    images: [
      {
        id: 1,
        url: movieGyaaan1,
        alt: "Movie Gyaaan website page",
      },
      {
        id: 2,
        url: movieGyaaan2,
        alt: "Movie Gyaaan website front page",
      },
      {
        id: 3,
        url: movieGyaaan3,
        alt: "Movie Gyaaan website front page",
      },
      {
        id: 4,
        url: movieGyaaan4,
        alt: "Movie Gyaaan website front page",
      },
    ],
    liveLink: "https://moviegyaaan.netlify.app/",
    gitHubLink: "https://github.com/PrgVaibhav/moviezone",
  },
  {
    id: 10,
    title: "TIC-TAC-TOE",
    description:
      "Enjoy a classic gaming experience with this simple and interactive Tic Tac Toe game implemented using HTML, CSS, and JavaScript. This timeless game allows two players to take turns marking cells in a 3x3 grid, aiming to achieve a winning combination. Whether you're looking for a quick match or a nostalgic gaming session, this Tic Tac Toe game provides the perfect platform.",
    date: "2023-07-28",
    completed: true,
    seenId: 11,
    techStack: ["HTML", "CSS", "JavaScript"],
    keyFeatures: [
      {
        id: 1,
        title: "Interactive Gameplay",
        features: [
          {
            id: 1,
            featureOne:
              "Two players can take turns to play the game, providing a real-time and engaging experience.",
          },
          {
            id: 2,
            featureTwo:
              "Clicking on the grid allows players to mark their moves with `X` and `O.`",
          },
        ],
      },
      {
        id: 2,
        title: "Winning Combinations",
        features: [
          {
            id: 1,
            featureOne:
              "The game dynamically checks for winning combinations after each move.",
          },
          {
            id: 2,
            featureTwo:
              "A player wins if they have three consecutive marks horizontally, vertically, or diagonally.",
          },
        ],
      },
      {
        id: 3,
        title: "Game State Tracking",
        features: [
          {
            id: 1,
            featureOne:
              "Players are informed of the game outcome, whether it's a win, draw, or an ongoing match.",
          },
        ],
      },
      {
        id: 4,
        title: "Reset and Replay",
        features: [
          {
            id: 1,
            featureOne:
              "After a game concludes, players can choose to reset the board for a new match.",
          },
          {
            id: 2,
            featureTwo:
              "The replay option ensures a seamless transition to the next round.",
          },
        ],
      },
      {
        id: 5,
        title: "Responsive Design",
        features: [
          {
            id: 1,
            featureOne:
              "The game is designed to be responsive, providing an optimal gaming experience on various devices and screen sizes.",
          },
          {
            id: 2,
            featureTwo:
              "Supports gameplay on desktops, laptops, and mobile devices.",
          },
        ],
      },
      {
        id: 6,
        title: "User-friendly Interface",
        features: [
          {
            id: 1,
            featureOne:
              "Intuitive design and clear instructions make it easy for players to understand and enjoy the game.",
          },
          {
            id: 2,
            featureTwo:
              "Simple controls enhance accessibility for players of all ages.",
          },
        ],
      },
    ],
    icon: <FaHashtag />,
    images: [
      {
        id: 1,
        url: tictactoe1,
        alt: "TIC-TAC-TOE start page",
      },
      {
        id: 2,
        url: tictactoe2,
        alt: "TIC-TAC-TOE name box",
      },
      {
        id: 3,
        url: tictactoe3,
        alt: "TIC-TAC-TOE game page",
      },
      {
        id: 4,
        url: tictactoe4,
        alt: "TIC-TAC-TOE players playing game",
      },
      {
        id: 5,
        url: tictactoe5,
        alt: "TIC-TAC-TOE winner UI",
      },
    ],
    liveLink: "https://prgvaibhav.github.io/Tic-Tac-Toe/",
    gitHubLink: "https://github.com/PrgVaibhav/Tic-Tac-Toe",
  },
  {
    id: 11,
    title: "Password Generator",
    description:
      "Password Generator is a robust and user-friendly password generator web application built using React.js and styled with CSS. The project aims to provide a secure and customizable solution for users who need strong and unique passwords for their online accounts. The application empowers users to generate passwords based on their preferences, ensuring a balance between security and usability.",
    date: "2023-07-28",
    completed: true,
    seenId: 10,
    techStack: ["React", "CSS"],
    keyFeatures: [
      {
        id: 1,
        title: "Secure Password Generation",
        features: [
          {
            id: 1,
            featureOne:
              "Employs best practices in password security to meet industry standards.",
          },
          {
            id: 2,
            featureTwo:
              "Users can customize their passwords based on criteria such as length, including uppercase and lowercase letters, numbers, and special characters.",
          },
        ],
      },
      {
        id: 2,
        title: "Copy to Clipboard",
        features: [
          {
            id: 1,
            featureOne:
              "Users can easily copy the generated password to the clipboard with a single click.",
          },
          {
            id: 2,
            featureTwo:
              "Provides a user-friendly interface with checkboxes for easy customization.",
          },
        ],
      },
      {
        id: 3,
        title: "Randomization Algorithms",
        features: [
          {
            id: 1,
            featureOne:
              "Implements robust algorithms for randomization, ensuring that generated passwords are not predictable.",
          },
        ],
      },
      {
        id: 4,
        title: "Responsive Design",
        features: [
          {
            id: 1,
            featureOne:
              "The web application is designed to be responsive, ensuring a consistent and enjoyable experience across various devices and screen sizes.",
          },
          {
            id: 2,
            featureTwo:
              "Supports accessibility on desktops, laptops, tablets, and smartphones.",
          },
        ],
      },
      {
        id: 5,
        title: "Interactive User Interface",
        features: [
          {
            id: 1,
            featureOne:
              "The user interface is intuitive and interactive, guiding users through the password generation process with clear instructions.",
          },
          {
            id: 2,
            featureTwo:
              "Real-time updates and dynamic elements enhance the overall user experience.",
          },
        ],
      },
    ],
    icon: <TbPasswordFingerprint />,
    images: [
      {
        id: 1,
        url: pd1,
        alt: "Password Generator website front page",
      },
      {
        id: 2,
        url: pd2,
        alt: "Password Generator website front page",
      },
      {
        id: 3,
        url: pd3,
        alt: "Password Generator website front page",
      },
    ],
    liveLink: "https://generate-pass-word.vercel.app/",
    gitHubLink: "https://github.com/PrgVaibhav/Password-Generator",
  },
];
