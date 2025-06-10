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
    filmyai,
    ileaf,
    pawsible,
    polymorphai,
    pic2poem,
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
      title: "AI",
      icon: threejs,
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
      title: "Full Stack Developer Intern",
      company_name: "FILMY AI",
      icon: filmyai,
      iconBg: "#383E56",
      date: "April 2025 – Present",
      points: [
        "Developing and maintaining web applications using React.js and Node.js",
        "Collaborating with cross-functional teams to define, design, and ship new features",
        "Implementing responsive design and ensuring cross-browser compatibility",
        "Participating in code reviews and maintaining code quality standards"
      ],
    },
    {
      title: "Jr Technical Specialist (Dell Technologies Project)",
      company_name: "Concentrix",
      icon: concentrix,
      iconBg: "#383E56",
      date: "January 2021 – December 2022",
      points: [
        "Modernized a legacy system by decomposing itinto microservices, improving performance and reducing maintenance overhead.",
        "Developed APIs and cloud integration processes using Python, JavaScript for efficient client data management, along with Salesforce authentication and integration Proofs of Concept (POCs).",
        "Engineered cloud infrastructure with Terraform and deployed on AWS using ECS, ALB, and Autoscaling, supported by Deep Health Check APIs for monitoring.",
        "Implemented monitoring systems with Prometheus and Grafana for data collection and real-time system health visualization.",
        "Built an ETL pipeline with AWS Glue, Terraform, and Python to extract data from Snowflake, transform it, and load it into MySQL.",
        "Achieved over 90% code coverage by conducting code reviews, integration and unit testing, and collaborating on system design improvements."
      ],
    },
    {
      title: "Mobile App Developer Intern",
      company_name: "iLeaf",
      icon: ileaf,
      iconBg: "#383E56",
      date: "August 2020 – January 2021",
      points: [
        "Developed and maintained mobile applications using React Native",
        "Implemented new features and fixed bugs in existing applications",
        "Worked with REST APIs and integrated third-party services",
        "Participated in daily stand-ups and sprint planning meetings",
        "Collaborated with the design team to implement UI/UX improvements"
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
      name: "Pawsible",
      description:
        "Pawsible is a full-stack AI-powered web application designed to simplify pet adoption and rental. Built using Next.js 15, Tailwind CSS, ShadCN UI, and powered by Google Genkit + Gemini AI, the platform blends modern UI/UX with smart automation to enhance the pet-matching experience.",
      tags: [
        { name: "nextjs", color: "blue-text-gradient" },
        { name: "tailwind", color: "pink-text-gradient" },
        { name: "shadcn-ui", color: "green-text-gradient" },
        { name: "genkit", color: "orange-text-gradient" },
        { name: "gemini-ai", color: "green-text-gradient" },
        { name: "ai", color: "blue-text-gradient" },
      ],
      image: pawsible,
      source_code_link: "https://studio--pawsible-5orvg.us-central1.hosted.app/",
    },
    {
      name: "Pic2Poem: AI Image-to-Poetry App",
      description:
        "An innovative Next.js and React application that transforms user-uploaded photos into unique poems. Pic2Poem leverages Genkit and Google's Gemini AI to analyze images and generate poetry in various styles (e.g., Haiku, Sonnet). Features a sleek, responsive UI built with ShadCN components and Tailwind CSS. This project showcases skills in full-stack development, AI integration, and creating engaging user experiences.",
      tags: [
        { name: "nextjs", color: "blue-text-gradient" },
        { name: "react", color: "blue-text-gradient" },
        { name: "shadcn-ui", color: "green-text-gradient" },
        { name: "tailwind", color: "pink-text-gradient" },
        { name: "genkit", color: "orange-text-gradient" },
        { name: "gemini-ai", color: "green-text-gradient" },
        { name: "ai", color: "blue-text-gradient" },
      ],
      image: pic2poem,
      source_code_link: "#", // Add your live link or repo here if available
    },
    {
      name: "PolyMorph AI: Intelligent File & Image Transformation Suite",
      description:
        "PolyMorph AI is a versatile and modern web application designed to empower users with a comprehensive suite of AI-driven tools for seamless file manipulation and creative image generation. Built with a cutting-edge tech stack, this project demonstrates sophisticated AI integration within an intuitive, user-centric interface.",
      tags: [
        { name: "nextjs", color: "blue-text-gradient" },
        { name: "react", color: "blue-text-gradient" },
        { name: "shadcn-ui", color: "green-text-gradient" },
        { name: "tailwind", color: "pink-text-gradient" },
        { name: "genkit", color: "orange-text-gradient" },
        { name: "google-ai", color: "green-text-gradient" },
        { name: "ai", color: "blue-text-gradient" },
      ],
      image: polymorphai,
      source_code_link: "https://studio--polymorph-ai.us-central1.hosted.app/",
    },
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