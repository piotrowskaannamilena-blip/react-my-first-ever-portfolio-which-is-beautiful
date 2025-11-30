// Simple Icons
import {
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiSequelize,
  SiHtml5,
  SiCss3,
  SiGit,
  SiJsonwebtokens,
  SiPython,
  SiMarkdown
} from "react-icons/si";

// FontAwesome 6 
import { FaServer } from "react-icons/fa6";

// Material Icons
import { MdDevices } from "react-icons/md";

export const projects = [
  {
    id: 1,
    title: "Tech Blog",
    description:
      "Full-stack blogging app with user authentication. Users can register, log in, and log out securely using session-based or token authentication. Users can create, read, update, and delete (CRUD) their own blog posts connected to a MySQL database.  Built with Node.js, Express, PostgreSQL - render deployment/MySQL - localhost, and deployed on Render.  Blog posts are filtered by category. Blog content is dynamically rendered based on API responses.",
    technologies: [ "Node.js", "Express", "PostgreSQL", "MySQL", "Sequelize", "JWT"],
    category: "Full-Stack",
    image: "/images/tech_blog.jpg",
    screen_recording: "/images/tech_blog_record.mp4",
    githubUrl: "https://github.com/piotrowskaannamilena-blip/blog-application",
    liveUrl: "https://blog-application-9q6n.onrender.com/",
    featured: true,
  },

  {
    id: 2,
    title: "Hacker News App",
    description:
      "Group project - Uses data from News API - for the site be working live, you need an API key (please follow instruction in readme.md)",
    technologies: ["JavaScript", "HTML", "CSS", "API Integration", "Bootstrap"],
    category: "Frontend",
    image: "/images/hacker_news.png",
    screen_recording: "/images/hacker_news_record.mp4",
    githubUrl: "https://github.com/piotrowskaannamilena-blip/hackernews?tab=readme-ov-file",
    liveUrl: "https://piotrowskaannamilena-blip.github.io/hackernews/",
    featured: false,
  },
  {
    id: 3,
    title: "Python-README.md Generator",
    description:
      "A Python CLI tool that generates professional README.md files.",
    technologies: ["Python", "Markdown"],
    category: "Frontend",
    image: "/images/python-readme.png",
    screen_recording: "/images/read_me_record.mp4",
    githubUrl: "https://github.com/piotrowskaannamilena-blip/readme-generator",
    liveUrl: "https://youtu.be/zzbJi6_FMxc",
    featured: false,
  },
  {
    id: 4,
    title: "ToDo-List",
    description: "To do list JavaScript Basic to-do list where a button changes to Complete when a task is done",
    technologies: ["JavaScript", "HTML", "CSS", "Git"],
    category: "Frontend",
    image: "/images/todo_app.png",
    screen_recording: "/images/todo_app_record.mp4",
    githubUrl: "https://github.com/piotrowskaannamilena-blip/todolist",
    liveUrl: "https://piotrowskaannamilena-blip.github.io/todolist/",
    featured: false,
  },
  {
    id: 5,
    title: "Notes Application",
    description:
    "Full Stack Notes Application using Node and Express Note-Taking Application that allows users to: Create new notes, Read existing notes, Update notes, Delete notes",
    technologies: ["Git", "CSS", "HTML", "JavaScript", "Node.js"],
    category: "Frontend",
    image: "/images/notes_app.png",
    githubUrl: "https://github.com/piotrowskaannamilena-blip/notesapplication.git",
    liveUrl: "https://notesapplication-u0zy.onrender.com/",
    featured: false,
  },
      {
    id: 6,
    title: "Migration Challenge- Migrating a Site to Bootstrap",
    description:
      "Full Bootstrap integration with grid system, 3+ components, utility classes, optional jQuery widgets; minimal custom CSS. Upgraded design of week 2 challenge with migrating to Bootstrap and custom Fonts. I've used HTML, CSS, Bootstrap, jQuery and Javascript to migrate week 2 challenge to bootstrap.",
    technologies: ["HTML", "CSS"],
    category: "Frontend",
    image: "/images/migration.png",
    githubUrl:"https://github.com/piotrowskaannamilena-blip/migrationchallenge",
    liveUrl: "https://piotrowskaannamilena-blip.github.io/migrationchallenge/",
    featured: false,
  },
    {
    id: 7,
    title: "Portfolio - 1st project",
    description:
      "My first portfolio HTML/CS- coded in September 2025",
    technologies: ["HTML", "CSS"],
    category: "Frontend",
    image: "/images/portfolio_first.png",
    screen_recording: "/images/portfolio_first_record.mp4",
    githubUrl:"https://github.com/piotrowskaannamilena-blip/piotrowskaannamilena-blip.github.io",
    liveUrl: "https://piotrowskaannamilena-blip.github.io/",
    featured: false,
  },
];


export const techIcons = {
  "Python": SiPython,
  "JavaScript": SiJavascript,
  "Node.js": SiNodedotjs,
  "React": SiReact,
  "Express": SiExpress,
  "PostgreSQL": SiPostgresql,
  "MySQL": SiMysql,
  "Sequelize": SiSequelize,
  "HTML": SiHtml5,
  "CSS": SiCss3,
  "Git": SiGit,
  "JWT": SiJsonwebtokens,
  "RESTful APIs": FaServer,
  "Responsive Design": MdDevices,
  "Bootstrap": SiCss3,
  "API Integration": FaServer,
  "Markdown": SiMarkdown,
};