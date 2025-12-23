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
    metlife,
    mphasis,
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
      title: "AI/ML Engineer",
      company_name: "Metlife, USA",
      icon: metlife,
      iconBg: "#383E56",
      date: "July 2024 – Present",
      points: [
        "Architected unified ML pipelines for SmartClaims AI and Life360 Advisor AI, reducing insurance claim processing time by 25% through automated extraction, intelligent routing, transformer-based reasoning, and scalable vector-driven retrieval workflows.",
        "Enhanced fraud-risk and customer-insight models by engineering enriched features, refining neural architectures, applying segmentation, and orchestrating distributed training, improving predictive accuracy by 30%.",
        "Deployed containerized model services for claims and recommendations, improving production reliability 40% via microservices orchestration, automated tests, version governance, monitoring, and controlled delivery pipelines.",
        "Integrated explainability and fairness frameworks into decision pipelines, boosting adjuster and customer trust by 50% using transparent reasoning layers, SHAP-based interpretations, bias checks, and policy-aligned accountability modules.",
        "Advanced retention and cross-sell strategies by 22% by developing hybrid recommendation engines powered by embeddings, life-event detection, behavioral insights, and event-stream scoring connected to enterprise customer-engagement systems.",
        "Stabilized AI platforms by 35% by automating retraining cycles, strengthening data-quality checks, implementing drift alerts, and optimizing MLOps pipelines for claims automation and insurance intelligence."
      ],
    },
    {
      title: "Machine Learning Engineer",
      company_name: "Mphasis, India",
      icon: mphasis,
      iconBg: "#383E56",
      date: "November 2019 – December 2022",
      points: [
        "Engineered fraud-scoring and credit-risk pipelines by preparing transactional datasets, designing behavior features, validating anomalies, and improving scoring stability across high-volume payments and lending workflows.",
        "Refined predictive models by evaluating multiple algorithms, optimizing feature sets, reducing dimensionality, and aligning sequence-based indicators to strengthen fraud detection and creditworthiness assessment.",
        "Deployed scoring engines by containerizing inference components, integrating monitoring layers, enforcing version control, and enabling seamless decision processing in real-time payments and automated loan approvals.",
        "Strengthened model robustness by automating retraining cycles, balancing imbalanced datasets, monitoring drift, and validating performance to maintain consistent fraud detection and credit-scoring accuracy.",
        "Advanced risk segmentation pipelines by applying clustering logic, extracting latent components, analyzing user sequences, and generating actionable categories that guided fraud teams and credit officers.",
        "Increased fraud detection effectiveness by 20% by aligning calibrated thresholds, using sequential behavior markers, and integrating enriched user-risk features to improve intervention accuracy.",
        "Improved credit evaluation efficiency by 30% through automated scoring flows, cash-flow indicators, and reduced manual reviews, accelerating loan decisions across large borrower segments."
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

  
  export { services, technologies, experiences, testimonials, projects, };
