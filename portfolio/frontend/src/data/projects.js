// import the images
import netflixImage from "../assets/images/project/Netflex.jpg";
import amazonImage from "../assets/images/project/Amazon.jpg";
import evangadiImage from "../assets/images/project/Evangadi.jpg";
import garageImage from "../assets/images/project/jossi.jpg";
export const projects = [
  {
    id: 1,
    title: "Netflix Clone",
    description:
      "Streaming platform clone featuring personalized recommendations, profiles, and video playback.",
    image: netflixImage,
    category: "Front end",
    technology: ["React", "JavaScript", "CSS Modules"],
    metrics: "1K+ npm downloads",
    demoUrl: "https://jossi21.github.io/Netflix-clone-2025/",
    githubUrl: "https://github.com/jossi21/Netflix-clone-2025",
  },
  {
    id: 2,
    title: "Amazon Clone",
    description:
      "Full-stack Amazon clone with user authentication, product catalog, shopping cart, and secure payment gateway integration.",
    image: amazonImage,
    category: "Full-stack",
    technology: ["React", "JavaScript", "Node.js", "CSS Modules"],
    metrics: "500+ npm downloads",
    demoUrl: "https://amazon-fronend-clone.netlify.app/",
    githubUrl: "https://github.com/jossi21/Amazon-frontend-clone-2025",
  },
  {
    id: 3,
    title: "Evangadi Forum",
    description:
      "Interactive Q&A forum where users can post questions, provide answers, and vote on helpful community contributions about programming.",
    image: evangadiImage,
    category: "Full-stack",
    technology: ["React", "JavaScript", "Node.js", "CSS Modules"],
    metrics: "500+ npm downloads",
    demoUrl: "https://evangadi-forum-by-jossi.netlify.app/",
    githubUrl: "https://github.com/jossi21/Evangadi_Forum",
  },
  {
    id: 4,
    title: "Jossi Garage",
    description:
      "🚗 Full-stack auto repair management system (React + Node.js)",
    image: garageImage,
    category: "Full-stack",
    technology: ["React", "JavaScript", "Node.js", "CSS Modules"],
    metrics: "500+ npm downloads",
    demoUrl: "https://jossi-garage.netlify.app/",
    githubUrl: "https://github.com/jossi21/jossi-garage",
  },
];

export const categories = ["All", "Web Apps", "Full Stack", "Front End"];
