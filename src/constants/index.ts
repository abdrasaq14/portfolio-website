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
  upwork,
  postgres,
  mysql,
  jira,
  docker,
  quickgrade,
  intercity,
  sandr,
  nextjs,
  vscode,
  profitallLogo,
  mymarketsq,
  smarterise,
  smarteriseLogo,
  hashrails,
  cvtocareer,
} from '../assets';
export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'tech',
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
    title: 'Full-Stack Software Engineer (Contract)',
    companyName: 'Smarterise Integrated Solutions, Lagos State, Nigeria',
    icon: smarteriseLogo,
    iconBg: '#fffff',
    date: 'March 2024 - Present',
    points: [
      'Developed and maintained RESTful APIs using Django Rest Framework for managing IoT device data, including energy consumption and KPIs, while implementing authentication with Auth0 for secure user access',
      'Created interactive charts to display energy usage trends and device performance, while focusing on building a responsive UI with an emphasis on smooth user experience and implementing real-time data updates using WebSockets.',
      'Collaborated with the hardware team for seamless integration of IoT device data using MQTT and HTTP.',
    ],
  },
  {
    title: 'Software Engineer (Contract)',
    companyName: 'ProfitAll, UK',
    icon: profitallLogo,
    iconBg: '#fffff',
    date: 'March 2024 - Sept., 2024',
    points: [
      'I worked as a backend Engineer (using Nodejs ) in a team charged with the responsibility of developing a white-label solution for Landmark University. This project encompassed comprehensive administrative features, e-commerce capabilities, and inventory management systems.',
      'As a Fullstack Developer, I worked on the e-commerce section (Landmart) of a white-label solution. I developed APIs for products, cart, wishlist, orders, and transactions, and also contributed to the UI development.',
    ],
  },
  {
    title: 'Software Engineer',
    companyName: 'Decagon Institute, Lagos State, Nigeria',
    icon: decagon,
    iconBg: '#fffff',
    date: 'Oct. 2022 - Feb. 2024',
    points: [
      'Worked as a frontend engineer in designing the front-end of (Traidr), an e-commerce website that operates as an online trading platform.',
      'As a Full Stack Engineer on the QuickGrade project, I contributed to developing an exam management app, focusing on improving both its functionality and user experience through frontend and backend development.',
      'I served as a Backend Engineer for LearnHub, a remote learning platform, where I designed and implemented the backend to efficiently deliver educational content and support interactive learning experiences.',
      'Designed and integrated RESTful APIs with authentication and authorization mechanisms in existing applications using Node.js, Express.js & JWTs to control API access, while ensuring adherence to best practices, and ease of use.',
    ],
  },
  {
    title: 'Software Engineer/IT Support Officer',
    companyName: 'National Institute of Credit Administration, Lagos State, Nigeria',
    icon: nica,
    iconBg: '#fffff',
    date: 'Nov. 2021 - Sept. 2022',
    points: [
      "Conducted regular bug fixes and troubleshooting to maintain the integrity of the institute&apos;s website codebase, implementing timely software updates and security fixes to uphold the website's robustness. This proactive approach ensured the website remained accessible and secure, enhancing user trust and engagement.",
      "Maintained the institute's WLAN to ensure proper functionality, performed regular PC checks ups, software upgrading, and general system maintenance.",
      'Oversaw database management, monitoring performance for efficient data handling, and established backup procedures to safeguard critical data.',
      'Supported the media team by designing deliverables for social media campaigns, souvenirs etc. This significantly increased the team&apos;s productivity by providing visually compelling and engaging content that resonated with our target audience and also contributed to a measurable increase in conversion rates for our campaigns',
    ],
  },
  {
    title: 'Intern Software Developer',
    companyName: 'STX Technologies',
    icon: stx,
    iconBg: '#fffff',
    date: 'Apr. 2020 - Sept. 2021',
    points: [
      'Developed a note-taking app (Notes-On-The-Go) that allows users to virtually create, and edit notes from any device with a cross-platform synchronization feature.',
      'Collaborated with senior engineers to implement new features and functionalities, contributing to the development process by writing, debugging, and testing code for various components of software applications.',
      'Identified and resolved technical problems, demonstrating a proactive and analytical approach to troubleshooting.',
      'Contributed to the continuous improvement of software solutions through problem-solving initiatives.',
    ],
  },
  {
    title: 'UX Designer (Freelance)',
    companyName: 'Upwork',
    icon: upwork,
    iconBg: '#E6DEDD',
    date: 'Jan. 2018 - Feb. 2020',
    points: [
      'Using Figma and Adobe XD, I designed and produced low-fidelity wireframes and high-fidelity prototypes, as part of an iterative design process, facilitating user testing and systematically incorporated feedback received during testing phases to refine design elements.',
      'I conceptualized and designed eye-catching deliverables like flyers, web banners, cover designs, posters, and thumbnails within established deadlines and in accordance with client requirements. obtaining a 75% client return rate.',
    ],
  },
  {
    title: 'Graphic Designer',
    companyName: 'S&R Computer Training Institute',
    icon: sandr,
    iconBg: '#E6DEDD',
    date: 'Jun. 2011 - Sept. 2017',
    points: [
      'Responsible for the creation of daily print designs for clients which include but are not limited to certificates, flyers, letterheads, banners, Invoices, logos, posters, book covers, greeting cards, and infographic designs using Adobe Photoshop, Illustrator & CorelDraw Graphic Design Suite.',
      'I conceptualized and designed eye-catching deliverables like flyers, web banners, cover designs, posters, and thumbnails within established deadlines and in accordance with client requirements. obtaining a 75% client return rate.',
    ],
  },
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
    sourceCodeLink: 'https://hashrails.xyz/',
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
    sourceCodeLink: 'http://demo.powersmarter.net/',
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
        color: 'golden-text-gradient',
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
    name: 'Mymarketsq',
    description:
      'Mymarketsq is a revolutionary two-in-one platform that combines the features of an ecommerce marketplace and a freelancing platform. It allows buyers to access sellers storefronts to buy and sell goods and services.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'redux',
        color: 'golden-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'pink-text-gradient',
      },
      { name: 'typescript', color: 'typescript-text-gradient' },
    ],
    image: mymarketsq,
    sourceCodeLink: 'https://mymarketsq.com/',
  },

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
