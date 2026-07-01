import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import blogImage1 from '../images/blog/blog-1.png';
import blogImage2 from '../images/blog/blog-2.png';
import blogImage3 from '../images/blog/blog-3.png';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/miura-custom.png';
import porfolioImage2 from '../images/portfolio/kirawai-custom.png';
import porfolioImage3 from '../images/portfolio/otto-custom.png';
import porfolioImage4 from '../images/portfolio/inance-custom.png';
import porfolioImage5 from '../images/portfolio/hokkaido-custom.png';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  BlogSection,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with WaiYan's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Blog: 'blog',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm K.Wai Yan.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Japan-based Full-stack Web Developer</strong>, currently working at{' '}
        <strong className="text-stone-100">Outward, Inc.</strong>, helping build scalable and maintainable web
        applications using modern web technologies.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me playing <strong className="text-stone-100">football</strong>, watching{' '}
        <strong className="text-stone-100">UFC</strong>, or reading <strong className="text-stone-100">books</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I build scalable and maintainable web applications using PHP (Laravel), Java, MySQL, React, and Next.js. Passionate about clean code, continuous learning, and solving real-world business challenges through technology.`,
  aboutItems: [
    { label: 'Location', text: 'Japan, Chiba', Icon: MapIcon },
    { label: 'Age', text: '31', Icon: CalendarIcon },
    { label: 'Nationality', text: 'Myanmar', Icon: FlagIcon },
    { label: 'Interests', text: 'Football, UFC, Reading', Icon: SparklesIcon },
    { label: 'Study', text: 'University of Yangon', Icon: AcademicCapIcon },
    { label: 'Employment', text: 'Outward, Inc.', Icon: BuildingOffice2Icon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'Japanese',
        level: 9,
      },
      {
        name: 'Burmese',
        level: 10,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'Next.js',
        level: 5,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'PHP (Laravel)',
        level: 9,
      },
      {
        name: 'Node.js',
        level: 6,
      },
      {
        name: 'Java',
        level: 5,
      },
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      {
        name: 'Docker',
        level: 9,
      },
      {
        name: 'Linux',
        level: 8,
      },
      {
        name: 'AWS',
        level: 7,
      },

    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Golf Club Fitting Management System',
    description: 'Developed customer management, fitting history, authentication, and search features using PHP (Laravel) and MySQL while collaborating with an international development team.',
    url: '#',
    image: porfolioImage1,
  },
  {
    title: 'Kirawai Online Store',
    description: 'Developed a full-stack e-commerce platform using Laravel, Next.js, and MySQL, featuring authentication, RBAC, content management, and a loyalty & rewards system with well-defined business logic.',
    url: '#',
    image: porfolioImage2,
  },
  {
    title: 'NISHISPO-CMS',
    description: 'Developed core CMS features using PHP, jQuery, and MySQL, including photo uploads, AJAX forms, CSV export.',
    url: '#',
    image: porfolioImage3,
  },
  {
    title: 'Employee Management',
    description: 'Built employee scheduling, time tracking, task assignment, and reporting using PHP, and Bootstrap, with a focus on security.',
    url: '#',
    image: porfolioImage4,
  },
  {
    title: 'Hokkaido-CMS',
    description: 'Built CMS features like advertisement management, media upload, and editor tools using PHP, jQuery, and MySQL.',
    url: '#',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: '#',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'December 2010 - March 2017',
    location: 'University of Yangon',
    title: 'Master Degree in Zoology',
    content: <p>My academic background provided me with hands-on experience in scientific research and laboratory work. For my master's thesis, I studied the toxicology of naturally occurring mercury in fish, strengthening my analytical thinking and research skills.</p>,
  },
  {
    date: 'April 2022 - March 2024',
    location: '中央情報専門学校',
    title: 'IT.Web 学科',
    content: <p>Built a strong foundation in web development through hands-on projects using Java, HTML, CSS, JavaScript, and SQL. Also explored Python and introductory AI concepts while strengthening problem-solving and software development skills.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'April 2024 - Present',
    location: 'Outward, Inc.',
    title: 'Junior Web Engineer',
    content: (
      <p>
        Primarily working with PHP (Laravel) to build and maintain scalable web applications. Collaborating with senior developers and international team members to develop new features, resolve issues, and continuously improve application quality and performance.
      </p>
    ),
  },

];

/**
 * Blog section
 */
export const blogSection: BlogSection = {
  blogs: [
    {
      title: 'Cookies & Sessions in PHP — Complete Guide for Developers',
      description:
        'Learn the differences between cookies and sessions in PHP, and see practical examples of how to use them effectively for user authentication and state management.',
      date: 'Mar 23, 2026',
      url: 'https://medium.com/@waiyan.toshima12',
      image: blogImage1,
      tags: ['php', 'web dev'],
    },
    {
      title: 'Complete Guide: Using AWS Features in Laravel (Beginner → Advanced)',
      description:
        'Discover how to leverage Amazon Web Services (AWS) in your Laravel applications. This guide covers everything from basic setup to advanced integrations.',
      date: 'Mar 24, 2026',
      url: 'https://medium.com/@waiyan.toshima12',
      image: blogImage2,
      tags: ['laravel', 'aws'],
    },
    {
      title: '10 Most Useful PHP Functions Every Developer Should Know (With Practical Examples)',
      description:
        'Explore the top 10 essential PHP functions that will streamline your development workflow. Includes practical examples for string handling, array manipulation, and more.',
      date: 'Mar 15, 2026',
      url: 'https://medium.com/@waiyan.toshima12',
      image: blogImage3,
      tags: ['php', 'code'],
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'waiyan.toshima12@gmail.com',
      href: 'mailto:waiyan.toshima12@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Chiba, Japan',
      href: 'https://www.google.com/maps/place/Chiba,+Japan',
    },

  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [];
