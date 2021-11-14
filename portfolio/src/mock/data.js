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
  img: 'profile2.jpg',
  paragraphOne: `📚 Interactive Media Technology - Computer Science`,
  paragraphTwo: `💼 Human-computer interaction, system design, and full-stack development`,
  paragraphThree: '❤️ Tennis, hiking, music and games XD',
  paragraphFour: '😊 Enjoy the digital world and the natural world!',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'oculus.jpg',
    title: 'Future of Work',
    info: 'Winter 2021, ONGING',
    info2: 'A VR implementation for visual coding.',
  },
  {
    id: nanoid(),
    img: 'framework.png',
    title: 'Combined Machine Learning Techniques',
    info: 'Fall 2021',
    info2:
      "This project explored how a combined model can be used to perform sentiment analysis classification on data from social media to predict user's mood throughout the week. We trained an enhanced model by combining Convolutional Neural Network and an ensemble model of Naive Bayes Network, Support Vector Machine and Logistic Regression for the task.",
    repo: 'https://gist.github.com/kiki0805/d1dec1de537843bc9a340e7e81319bba',
  },
  {
    id: nanoid(),
    img: 'Pipeline.png',
    title: 'AMT based on Source Separation',
    info: 'Fall 2021',
    info2:
      'An automatic music transcription (AMT) method was used on the SOUSTA corpus - a dataset of traditional Cretan dance tunes. Both the original audio recordings from the dataset and a source separated audio, where the instrument playing the main melody had been separated, were transcribed. The purpose of the project was to investigate the impact that source separation had on the accuracy of the transcribed main melody.',
    url:
      'https://docs.google.com/presentation/d/1yGlxOODeBig6FfhQ-tqZG8-fNSLXlfhNHm6epFNu_Ww/edit#slide=id.p',
    repo: 'https://gist.github.com/kiki0805/50cbfc8eb668661b5651da14bbd9e7bf',
  },
  {
    id: nanoid(),
    img: 'interface.png',
    title: 'Rage Pad',
    info: 'Spring 2021',
    info2:
      'Rage pad can be seen as a normal instrument just as other common ones. There is no special timbre for the sound generation but three sound effects (slide, tremolo, and vibrato), which can be triggered with the control inputs. Besides, the sound effects, the basic two properties can be controlled on the user side are the frequency and duration (or, release time if the sound is sustained).',
    url: 'https://youtu.be/HMCYziR0LqE',
    repo: 'https://github.com/kiki0805/rage-pad',
  },
  {
    id: nanoid(),
    img: 'datatonism.JPG',
    title: 'Datatonism',
    info: 'Spring 2021',
    info2:
      'Datatonism is a digital emulation of the Dataton System 3000 – a Swedish electronic music synthesizer. Designed by Björn Sandlund in the 1970s, the system consists of brick-shaped modules that connect to each other sideways like Legos. As final project for the course DT2213 Musical Communication and Music Technology given at KTH Royal Institute of Technology, we have re-created Sandlunds system in a digital context. The name and main patch is derived from Automatonism, a modular synth system created for Pure Data.',
    repo: 'https://github.com/kx-shi/Datatonism',
  },
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
    repo: 'https://drive.google.com/file/d/19PHun1VDFRr2SQkJGBjcRA_ixVBAFfob/view?usp=sharing',
  },
  {
    id: nanoid(),
    img: 'steamind.png',
    title: 'Steamind',
    info: 'Spring 2021',
    info2:
      'Steamind is a tool for visualizing games from your own Steam library as well as other games from Steam that might suit your interests. D3.js is used to realize the visualization while Flask is used to serve the data (retrieving and filtering) scraped by Scrapy.',
    url: 'https://vimeo.com/526182623',
    repo: 'https://github.com/kiki0805/Steamind', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'speech-war.png',
    title: 'Speech War',
    info: 'Fall 2020',
    info2:
      'Speech War is a game made for multimodal study to compare keyboard input and speech input. It turned out that people showed more interests on speech mode while most people were more familiar with the keyboards.',
    url: 'https://vimeo.com/500989169',
    repo: 'https://github.com/kiki0805/SpeechWar', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'SiTi.png',
    title: 'SiTi - Simplified Travelling',
    info: 'Fall 2020',
    info2:
      'SiTi is an app design for international travel during pandemic period. It was an attempt on the general process for interaction design: from brainstorm to final evaluation with a prototype and verification of user requirements.',
    url: 'https://youtu.be/tqSjC6FmsmY',
    repo:
      'https://www.figma.com/proto/Rb2sioTJjjB6DGFf67FndG/Design?node-id=322%3A505&scaling=scale-down', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'HCIMouse.png',
    title: 'Turning Mice into Tangibles',
    info: 'Submission to CHI 2022',
    info2:
      'Centaur, is a system enables touch interaction for non-touch screen computers, e.g., most desktop computers. Centaur uses optical mice as an agent to perform touch actions. It supports tapping, dragging and multi-people touching, which brings new opportunities to conventional mouse-based interaction. Results show the location resolution is 12mm2, the positioning latency is 0.41 s on average and 0.76 s for 99% cases.',
    url: 'https://youtu.be/BysZTkLBfgo',
    repo: 'https://github.com/kiki0805/HCI-Mouse',
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
      url: 'https://www.linkedin.com/in/zezhe-huang/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
