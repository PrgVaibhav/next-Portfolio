import catchUpHome from "../assets/home.webp";
import catchUpLogin from "../assets/login.webp";
import catchUpRegister from "../assets/register-1.webp";
import catchUpRegister2 from "../assets/register-2.webp";
import catchUpHome1 from "../assets/home-1.webp";
import catchUpComment1 from "../assets/comment-1.webp";
import catchUpComment2 from "../assets/comment-2.webp";
import catchUpProfile from "../assets/profile.webp";
import catchUpUpdate from "../assets/update.webp";
import portfolio from "../assets/VaibhavKumar.webp";
import newsWebsite from "../assets/NewsFlash.webp";
import stayFit from "../assets/StayFit1.webp";
import stayFit2 from "../assets/StayFit2.webp";
import stayFit3 from "../assets/StayFit3.webp";
import stayFit4 from "../assets/StayFit4.webp";
import stayFit5 from "../assets/StayFit5.webp";
import edibleOil1 from "../assets/Edibleoil1.webp";
import edibleOil2 from "../assets/Edibleoil2.webp";
import edibleOil3 from "../assets/Edibleoil3.webp";
import edibleOil4 from "../assets/Edibleoil4.webp";
import edibleOil5 from "../assets/Edibleoil5.webp";
import musifyy from "../assets/Musifyy.webp";

export const ProjectData = [
  {
    id: 1,
    title: "CatchUp",
    description:
      "This project has been created using React, NodeJs, ExpressJs, MySql. Project aim was to create a social media website where users can create their own account, post their thoughts, like and comment on other posts.",

    image1: catchUpHome,
    image2: catchUpLogin,
    image3: catchUpRegister,
    image4: catchUpRegister2,
    image5: catchUpHome1,
    image6: catchUpComment1,
    image7: catchUpComment2,
    image8: catchUpProfile,
    image9: catchUpUpdate,
    alt: "Social media website front page",
    completed: false,
  },
  {
    id: 2,
    title: "Portfolio V-1",
    description:
      "This was my first portfolio website. I have created this website using HTML, CSS, JavaScript. Creating this website was a great learning experience for me. I have learned a lot about HTML, CSS, JavaScript and how to use them to create a website.",
    image1: portfolio,
    alt: "Portfolio website front page",
    liveLink: "https://prgvaibhav.github.io/index.html",
    gitHubLink: "https://github.com/PrgVaibhav/prgVaibhav.github.io",
    completed: true,
  },
  {
    id: 3,
    title: "NewsFlashh",
    description:
      "NewsFlashh is a news website where users can read the latest news. This website has been created using React and designed using css. I have used Inshot API to fetch the latest news.",
    image1: newsWebsite,

    alt: "News website front page",
    liveLink: "https://newsflashh.netlify.app/",
    gitHubLink: "https://kumarvaibhav.netlify.app/",
    completed: true,
  },
  {
    id: 4,
    title: "StayFit",
    description:
      "StayFit is a website where users can find the best GYM. Its just a front end work.This website has been created using React and designed using css. ",
    image1: stayFit,
    image2: stayFit2,
    image3: stayFit3,
    image4: stayFit4,
    image5: stayFit5,
    alt: "Gym website front page",

    liveLink: "https://prgvaibhav.github.io/StayFit/",
    gitHubLink: "https://github.com/PrgVaibhav/StayFit",
    completed: true,
  },
  {
    id: 5,
    title: "Edible Oil",
    description:
      "Edible Oil is a website which I created for an oil company. This website has been created using React and designed using css. This website was part of my freelancing work. ",
    image1: edibleOil1,
    image2: edibleOil2,
    image3: edibleOil3,
    image4: edibleOil4,
    image5: edibleOil5,
    alt: "Edible oil website front page",
    liveLink: "https://prgvaibhav.github.io/Oil-Manufacturing/",
    gitHubLink: "https://github.com/PrgVaibhav/Oil-Manufacturing",
    completed: true,
  },
  {
    id: 6,
    title: "Musifyy",
    description:
      "Musifyy is a frontend landing page for a music streaming website. This website has been created using React and designed using css. This website was part of my freelancing work.",
    image1: musifyy,
    alt: "Edible oil website front page",
    liveLink: "https://prgvaibhav.github.io/Musifyy/",
    gitHubLink: "https://github.com/PrgVaibhav/Musifyy",
    completed: true,
  },
];
