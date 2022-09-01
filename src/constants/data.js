import newsExplorer from '../images/news.png';
import around from '../images/around.png';
import avaMind from '../images/ava.png';
import homeland from '../images/homeland.png';
import howToLearn from '../images/howtolearn.png';
import question from '../images/question.jpeg';

const projectsData = [
  {
    name: "News Explorer",
    link: "https://oleg-news-explorer.students.nomoredomainssbs.ru/",
    gitLink: "https://github.com/Eskel4ik/news-explorer-frontend",
    description:
      "Application allow you to search latest news articles by any topics you want. Registered users can save any articles, they interested in.",
    preview: newsExplorer,
    stackUsed: "HTML5, CSS, ReactJS, NodeJS, Express, MongoDB",
  },
  {
    name: "Around US",
    link: "https://www.oleg.students.nomoreparties.sbs/",
    gitLink: "https://github.com/Eskel4ik/react-around-auth",
    description:
      "One page social network application allow registered users edit their bio & add, like and delete photos.",
    preview: around,
    stackUsed: "HTML5, CSS, ReactJS, NodeJS, Express, MongoDB",
  },
  {
    name: "Ava Mind",
    link: "https://eskel4ik.github.io/ava-mind-react/",
    gitLink: "https://github.com/Eskel4ik/ava-mind-react",
    description:
      "One page Buisness card application for representing startup idea and allowing user to test product. App lead users threw questions about his conditions and explain step by step why and how they can use it.",
    preview: avaMind,
    stackUsed: "HTML, CSS, ReactJS",
  },
  {
    name: "From Homeland to Homeland",
    link: "https://eskel4ik.github.io/homeland/index.html",
    gitLink: "https://github.com/Eskel4ik/homeland",
    description:
      "Landing page responsive template, including short articles about favorite places.",
    preview: homeland,
    stackUsed: "HTML, CSS",
  },
  {
    name: "How to Learn",
    link: "https://eskel4ik.github.io/how-to-learn/index.html",
    gitLink: "https://github.com/Eskel4ik/how-to-learn",
    description:
      "A landing page template Page include information about effective learning techniques and resourses.",
    preview: howToLearn,
    stackUsed: "HTML, CSS",
  },
  {
    name: "Coming soon",
    link: "",
    gitLink: "",
    description:
      "Something will be here soon ;)",
    preview: question,
    stackUsed: "Imagination",
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
