import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

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
  decagon,
  nica,
  stx,
  github,
  postgres,
  mysql,
  jira,
  docker,
  quickgrade,
  intercity,
  nextjs,
  vscode,
  profitallLogo,
  smarterise,
  smarteriseLogo,
  hashrails,
  cvtocareer,
  hashrailsLogo,
} from '../assets';
export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Fullstack development',
    icon: web,
  },
  {
    title: 'Frontend Developement',
    icon: mobile,
  },
  {
    title: 'Backend Developement',
    icon: backend,
  },
  {
    title: 'Graphics Design',
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },

  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
  {
    name: 'Postgres',
    icon: postgres,
  },
  {
    name: 'VS Code',
    icon: vscode,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'gitHub',
    icon: github,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'jira',
    icon: jira,
  },
];

const experiences: TExperience[] = [
  {
    title: 'Frontend Engineer (Contract)',
    companyName: 'Hashrails, Lagos State, Nigeria',
    icon: hashrailsLogo,
    iconBg: '#fffff',
    date: 'December 2025 - Present',
    points: [
      'Developed interactive dashboards and transaction flows using React, Next.js, TypeScript, and Tailwind, ensuring responsive and high-performance UI',
      'Integrated platform APIs for real-time pricing, liquidity, and settlement data, implementing secure authentication and embedded compliance checks.',
      'Built an automated testing framework using Cypress, covering transaction flows, authentication, compliance checks, and critical financial workflows performing validation and verification testing before every release to reduce production incidents.',
    ],
  },
  {
    title: 'Full-Stack Software Engineer',
    companyName: 'Smarterise Integrated Solutions, Lagos State, Nigeria',
    icon: smarteriseLogo,
    iconBg: '#fffff',
    date: 'November 2024 - November 2025',
    points: [
      'Designed and maintained RESTful APIs using Django REST Framework to process IoT device telemetry including energy consumption metrics and operational KPIs, integrating Auth0 for secure authentication and role-based access control.',
      'Developed responsive dashboards using React and modern JavaScript, implementing real-time data updates with WebSockets to visualize device performance and energy usage trends.',
      'Collaborated with hardware engineers to integrate IoT devices through MQTT and HTTP protocols, enabling reliable ingestion and monitoring of live device telemetry.',
    ],
  },
  {
    title: 'Software Engineer (Contract)',
    companyName: 'ProfitAll, UK',
    icon: profitallLogo,
    iconBg: '#fffff',
    date: 'March 2024 - Sept., 2024',
    points: [
      'Contributed to the development of a white-label commerce platform for universities, building scalable frontend and backend features using React and Node.js.',
      'Designed and implemented RESTful APIs for critical functionalities including product management, shopping cart operations, wishlists, order processing, and transaction handling, significantly enhancing application performance.',
      'Designed and implemented key features for MyMarketSQ, an e-commerce platform, including the landing page, product detail page, cart, wishlist, user dashboard, and chat functionalities',
    ],
  },
  {
    title: 'Software Engineer',
    companyName: 'Decagon Institute, Lagos State, Nigeria',
    icon: decagon,
    iconBg: '#fffff',
    date: 'Oct. 2022 - Feb. 2024',
    points: [
      'Worked as a frontend engineer in designing the front-end of (Traidr), an e-commerce website that operates as an online trading platform, using React and Tailwind, which ensured a seamless user experience.',
      "As a Full Stack engineer, I worked on an exam management app (QuickGrade) designed to streamline the exam-taking process for both lecturers and students within an institution my role encompassed both frontend and backend development, ensuring the app's functionality and user experience.",
      'Worked as a Backend Engineer to develop (LearnHub), a learning management system designed to transform remote learning by providing students with virtual access to a vast array of courses across various subject areas. My contributions included designing and implementing the backend infrastructure that enables the efficient delivery of educational content, fosters interactive learning experiences',
    ],
  },
  {
    title: 'Software Engineer/IT Support Officer',
    companyName: 'National Institute of Credit Administration, Lagos State, Nigeria',
    icon: nica,
    iconBg: '#fffff',
    date: 'Nov. 2021 - Sept. 2022',
    points: [
      "Maintained and improved the institute’s web platform by resolving production issues, deploying updates, and implementing security and performance improvements.",
      "Managed database operations and backup procedures to ensure data integrity, availability, and system reliability.",
      'Provided internal IT support including network maintenance, workstation upgrades, and system troubleshooting to ensure operational continuity.',
      'Supported the media team by designing digital assets and campaign materials, improving engagement across social media and marketing channels',
    ],
  },
  {
    title: 'Software Engineer',
    companyName: 'STX Technologies',
    icon: stx,
    iconBg: '#fffff',
    date: 'Apr. 2020 - Sept. 2021',
    points: [
      'Collaborated with senior engineers to implement new features and functionalities, contributing to the development process by writing, debugging, and testing code for various components of software applications.',
      'Identified and resolved technical problems, demonstrating a proactive and analytical approach to troubleshooting.',
      'Contributed to the continuous improvement of software solutions through problem-solving initiatives.',
    ],
  },
  // {
  //   title: 'UX Designer (Freelance)',
  //   companyName: 'Upwork',
  //   icon: upwork,
  //   iconBg: '#E6DEDD',
  //   date: 'Jan. 2018 - Feb. 2020',
  //   points: [
  //     'Using Figma and Adobe XD, I designed and produced low-fidelity wireframes and high-fidelity prototypes, as part of an iterative design process, facilitating user testing and systematically incorporated feedback received during testing phases to refine design elements.',
  //     'I conceptualized and designed eye-catching deliverables like flyers, web banners, cover designs, posters, and thumbnails within established deadlines and in accordance with client requirements. obtaining a 75% client return rate.',
  //   ],
  // },
  // {
  //   title: 'Graphic Designer',
  //   companyName: 'S&R Computer Training Institute',
  //   icon: sandr,
  //   iconBg: '#E6DEDD',
  //   date: 'Jun. 2011 - Sept. 2017',
  //   points: [
  //     'Responsible for the creation of daily print designs for clients which include but are not limited to certificates, flyers, letterheads, banners, Invoices, logos, posters, book covers, greeting cards, and infographic designs using Adobe Photoshop, Illustrator & CorelDraw Graphic Design Suite.',
  //     'I conceptualized and designed eye-catching deliverables like flyers, web banners, cover designs, posters, and thumbnails within established deadlines and in accordance with client requirements. obtaining a 75% client return rate.',
  //   ],
  // },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects: TProject[] = [
  {
    isOnGoing: true,
    name: 'Hashrails',
    description:
      'Hashrails makes it simple to convert, move, and settle stablecoins across fragmented markets — with one API, embedded compliance, and deep liquidity built in.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nextjs',
        color: 'black-text-gradient',
      },
      { name: 'tailwind', color: 'tailwind-text-gradient' },
      { name: 'typescript', color: 'typescript-text-gradient' },
    ],
    image: hashrails,
    sourceCodeLink: 'https://hashrails.com/',
  },
  {
    isOnGoing: false,
    name: 'Smarterise Web App',
    description:
      'The Smarterise Web App is an enterprise energy monitoring platform designed to track energy consumption and performance metrics from transformers and generators in real-time.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'django',
        color: 'golden-text-gradient',
      },
      {
        name: 'auth0',
        color: 'pink-text-gradient',
      },
      { name: 'typescript', color: 'typescript-text-gradient' },
    ],
    image: smarterise,
    sourceCodeLink: 'https://smarterise.ai/',
  },
  {
    name: 'CVtoCAREER',
    description:
      'CVtoCAREER empowers you with expert guidance, automation, and career-building tools to navigate the job market seamlessly and take the next step in your professional journey—on your terms.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nextjs',
        color: 'black-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'pink-text-gradient',
      },
      { name: 'typescript', color: 'typescript-text-gradient' },
    ],
    image: cvtocareer,
    sourceCodeLink: 'https://www.cvtocareer.com/',
  },
  {
    name: 'Intercity NG',
    description:
      'Intercity NG is a secure booking platform for people travelling or sending parcels across cities in Nigeria, which also help transport companies sell bus tickets and added services.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nextjs',
        color: 'black-text-gradient',
      },
      {
        name: 'redux',
        color: 'green-text-gradient',
      },
      { name: 'typescript', color: 'typescript-text-gradient' },
    ],
    image: intercity,
    sourceCodeLink: 'https://intercity.ng',
  },

  // {
  //   name: 'Mymarketsq',
  //   description:
  //     'Mymarketsq is a revolutionary two-in-one platform that combines the features of an ecommerce marketplace and a freelancing platform. It allows buyers to access sellers storefronts to buy and sell goods and services.',
  //   tags: [
  //     {
  //       name: 'react',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'nodejs',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'redux',
  //       color: 'golden-text-gradient',
  //     },
  //     {
  //       name: 'mongodb',
  //       color: 'pink-text-gradient',
  //     },
  //     { name: 'typescript', color: 'typescript-text-gradient' },
  //   ],
  //   image: mymarketsq,
  //   sourceCodeLink: 'https://mymarketsq.com/',
  // },

  {
    name: 'QuickGrade',
    description:
      'An innovative exam management app designed to streamline the exam process for both lecturers and students within an institution. The app allows lecturers to set exam questions and students to take exams, with automatic grading for objective questions.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'node',
        color: 'green-text-gradient',
      },
      {
        name: 'mysql',
        color: 'pink-text-gradient',
      },
      { name: 'typescript', color: 'typescript-text-gradient' },
    ],
    image: quickgrade,
    sourceCodeLink: 'https://quickgrade-frontend-lbbo.onrender.com/',
  },

  // {
  //   name: 'Notes-on-the-go',
  //   description:
  //     'A note-taking app (Notes-On-The-Go) that allows users to virtually access, create, and save events from the past, present, and upcoming ones.',
  //   tags: [
  //     {
  //       name: 'react',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'node',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'mongodb',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: notes,
  //   sourceCodeLink: 'https://notes-on-the-go.onrender.com/',
  // },
];

export { services, technologies, experiences, testimonials, projects };
