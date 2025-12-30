import imgNote from "../assets/img-projects/note-app.png";
import urbanStyle from "../assets/img-projects/urbanStyle.png";
import legalWeb from "../assets/img-projects/legalweb.webp";
import mediCare from "../assets/img-projects/medicare.jpg";
import astroFit from "../assets/img-projects/Astrofit.jpg";
import Verbenas from "../assets/img-projects/challenge-newyze.png";

export const proyectos = [
  {
    titulo: "Organization App",
    descripcion:
      "Full-stack application featuring CRUD operations, board and list creation, and user authentication, engineered with the MERN stack.",
    imagen: imgNote.src,
    tecnologias: ["React", "Tailwind", "Express", "MongoDB"],
    demo: "https://front-react-todo.onrender.com",
    codigo: "https://github.com/Lautaro-R-collins/Front-react-todo",
    categoria: "fullstack",
  },
  {
    titulo: "Urban Style E-commerce",
    descripcion:
      "Functional e-commerce platform for apparel and accessories, featuring shopping cart functionality, categorization, and payment gateway integration, developed in React.",
    imagen: urbanStyle.src,
    tecnologias: ["React", "Tailwind", "Firebase"],
    demo: "https://proyecto-final-rodriguez-sable.vercel.app/",
    codigo: "https://github.com/Lautaro-R-collins/ProyectoFinal-Rodriguez.git",
    categoria: "fullstack",
  },
  {
    titulo: "Artisan Shop",
    descripcion:
      "Full-Stack E-commerce platform facilitating product viewing, buying, and selling, with secure login for both users and vendors.",
    imagen:
      "https://i.pinimg.com/736x/c9/70/bf/c970bfbc24489e39418b2c1b1f8f74ef.jpg",
    tecnologias: ["React", "Node", "Express", "MongoDB"],
    demo: "https://c21-05-ft-node-react-mirror-frontend-64qbwssi2-muyvisual.vercel.app/",
    codigo: "https://github.com/No-Country-simulation/c21-05-ft-node-react",
    categoria: "fullstack",
  },
  {
    titulo: "Income/Expense Tracker",
    descripcion:
      "Application performing CRUD operations to add, view, edit, and delete income/expense records.",
    imagen:
      "https://i.pinimg.com/736x/a4/85/c4/a485c4da3e78f4f518ddbcdb6637bacf.jpg",
    tecnologias: ["React", "contextAPI"],
    demo: "https://traker-gastos-ingresos.onrender.com/",
    codigo: "https://github.com/Lautaro-R-collins/Traker-Gastos-Ingresos",
    categoria: "frontend",
  },
  {
    titulo: "Weather App",
    descripcion:
      "React application leveraging an external API to display real-time weather data.",
    imagen:
      "https://i.pinimg.com/736x/10/6e/cd/106ecd1bfe5ed1c3defb83ea0f87a334.jpg",
    tecnologias: ["React", "contextAPI", "tailwind"],
    demo: "https://app-clima-om19.onrender.com/",
    codigo: "https://github.com/Lautaro-R-collins/app-clima",
    categoria: "frontend",
  },
  {
    titulo: "Legal Staff",
    descripcion:
      "Marketing funnel website developed with Astro and Tailwind for law firms.",
    imagen: legalWeb.src,
    tecnologias: ["Astro", "tailwind", "JavaScript"],
    demo: "https://legal-staff.vercel.app/",
    codigo: "https://github.com/Lautaro-R-collins/legal-staff",
    categoria: "frontend",
  },
  {
    titulo: "Medicare",
    descripcion:
      "Marketing funnel website developed with Astro and Tailwind for Social Security/Health organizations.",
    imagen: mediCare.src,
    tecnologias: ["Astro", "tailwind", "JavaScript"],
    demo: "https://obra-social-landing.vercel.app/",
    codigo: "https://github.com/Lautaro-R-collins/obra-social-landing.git",
    categoria: "frontend",
  },
  {
    titulo: "AstroFit",
    descripcion:
      "Marketing funnel website developed with Astro and Tailwind for fitness consultancy.",
    imagen: astroFit.src,
    tecnologias: ["Astro", "tailwind", "JavaScript"],
    demo: "https://gym-page-sandy.vercel.app/",
    codigo: "https://github.com/Lautaro-R-collins/GymPage.git",
    categoria: "frontend",
  },
  {
    titulo: "100 Days Coding in JS",
    descripcion: "A collection of 100 projects implemented using HTML, CSS, and JavaScript.",
    imagen:
      "https://i.pinimg.com/736x/3b/4f/4e/3b4f4e170fcb1795b88f4941f49df0a2.jpg",
    tecnologias: ["Next.js", "Tailwind", "GraphQL"],
    demo: "https://one00-proyects-web.onrender.com/",
    codigo: "https://github.com/Lautaro-R-collins/100-days-of-coding-in-JS",
    categoria: "frontend",
  },
  {
    titulo: "PlaniFy",
    descripcion:
      "Web application for project organization, built with React + Vite, TypeScript, and Tailwind for styling.",
    imagen:
      "https://i.pinimg.com/736x/8f/f0/bb/8ff0bbd0e5844ed254bede44522c8338.jpg",
    tecnologias: ["React", "Vite", "TypeScript", "Tailwind"],
    demo: "https://planify-1tu6.onrender.com/",
    codigo: "https://github.com/Lautaro-R-collins/PlaniFy-organization-app",
    categoria: "frontend",
  },
  {
    titulo: "Verbenas Landscapes",
    descripcion:
      "Static landing page developed with Astro and Tailwind as a challenge for a startup.",
    imagen: Verbenas.src,
    tecnologias: ["Astro", "Tailwind", "JavaScript"],
    demo: "https://challenge-neowyze.onrender.com/",
    codigo: "https://github.com/Lautaro-R-collins/challenge-Neowyze.git",
    categoria: "frontend",
  },
  {
    titulo: "REST API",
    descripcion:
      "RESTful API built with Express and MongoDB to manage task CRUD operations, User Registration, and JWT Login.",
    imagen: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
    tecnologias: ["Express", "Node.js", "MongoDB", "Mongoose"],
    demo: "https://back-express-todo.onrender.com",
    codigo: "https://github.com/Lautaro-R-collins/Back-express-todo.git",
    categoria: "backend",
  },
];
