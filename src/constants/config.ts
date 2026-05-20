type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    technologies: TSection;
    workExperience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: 'Abdulrasaq',
    fullName: 'Abdulrasaq Suleiman',
    email: 'abdrasaq14@gmail.com',
  },
  hero: {
    name: 'Abdulrasaq',
    p: ['A frontend engineer passionate about', 'innovative solutions.'],
  },
  contact: {
    p: 'Get in touch',
    h2: 'Contact.',
    form: {
      name: {
        span: 'Your Name',
        placeholder: "What's your name?",
      },
      email: { span: 'Your Email', placeholder: "What's your email?" },
      message: {
        span: 'Your Message',
        placeholder: 'Type your message here?',
      },
    },
  },
  sections: {
    about: {
      p: 'Introduction',
      h2: 'Overview.',
      content: `I'm a frontend engineer with 5+ years of proven experience as a software engineer, delivering high-quality web applications across fintech, IoT, and enterprise platforms. Specialized in software design and architecture using React, Next.js, and TypeScript, with deep expertise spanning the full software development lifecycle (SDLC) from requirements definition and clean code implementation through validation and verification testing, production monitoring, and ongoing system improvement.`,
    },
    technologies: {
      p: 'What I have been using so far',
      h2: 'Skills & tools.',
    },
    workExperience: {
      p: 'What I have done so far',
      h2: 'Work Experience.',
    },
    feedbacks: {
      p: 'What others say',
      h2: 'Testimonials.',
    },
    works: {
      p: 'My work',
      h2: 'Projects.',
      content: `These projects highlight my expertise and experience through real-word examples of my work. Each project is concisely detailed, featuring links to code repositories and live demonstrations, illustrating my proficiency in addressing intricate challenges, employing a range of technologies, and effectively overseeing projects.`,
    },
  },
};
