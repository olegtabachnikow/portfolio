import React from 'react';
import './Projects.css';
import Skills from '../Skills/Skills';
import Card from '../Card/Card';
import { projectsData } from '../../constants/data';
import gitIcon from '../../images/github-logo.svg';

function Projects() {
  return (
    <section id='projects' className='projects'>
      <Skills />
      <h2 className='projects__title'>
        And these are examples of how I implement them
      </h2>
      <div className='projects__box'>
        {projectsData.map((item, index) => {
          return (
            <Card
              key={index}
              name={item.name}
              link={item.link}
              gitLink={item.gitLink}
              description={item.description}
              preview={item.preview}
              stackUsed={item.stackUsed}
            />
          );
        })}
      </div>
      <div className='porjects__stuff'>
        <p className='projects__stuff-subtitle'>
          Also, some stuff still available on my Git
        </p>
        <a
          href='https://github.com/Eskel4ik?tab=repositories'
          rel='noreferrer'
          target='_blank'
        >
          <img src={gitIcon} alt='github icon' />
        </a>
      </div>
    </section>
  );
}
export default Projects;
