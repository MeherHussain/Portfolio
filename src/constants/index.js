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
  Ideoversity,
  Corvit,
  git,
  figma,
  docker,
  meta,
  
  TSOFTEK,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Computer Vision Engineer",
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
    title: "React.js Developer",
    company_name: "TSOFTEK",
    icon: TSOFTEK,
    iconBg: "#383E56",
    date: "August 2024 - December 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "MERN Stack Developer Internship",
    company_name: "IDEOVERSITY",
    icon: Ideoversity,
    iconBg: "#E6DEDD",
    date: "Aprile 2024 - August 2024",
    points:    [
      "Developed and maintained full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Collaborated with designers and backend developers to implement new features and resolve technical issues.",
      "Built RESTful APIs and integrated them with front-end components for seamless user experiences.",
      "Optimized application performance and ensured mobile responsiveness across devices.",
      "Participated in code reviews, contributed to team discussions, and learned best practices in modern web development.",
    ],
  },
  {
    title: "Full Stack Developer Course",
    company_name: "Arfa Kareem Tower",
    icon: Ideoversity,
    iconBg: "#383E56",
    date: "Jan 2024 - December 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Artificail Intelligence Course",
    company_name: "Corvit Networks",
    icon: Corvit,
    iconBg: "#E6DEDD",
    date: "February 2023 - October 2023",
    points:     [
      "Gained hands-on experience with core Artificial Intelligence concepts, including machine learning, deep learning, and data analysis.",
      "Developed and trained AI models using Python and popular frameworks such as TensorFlow and scikit-learn.",
      "Worked on real-world projects involving image recognition, natural language processing, and predictive analytics.",
      "Collaborated with peers to solve complex problems and presented project outcomes to instructors and classmates.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI Course Generator",
    description:
      "Completed a full stack AI Course Generator project using Next.js, MongoDB, and Express.js, featuring Clerk authentication for secure user management.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "Clerk",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/MeherHussain",
  },
  {
    name: "Rahate Store",
    description:
 "A full stack E-Commerce Store using Next.js and Express.js, featuring product browsing, secure user authentication, and seamless shopping cart management.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Express.jx",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/MeherHussain",
  },
  {
    name: "AI Interrior Design",
    description:
      "A comprehensive platform that allows users to design and visualize interior spaces using AI-generated suggestions and 3D modeling.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "replicate",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/MeherHussain",
  },
];

export { services, technologies, experiences, testimonials, projects };
