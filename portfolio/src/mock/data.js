import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Zezhe Huang | Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Zezhe Huang',
  subtitle: `I'm a developer.`,
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `📚 Interactive Media Technology - Computer Science`,
  paragraphTwo: `💼 Sonic interaction, system design, and full-stack development`,
  paragraphThree: '❤️ Games, music, tennis and hiking XD',
  paragraphFour: '😊 Enjoy the digital world and the natural world!',
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'yarr-harr.png',
    title: 'Yarr-Harr!',
    info: 'Spring 2021',
    info2:
      'Yarr-Harr! is a PC game made by Unity. It is a 3D platformer centered around the usage of a grappling hook. Each of us in the project group works on prefabs which could be interactive or dangerous, while I work more on the sounds, the system of managing game data and a styled UI.',
    url: 'https://orrhsu.wixsite.com/yarr-harr',
    repo: 'https://github.com/Maximillianmus/DH2650-project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sf-collage.jpg',
    title: 'Sound Forest by The Sea',
    info: 'Spring 2021',
    info2:
      'Sound Forest by The Sea is an interactive installation with sounds and lights based on Sound Forest developed by KTH. Different from the original one, our project focuses more on a fine-grained interaction and an immersive soundscape based on the raw sound input and distance sensor. It was built by mainly three parts: the contoller software programmed by Python, Max/MSP and SuperCollider, Arduino receiving OSC and DMX data to trigger the third part - the speakers and LED lights.',
    url: 'https://vimeo.com/523815674',
  },
  {
    id: nanoid(),
    img: 'steamind.png',
    title: 'Steamind',
    info: 'Spring 2021',
    info2:
      'Steamind is a tool for visualizing games from your own Steam library as well as other games from Steam that might suit your interests. D3.js is used to realize the visualization while Flask is used to serve the data (retrieving and filtering) scraped by Scrapy.',
    url: 'https://gits-15.sys.kth.se/pages/karshi/SteamViz/',
    repo: 'https://gits-15.sys.kth.se/karshi/SteamViz', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'speech-war.png',
    title: 'Speech War',
    info: 'Autumn 2020',
    info2:
      'Speech War is a game made for multimodal study to compare keyboard input and speech input. It turned out that people showed more interests on speech mode while most people were more familiar with the keyboards.',
    url: 'https://vimeo.com/500989169',
    repo: 'https://github.com/kiki0805/SpeechWar', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'SiTi.png',
    title: 'SiTi - Simplified Travelling',
    info: 'Autumn 2020',
    info2:
      'SiTi is an app design for international travel during pandemic period. It was an attempt on the general process for interaction design: from brainstorm to final evaluation with a prototype and verification of user requirements.',
    url: 'https://drive.google.com/file/d/1x4LxXVwRo9D-L-mKNqHqOORxkGzC8pkY/view?usp=sharing',
    repo:
      'https://www.figma.com/proto/Rb2sioTJjjB6DGFf67FndG/Design?node-id=322%3A505&scaling=scale-down', // if no repo, the button will not show up
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
