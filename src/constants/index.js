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
  starbucks,
  tesla,
  jobit,
  tripguide,
  threejs,
  infogenx,
  university,
  Disney,
  translate,
  Loan,
  User_manage,
  Music,
  Todo,
  Ecom,
  Chemicals,
  Drag_drop,
  Q_auto,
  User,
 
} from "../assets";

import carrent from '../assets/company/usermana.png'
// import {user}from "../assets/company/userman"

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
  {
    id: "Blogs",
    title: "Blogs",
  },
];


const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
   {
    title: "MEAN",
    icon: backend,
  },
  {
    title: "AWS Cloud Practitioner",
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
    name: "flutter",
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
    company_name: "Entero Healthcare Solution Limited",
    icon: tesla, // Replace with appropriate icon
    iconBg: "#E6DEDD", // Replace with appropriate background color
    date: "Sep 2023 – August 2024",
    points: [
      "Enhanced customer solutions by designing and implementing MEAN stack features, resulting in a 20% increase in customer satisfaction.",
      "Refined complex MySQL queries, reducing query time by 30%, improving the efficiency of data retrieval systems.",
      "Boosted system performance by debugging and optimizing real-time applications and APIs, decreasing response times by 25%.",
      "Architected distributed infrastructure on AWS, decreasing server response time by 40%, and supporting new feature launches that increased user engagement for over 1,500 active users.",
      "Achieved a 95% on-time delivery rate by providing regular project updates in an agile environment.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "LearnTinkering Pvt LTD",
    icon: starbucks, // Replace with appropriate icon
    iconBg: "#383E56", // Replace with appropriate background color
    date: "Sep 2022 – Oct 2022",
    points: [
      "Enhanced application performance by debugging and optimizing algorithms, leading to a 20% improvement.",
      "Resolved stack-wide issues by debugging and troubleshooting, resulting in a 20% improvement in application performance.",
      "Managed and optimized AWS infrastructure, ensuring 99% uptime and robust application performance.",
      "Streamlined development processes using Git, reducing development time by 15% through effective version control.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Infogenx Pvt LTD",
    icon: infogenx, // Replace with appropriate icon
    iconBg: "#E6DEDD", // Replace with appropriate background color
    date: "April 2022 – Sep 2022",
    points: [
      "Created responsive user interfaces with Angular, improving user interaction by 15%.",
      "Engineered RESTful APIs using Node.js and Express, ensuring seamless communication between front-end and back-end services.",
      "Collaborated on code reviews, maintaining 100% code consistency across the team and leveraging Git for effective version control.",
      "Enhanced distributed system performance on AWS, reducing server response time by 40%.",
    ],
  },
  {
    title: "Computer Science Graduate",
    company_name: "University of Delhi",
    icon: university, // Replace with appropriate icon
    iconBg: "#E6DEDD", // Replace with appropriate background color
    date: "2018 – 2022",
    points: [
      "Built a strong foundation in computer science, learning theory, algorithms, and software engineering principles.",
      "Completed projects involving full-stack development using technologies like Angular, Node.js, and AWS.",
      "Member of the ECo Green Society and participated in multiple hackathons and coding competitions.",
    ],
  },
  {
    title: "Freelance Software Developer",
    company_name: "Self Employed",
    icon: meta, // Replace with appropriate icon
    iconBg: "#383E56", // Replace with appropriate background color
    date: "2021 – Present",
    points: [
      "Developed custom software solutions for small businesses, increasing efficiency by 25% through automation tools.",
      "Created a portfolio of web applications for clients using technologies like React, Node.js, and AWS.",
      "Managed all phases of development projects, from concept and architecture to deployment and support.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "Avinash is one of my students who is proficient at data analysis and visualisation using Python. He ensures that all deadlines are met on time and to the highest standards. Through patience and willingness to learn, he made a significant impact on his project and presentation. Aside from direct technical contributions, Avinash demonstrated maturity and thoughtfulness in terms of his values and career objectives. I'm excited to see what the future holds for Avinash!",
    name: "Mahesh Kumar Bhandari",
    designation: "Assistant Professor at University of Delhi",
    image: User,
  },
  {
    testimonial:
      "I have taught various subjects to Avinash over the years of his graduation. Avinash has always been one of my top notch students with a pristine three years record. He is smart, intelligent, highly skilled, and an inquisitive person. He is always keen to learn new things and works deftly towards achieving his goals. He is a quick learner and quicker in improving upon his mistakes. He also has brilliant leadership qualities.",
    name: "Gunjan R",
    designation: "Assistant Professor at Acharya Narendra Dev College, Delhi University",
    image: User,
  },
  {
    testimonial:
      "Avinash was one of my students at AND College. His coursework required a project where he upskilled himself to learn and effectively use React JS. Not only did he demonstrate a great interest throughout the project development he supported his team with enthusiasm. I found him to be a diligent and eager learner who absorbed new technology quickly and went out of his way to deliver quality outputs required for the coursework project. I wish he continues on the same learning trajectory and would recommend him to anyone who wants to hire a great learner with a sound technical mind and a dedicated team player.",
    name: "Vandita Grover",
    designation: "Research/Consultant/Advisory/Product Management: Data Analytics, Gen-AI, LLM, Machine Learning",
    image: User,
  },

];


// const projects = [
//   {
//     name: "User Management system ",
//     description:
//       "A Full-Stack Clone of the leading E-commerce website Amazon. 👉 Made the HomePage, Login and Checkout Page with smooth animations 👉 Integrated User Authentication with Firebase. I'm using: React-Context & Hooks, Material UI with custom CSS and Firebase.",
//     tags: [
//       {
//         name: "React js",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "firebase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "Node js",
//         color: "green-text-gradient",
//       },
//       {
//         name: "MYSQL",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: carrent,
//     source_code_link: "https://github.com/Avinash-Singh1/UserManagement",
//   },
//   {
//     name: "Covid Tracker",
//     description:
//       "Used Prophet model by Facebook AI Team and graphically matched the data taken from Govt. Website with ML and Data Science Algorithms post one week. The resultant graph almost superimposed the actual graph with over 98% accuracy.",
//     tags: [
//       {
//         name: "React js",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: jobit,
//     source_code_link: "https://github.com/Avinash-Singh1/CovidTracker",
//   },
//   {
//     name: "Finance Application",
//     description:
//       `Made this futuristic voice assistant STARK with #chatgpt and #dalle which will make your life easier. Stark has the power of GPT4 which can roam around the internet and resolve your query and it is Compatible for web, android and ios. Made with Flutter, ChatGpt, Dall-e and Material3`,
//     tags: [
//       {
//         name: "Angular",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "Node js",
//         color: "blue-text-gradient",
//       },
    
//       {
//         name: "MongoDB",
//         color: "pink-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "green-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/Avinash-Singh1/Finance_of_Society",
//   },
// ];

const projects = [
  {
    name: "Disney+ Hotstar Clone",
    description:
      "The Disney+ Hotstar Clone is an interactive streaming platform clone with movie search, filtering, and an intuitive UI. Built with Next.js, Tailwind CSS, and shadcn, it includes features like dark mode, server components, and caching. Integrates the TMDB API for movie data, Azure functions for backend processes, and OpenAI API through Microsoft Azure.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "shadcn", color: "pink-text-gradient" },
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "Azure", color: "blue-text-gradient" },
      { name: "TMDB API", color: "green-text-gradient" },
    ],
    image: Disney,
    source_code_link: "https://avinash-singh1.github.io/Personal-Projects/",
  },
  {
    name: "Google Translate",
    description:
      "A web-based Google Translate application combining text translation and speech recognition. Built with React, Next.js, and TypeScript, it integrates Azure/OpenAI API for translations, Clerk for authentication, and stores translation history in MongoDB with Azure CosmosDB.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "Azure", color: "blue-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
    ],
    image: translate,
    source_code_link: "https://avinash-singh1.github.io/Personal-Projects/",
  },
  {
    name: "QuickAuto Cab",
    description:
      "An Angular-based cab management application featuring real-time driver availability, journey planning, and fare calculation. Includes Razorpay for payments and Twilio for WhatsApp notifications.",
    tags: [
      { name: "Angular", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "MySQL", color: "blue-text-gradient" },
      { name: "Gomaps Pro API", color: "green-text-gradient" },
    ],
    image: Q_auto,
    source_code_link: "https://avinash-singh1.github.io/Personal-Projects/",
  },
  {
    name: "Finance Application",
    description:
      "A comprehensive finance application built with Angular, Node.js, and MySQL. Features interactive maps for COVID-19 statistics, scalable architecture, and dynamic data management.",
    tags: [
      { name: "Angular", color: "blue-text-gradient" },
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
    ],
    image: Loan,
    source_code_link: "https://avinash-singh1.github.io/Personal-Projects/",
  },
  {
    name: "COVID Tracker Web Application",
    description:
      "A COVID-19 tracker displaying global cases, recoveries, and deaths using live data from Disease.sh API. Built with React.js, Leaflet, and Chart.js for visual insights.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Leaflet", color: "green-text-gradient" },
      { name: "Chart.js", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://avinash-singh1.github.io/Personal-Projects/",
  },
  {
    name: "User Management System",
    description:
      "A secure user management system using Node.js, EJS, and MongoDB. Includes JWT authentication, handling hundreds of concurrent users with scalable architecture.",
    tags: [
      { name: "Node.js", color: "green-text-gradient" },
      { name: "EJS", color: "blue-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
    ],
    image: User_manage,
    source_code_link: "https://avinash-singh1.github.io/Personal-Projects/",
  },
  {
    name: "Music Player",
    description:
      "A responsive music player allowing users to play and manage tracks with a user-friendly interface. Built with React.js and the Web Audio API.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Web Audio API", color: "green-text-gradient" },
    ],
    image: Music,
    source_code_link: "https://avinash-singh1.github.io/Personal-Projects/",
  },
  {
    name: "To-Do Application",
    description:
      "A simple to-do list app that helps manage tasks. Built with HTML, CSS, and JavaScript, it supports local storage to keep tasks persistent across sessions.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: Todo,
    source_code_link: "https://avinash-singh1.github.io/Personal-Projects/",
  },
  {
    name: "Ecommerce UI",
    description:
      "A responsive e-commerce UI built with React.js and styled-components, providing dynamic product listing and filtering for an enhanced shopping experience.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "styled-components", color: "green-text-gradient" },
    ],
    image: Ecom,
    source_code_link: "https://avinash-singh1.github.io/Personal-Projects/",
  },
  {
    name: "Chemical Management System",
    description:
      "A tool for managing chemical data efficiently with a responsive table interface, built as a PWA with offline support and local storage.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      { name: "Bootstrap", color: "blue-text-gradient" },
    ],
    image: Chemicals,
    source_code_link: "https://avinash-singh1.github.io/Personal-Projects/",
  },
  {
    name: "Task Track (Drag and Drop)",
    description:
      "A task management app with a drag-and-drop interface to manage tasks in phases (To Do, Doing, Done). Built with React, Vite, and TypeScript.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Vite", color: "green-text-gradient" },
      { name: "TypeScript", color: "blue-text-gradient" },
    ],
    image: Drag_drop,
    source_code_link: "https://avinash-singh1.github.io/Personal-Projects/",
  },
];

export { services, technologies, experiences, testimonials, projects };
