import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  NavikaTech,
  CodSoft,
  carrent,
  BookKart,
  Movie,
  jobit,
  tripguide,
  threejs,
  Expense,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Database Management",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "NavikaTech(OPC)",
    icon: NavikaTech,
    iconBg: "#383E56",
    date: "Jan 2025 - present",
    points: [
      "Contributed to CRM platform development at NavikaTech using Next.js, Node.js, and MongoDB.",
      "Implemented secure authentication using JWT and Google OAuth2.",
      "Integrated backend services with scalable REST APIs and RTK Query for efficient data handling.",
      "Built admin dashboards and automated workflows for seamless internal operations.",
      "Gained hands-on experience in full-stack development, third-party integrations, and real-world deployment practices.",
    ],
  },
  {
    title: "Web Development Internship",
    company_name: "Codsoft",
    icon: CodSoft,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Oct 2023",
    points: [
      "Successfully completed a one-month certified internship focused on web development.",
      "Developed and deployed three web application projects:-  PORTFOLIO , CALCULATOR ,  TO-DO LIST ",
      "Shared project outcomes on LinkedIn to highlight skills and achievements.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it is Difficult to make a website as beautiful as our product, but Piyush proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Piyush does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Piyush optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Book-Store",
    description:
      " Full-Stack E-commerce Application: Developed using the MERN stack (MongoDB, Express, React.js, Node.js) with integrated Razorpay payments. Built responsive user interfaces and admin panels using React.js and Redux Toolkit. ",
    tags: [
      {
        name: "Next",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
    ],
    image: BookKart,
    source_code_link: "https://book-store-app-umber.vercel.app",
  },
  {
    name: "Expense Tracker App",
    description:
      "Designed and developed the Expense Tracker App using React and Tailwind CSS. Focused on creating a responsive UI with real-time transaction tracking and intuitive user interactions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: Expense,
    source_code_link: "https://expense-tracker-app-three-beryl.vercel.app/",
  },
  {
    name: "MOVIE DATABASE",
    description:
      "Designed a web application that suggests movies based on user preferences. Utilized HTML, CSS, and JavaScript, integrating an API to dynamically update the movie list..",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Movie,
    source_code_link: "https://movie-website-theta.vercel.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
