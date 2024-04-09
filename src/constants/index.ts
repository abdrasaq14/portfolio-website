import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  traidr,
  sandr,
  notes,
  nextjs,
  vscode
} from "../assets";
export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "tech",
    title: "Skills",
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

const services: TService[] = [
  {
    title: "Full-stack development",
    icon: web,
  },
  {
    title: "Front-end Developement",
    icon: mobile,
  },
  {
    title: "Back-end Developement",
    icon: backend,
  },
  {
    title: "Graphics Design",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "VS Code",
    icon: vscode,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "gitHub",
    icon: github,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "jira",
    icon: jira,
  },
];

const experiences: TExperience[] = [
  {
    title: "Software Engineer",
    companyName: "Decagon Institute",
    icon: decagon,
    iconBg: "#fffff",
    date: "Oct. 2020 - Feb. 2021",
    points: [
      "Worked as a frontend engineer in designing the front-end of (Traidr), an e-commerce website that operates as an online trading platform.",
      "As a Full Stack Engineer on the QuickGrade project, I contributed to developing an exam management app, focusing on improving both its functionality and user experience through frontend and backend development.",
      "I served as a Backend Engineer for LearnHub, a remote learning platform, where I designed and implemented the backend to efficiently deliver educational content and support interactive learning experiences.",
      "Designed and integrated RESTful APIs with authentication and authorization mechanisms in existing applications using Node.js, Express.js & JWTs to control API access, while ensuring adherence to best practices, and ease of use.",
    ],
  },
  {
    title: "Software Engineer/IT Support Officer",
    companyName: "National Institute of Credit Administration",
    icon: nica,
    iconBg: "#fffff",
    date: "Nov. 2021 - Sept. 2022",
    points: [
      "Conducted regular bug fixes and troubleshooting to maintain the integrity of the institute's website codebase, implementing timely software updates and security fixes to uphold the website's robustness.",
      "Maintained the institute's WLAN to ensure proper functionality, performed regular PC checks ups, software upgrading, and general system maintenance.",
      "Oversaw database management, monitoring performance for efficient data handling, and established backup procedures to safeguard critical data.",
      "Supported the media team by designing deliverables for social media campaigns, souvenirs etc.",
    ],
  },
  {
    title: "Intern Software Developer",
    companyName: "STX Technologies",
    icon: stx,
    iconBg: "#fffff",
    date: "Apr. 2020 - Sept. 2021",
    points: [
      "Developed a note-taking app (Notes-On-The-Go) that allows users to virtually create, and edit notes from any device with a cross-platform synchronization feature.",
      "Collaborated with senior engineers to implement new features and functionalities, contributing to the development process by writing, debugging, and testing code for various components of software applications.",
      "Identified and resolved technical problems, demonstrating a proactive and analytical approach to troubleshooting.",
      "Contributed to the continuous improvement of software solutions through problem-solving initiatives.",
    ],
  },
  {
    title: "UX Designer (Freelance)",
    companyName: "Upwork",
    icon: upwork,
    iconBg: "#E6DEDD",
    date: "Jan. 2018 - Feb. 2020",
    points: [
      "Using Figma and Adobe XD, I designed and produced low-fidelity wireframes and high-fidelity prototypes, as part of an iterative design process, facilitating user testing and systematically incorporated feedback received during testing phases to refine design elements.",
      "I conceptualized and designed eye-catching deliverables like flyers, web banners, cover designs, posters, and thumbnails within established deadlines and in accordance with client requirements. obtaining a 75% client return rate.",
    ],
  },
  {
    title: "Graphic Designer",
    companyName: "S&R Computer Training Institute",
    icon: sandr,
    iconBg: "#E6DEDD",
    date: "Jun. 2011 - Sept. 2017",
    points: [
      "Responsible for the creation of daily print designs for clients which include but are not limited to certificates, flyers, letterheads, banners, Invoices, logos, posters, book covers, greeting cards, and infographic designs using Adobe Photoshop, Illustrator & CorelDraw Graphic Design Suite.",
      "I conceptualized and designed eye-catching deliverables like flyers, web banners, cover designs, posters, and thumbnails within established deadlines and in accordance with client requirements. obtaining a 75% client return rate.",
    ],
  },
];

const testimonials: TTestimonial[] = [
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

const projects: TProject[] = [
  {
    name: "QuickGrade",
    description:
      "An innovative exam management app designed to streamline the exam process for both lecturers and students within an institution. The app allows lecturers to set exam questions and students to take exams, with automatic grading for objective questions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      
      
    ],
    image: quickgrade,
    sourceCodeLink: "https://quickgrade-frontend-lbbo.onrender.com/",
  },
  {
    name: "Traidr",
    description:
      "An online local community marketplace that provides a platform for users to sell and buy pre-owned goods and items like furniture, appliances, clothing and antiques.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "postgres",
        color: "pink-text-gradient",
      },
    ],
    image: traidr,
    sourceCodeLink: "https://decagon-traidr-frontend.onrender.com/",
  },
  // {
  //   name: "LearnHub",
  //   description:
  //     "A learning management system that gives students virtual access to a wide range of courses in many topic areas. The app tends to overcome the limitations of traditional classroom settings by allowing students to learn remotely.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   sourceCodeLink: "https://github.com/",
  // },
  {
    name: "Notes-on-the-go",
    description:
      "A note-taking app (Notes-On-The-Go) that allows users to virtually access, create, and save events from the past, present, and upcoming ones.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: notes,
    sourceCodeLink: "https://notes-on-the-go.onrender.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
