import React from 'react';
import style from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Project from './project/Project';
import {Title} from '../common/Components/Title/Title';
import allThaiHerbs from '../assets/img/projectImg.jpg'
import socialNetwork from '../assets/img/socialNetwork.jpg'
import learningCards from '../assets/img/learningCards.jpg'

const myProjects = [
    {
        date: new Date().toLocaleString('default', { dateStyle: 'long'}),
        title: 'Learning cards',
        description: 'Lorem ipsum dolor sit amet.',
        codeLink: 'https://github.com/Bogagree/cards_project',
        link: 'https://bogagree.github.io/cards_project/#/login',
        linkTitle: 'learning-Cards.com',
        img: learningCards,
        technologies: ['html5', 'css3', 'JavaScript', 'React', 'Redux']
    },
    {
        date: new Date().toLocaleString('default', { dateStyle: 'long'}),
        title: 'Social Network',
        description: 'Lorem ipsum dolor sit amet.',
        codeLink: 'https://github.com/Bogagree/samurai-way-main',
        link: 'https://bogagree.github.io/samurai-way-main/#/profile',
        linkTitle: 'Samurai-Way.com',
        img: socialNetwork,
        technologies: ['html5', 'css3', 'JavaScript', 'React', 'Redux']
    },
    {
        date: new Date().toLocaleString('default', { dateStyle: 'long'}),
        title: 'Allthaiherbs.com',
        description: 'internet shop with Thai traditional medicine and natural cosmetic',
        link: 'https://allthaiherbs.com/ru',
        codeLink: 'https://allthaiherbs.com/ru',
        linkTitle: 'Allthaiherbs.com',
        img: allThaiHerbs,
        technologies: ['html5', 'css3', 'JavaScript', 'React', 'Redux']
    },
]


const Projects: React.FC = () => {

    return (
        <div className={style.projectsBlock}>

            <div className={styleContainer.container}>

                <Title text={'Projects'}/>

                <div className={style.projects}>

                    {myProjects.map(p => <Project
                        date={p.date}
                        title={p.title}
                        description={p.description}
                        codeLink={p.codeLink}
                        link={p.link}
                        linkTitle={p.linkTitle}
                        img={p.img}
                        technologies={p.technologies}
                    />)}

                </div>
            </div>
        </div>
    );
};

export default Projects;