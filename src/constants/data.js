import newsExplorer from '../images/news.png';
import around from '../images/around.png';
import avaMind from '../images/ava.png';
import homeland from '../images/homeland.png';
import howToLearn from '../images/howtolearn.png';
import league from '../images/league.png';
import robo from '../images/robo.png';

const projectsData = [
  {
    name: 'Get Robo VPN',
    link: 'https://t.me/getrobovpn_bot',
    gitLink: 'https://github.com/Eskel4ik/vpn-frontend',
    description:
      'Frontend SPA for Robo VPN services, integrated in Telegram Bot web app.',
    preview: robo,
    stackUsed: 'ReactJS, Javascript, HTML, CSS, DotEnv, Framer Motion',
    allowed: false
  },
  {
    name: 'League of Legends DB',
    link: 'https://eskel4ik.github.io/league-of-legends-db/',
    gitLink: 'https://github.com/Eskel4ik/league-of-legends-db',
    description:
      'My pet project, dedicated to League of Legends game. You can check here info about all champions and items in game. I still working on some features.',
    preview: league,
    stackUsed: 'ReactJS, Javascript, HTML, CSS',
    allowed: true
  },
  {
    name: 'News Explorer',
    link: 'https://oleg-news-explorer.students.nomoredomainssbs.ru/',
    gitLink: 'https://github.com/Eskel4ik/news-explorer-frontend',
    description:
      'This application allows you to search the latest news articles by any topic you want. Registered users can save any articles, they are interested in.',
    preview: newsExplorer,
    stackUsed: 'HTML5, CSS, ReactJS, NodeJS, Express, MongoDB',
    allowed: false
  },
  {
    name: 'Around US',
    link: 'https://www.oleg.students.nomoreparties.sbs/',
    gitLink: 'https://github.com/Eskel4ik/react-around-auth',
    description:
      'Single page social network application, which allows registered users to add, like and delete photos, as well as edit their bio.',
    preview: around,
    stackUsed: 'HTML5, CSS, ReactJS, NodeJS, Express, MongoDB',
    allowed: false
  },
  {
    name: 'Ava Mind',
    link: 'https://avamind.online/',
    gitLink: 'https://github.com/Eskel4ik/ava-mind-react',
    description:
      'Single page Buisness card application representing a startup idea and allowing users to learn about the product. App leads users through questions about their conditions, explaining step by step why and how they can use the product.',
    preview: avaMind,
    stackUsed: 'HTML, CSS, ReactJS',
    allowed: false
  },
  {
    name: 'From Homeland to Homeland',
    link: 'https://eskel4ik.github.io/homeland/index.html',
    gitLink: 'https://github.com/Eskel4ik/homeland',
    description:
      'Landing page responsive template, including short articles about different places.',
    preview: homeland,
    stackUsed: 'HTML, CSS',
    allowed: true
  },
  {
    name: 'How to Learn',
    link: 'https://eskel4ik.github.io/how-to-learn/index.html',
    gitLink: 'https://github.com/Eskel4ik/how-to-learn',
    description:
      'A landing page which includes information about effective learning techniques and resourses.',
    preview: howToLearn,
    stackUsed: 'HTML, CSS',
    allowed: true
  },
];

const skillsData = [
  {
    name: 'ReactJS',
    value: 70,
  },
  {
    name: 'NodeJS',
    value: 40,
  },
  {
    name: 'Express',
    value: 50,
  },
  {
    name: 'MongoDB',
    value: 50,
  },
  {
    name: 'HTML/HTML5',
    value: 80,
  },
  {
    name: 'CSS',
    value: 80,
  },
  {
    name: 'Javascript',
    value: 65,
  },
];

export { projectsData, skillsData };
