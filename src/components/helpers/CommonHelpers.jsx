import AapomrLogo from "../../assets/images/aapmorLogo.png";
import AapomrScreenShot from "../../assets/images/AapmorScreenshot.png";
import ReactJS from "../../assets/images/ReactJSLogo.png";
import HTML from "../../assets/images/HTMLLogo.png";
import CSS from "../../assets/images/CSSLogo.png";
import JavaScript from "../../assets/images/JavascriptLogo.png";
import Bootstrap from "../../assets/images/BootstrapLogo.png";
import MaterialUI from "../../assets/images/MaterialUILogo.png";
import Python from "../../assets/images/PythonLogo.png";
import Express from "../../assets/images/ExpressJsLogo.png";
import NodeJs from "../../assets/images/NodeJsLogo.png";
import SQLite from "../../assets/images/SQLiteLogo.jpeg";
import MongoDB from "../../assets/images/MongoDBLogo.png";
import PostgreSQL from "../../assets/images/PostgreSQLLogo.jpeg";
import Git from "../../assets/images/GithubLogo.png";
import Jira from "../../assets/images/JiraLogo.jpeg";
import Bitbucket from "../../assets/images/BitbucketLogo.png";
import Tailwind from "../../assets/images/tailwind.png";

export const techData = {
  frontend: [
    { name: "ReactJS", img: ReactJS },
    { name: "HTML", img: HTML },
    { name: "CSS", img: CSS },
    { name: "JavaScript", img: JavaScript },
    { name: "Bootstrap", img: Bootstrap },
    { name: "Material UI", img: MaterialUI },
    { name: "Tailwind CSS", img: Tailwind },
  ],
  backend: [
    { name: "Python", img: Python },
    { name: "Express", img: Express },
    { name: "Node.js", img: NodeJs },
  ],
  database: [
    { name: "SQLite", img: SQLite },
    { name: "MongoDB", img: MongoDB },
    { name: "PostgreSQL", img: PostgreSQL },
  ],
  others: [
    { name: "Github", img: Git },
    { name: "Jira", img: Jira },
    { name: "Bitbucket", img: Bitbucket },
  ],
};

export const timelineData = [
  {
    date: "Oct 2023 - Present",
    title: "FullStack Developer (SDE-1)",
    company: "Aapmor Technologies",
    description: [
      "Building and managing interactive frontend UIs using React and Material UI.",
      "Develpoment of SAP applications to a modern React-based interface for internal Johnson & Johnson users",
      "Introduced Microfrontend Architecture to decouple multiple features, reducing dependencies and enabling independent development and deployment, enabling faster feature releases and reduced downtime",
      "Introduced AI-driven language translation features, enabling the application to support multiple International languages and improved accessibility and user experience across diverse regions.",
      "Led the development of the Our company website, emphasizing the creation of a modern UI design and a smooth user experience.",
      "Integrating with backend APIs and services to fetch and manipulate data.",
      "Participating in client meetings to gather requirements, provide updates, and address feedback.",
    ],
    image: AapomrLogo,
  },
];

export const projects = [
  {
    title: "Aapmor Website",
    description:
      "Building and managing interactive frontend UIs using React and Material UI, Introduced Microfrontend Architecture to decouple multiple features, reducing dependencies and enabling independent development and deployment, enabling faster feature releases and reduced downtime",
    image: AapomrScreenShot,
    link: "https://aapmor.com/",
    stack: ["React", "Material UI", "Email.js", "Framer motion"],
  },
];
