import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Zezhe Huang | Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Zezhe Huang',
  subtitle: `I'm a developer.`,
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `I'm a master student majored Interactive Media Technology (sonic track) at KTH, while my undergrate major is Computer Science.`,
  paragraphTwo: `I worked as a full-stack engineer, now I'm learning more technologies in media, especially in sounds, and practicing more about System Design in my spare time.`,
  paragraphThree:
    'Besides most of the entertainment activities on the computer such as playing video games, listening to music, and watching TV series, what I enjoy most as hobbies are tennis and hiking XD',
  paragraphFour: 'Enjoy the digital world and the natural world!',
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Yarr-Harr!',
    info: 'Spring 2021',
    info2: 'A PC game made by Unity.',
    url: '',
    repo: 'https://github.com/Maximillianmus/DH2650-project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Sound Forest by The Sea',
    info: 'Spring 2021',
    info2: 'Interactive installation with sounds and lights.',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Steamind',
    info: 'Spring 2021',
    info2: '',
    url: 'https://gits-15.sys.kth.se/pages/karshi/SteamViz/',
    repo: 'https://gits-15.sys.kth.se/karshi/SteamViz', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Speech War',
    info: 'Autumn 2020',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'SiTi - Simplified Travelling',
    info: 'Autumn 2020',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Emotion and Liking for Music and Images',
    info: 'Autumn 2020',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Redesigned Site for New at KTH',
    info: 'Autumn 2020',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/kiki0805',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/zezhe-huang-b8844b121/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
