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
    concentrix,
    starbucks,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    skynet,
    deardiary,
    hirehub,
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
      title: "Content Creator",
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
      company_name: "Concentrix",
      icon: concentrix,
      iconBg: "#383E56",
      date: "February 2021 – December 2022",
      points: [
        "Modernized a legacy system by decomposing itinto microservices, improving performance and reducing maintenance overhead.",
        "Developed APIs and cloud integration processes using Python, JavaScript for efficient client data management, along with Salesforce authentication and integration Proofs of Concept (POCs).",
        "Engineered cloud infrastructure with Terraform and deployed on AWS using ECS, ALB, and Autoscaling, supported by Deep Health Check APIs for monitoring.",
        "Implemented monitoring systems with Prometheus and Grafana for data collection and real-time system health visualization.",
        "Built an ETL pipeline with AWS Glue, Terraform, and Python to extract data from Snowflake, transform it, and load it into MySQL.",
        "Achieved over 90% code coverage by conducting code reviews, integration and unit testing, and collaborating on system design improvements."
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
      name: "Sky-Net",
      description:
        "Collaborated in team of four to develop e-commerce platform, designing interface using JavaScript&React allowing users to search & purchase electronic equipment, integrating PayPal payment gateway using APIs to secure payment process. Designed PostgreSQL database to store user authentication& inventory data, craftingPython-Flask backend for seamless server-side architecture & frontend interface communication to support 1000+ users.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: skynet,
      source_code_link: "https://github.com/rohitrathod013/SkyNet",
    },
    {
      name: "Dear Diary",
      description:
        "Developed JavaScript-based React web application with elegant and intuitive user experience allowing users to record notes, building dynamic database storage optionsincluding MongoDB to store data web application-input&Railway to host data entered through Vercel. Leveraged CodeSandbox& VSCode for development, deploying app on Vercel for seamless functionality& accessibility.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: deardiary,
      source_code_link: "https://github.com/rohitrathod013/DearDiary",
    },
    {
      name: "HireHub",
      description:
        "HireHub is a job search platform designed to connect job seekers with employers, developed using React for an interactive interface, Jenkins for CI/CD automation, and Jira for efficient project tracking. It offers features for job browsing, application management, and real-time updates, ensuring a smooth user experience and streamlined development.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "jenkis",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: hirehub,
      source_code_link: "https://github.com/rohitrathod013/HireHub",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };