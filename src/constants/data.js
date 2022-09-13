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
      "This application allows you to search the latest news articles by any topic you want. Registered users can save any articles, they are interested in.",
    preview: newsExplorer,
    stackUsed: "HTML5, CSS, ReactJS, NodeJS, Express, MongoDB",
  },
  {
    name: "Around US",
    link: "https://www.oleg.students.nomoreparties.sbs/",
    gitLink: "https://github.com/Eskel4ik/react-around-auth",
    description:
      "Single page social network application, which allows registered users to add, like and delete photos, as well as edit their bio.",
    preview: around,
    stackUsed: "HTML5, CSS, ReactJS, NodeJS, Express, MongoDB",
  },
  {
    name: "Ava Mind",
    link: "https://eskel4ik.github.io/ava-mind-react/",
    gitLink: "https://github.com/Eskel4ik/ava-mind-react",
    description:
      "Single page Buisness card application representing a startup idea and allowing users to learn about the product. App leads users through questions about their conditions, explaining step by step why and how they can use the product.",
    preview: avaMind,
    stackUsed: "HTML, CSS, ReactJS",
  },
  {
    name: "From Homeland to Homeland",
    link: "https://eskel4ik.github.io/homeland/index.html",
    gitLink: "https://github.com/Eskel4ik/homeland",
    description:
      "Landing page responsive template, including short articles about different places.",
    preview: homeland,
    stackUsed: "HTML, CSS",
  },
  {
    name: "How to Learn",
    link: "https://eskel4ik.github.io/how-to-learn/index.html",
    gitLink: "https://github.com/Eskel4ik/how-to-learn",
    description:
      "A landing page which includes information about effective learning techniques and resourses.",
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
