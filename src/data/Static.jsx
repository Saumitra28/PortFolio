import html from "../assets/langues/HTML.png";
import reactLangue from "../assets/langues/react.png";
import css from "../assets/langues/css.png";
import github from "../assets/langues/github.png";
import tailwind from "../assets/langues/tailwind.png";
import js from "../assets/langues/js.png";
import bootstrap from "../assets/langues/bootstrap.png";
import c from "../assets/langues/c.png";
import py from "../assets/langues/py.png";
import ScribbleSphere from "../assets/ScribbleSphere.png"
import TaskSphere from "../assets/TaskSphere.png"
import Emowell from "../assets/Emowell.png"
import Cinema from "../assets/Cinema.png"
import redux from "../assets/langues/redux.png";



// Array of work objects
export const works = [
  {
    title: "TaskSphere",
    imgUrl: TaskSphere,
    tech: [
      { name: "react", color: "blue-text-gradient" },
      { name: "Express", color: "blue-text-gradient" },
      { name: "MongoDb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    workUrl: "https://github.com/Saumitra28/TaskSphere",
    duration: "400",
  },
  {
    title: "ScribbleSphere",
    imgUrl: ScribbleSphere,
    tech: [
      { name: "react", color: "blue-text-gradient" },
      { name: "appwrite", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    workUrl: "https://github.com/Saumitra28/ScribbleSphere",
    duration: "400",
  },
  {
    title: "EmoWell",
    imgUrl: Emowell,
    tech: [
      { name: "html", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    workUrl: "https://github.com/Madhav-bansal013/Emowell",
    duration: "500",
  },
  {
    title: "CINEMA",
    imgUrl: Cinema,
    tech: [
      { name: "html", color: "blue-text-gradient" },
      { name: "js", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    workUrl: "https://github.com/Saumitra28/CINEMA",
    duration: "600",
  },
];

// Array of langue objects
export const langues = [
  {
    id: 1,
    src: html,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    src: css,
    title: "CSS",
    style: "shadow-blue-500",
  },
  {
    id: 3,
    src: js,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: 4,
    src: reactLangue,
    title: "React",
    style: "shadow-sky-500",
  },
  {
    id: 5,
    src: github,
    title: "GitHub",
    style: "shadow-gray-400",
  },
  {
    id: 6,
    src: tailwind,
    title: "Tailwind",
    style: "shadow-teal-600",
  },
  {
    id: 11,
    src: bootstrap,
    title: "Bootstrap",
    style: "shadow-violet-500",
  },
  {
    id: 13,
    src: py,
    title: "Python",
    style: "shadow-yellow-400",
  },
  {
    id: 15,
    src: c,
    title: "C",
    style: "shadow-blue-400",
  },
  {
    id: 16,
    src: redux,
    title: "redux",
    style: "shadow-orange-500",
  },
];
