import React from 'react';
import style from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Project from './project/Project';
import {Title} from '../common/Components/Title/Title';
import allthaiHerbs from '../assets/img/projectImg.jpg'

const myProjects = [
    {
        title: 'Learning cards',
        description: 'Lorem ipsum dolor sit amet.',
        link: 'https://allthaiherbs.com/ru',
        linkTitle: 'allthaiherbs.com',
        img: allthaiHerbs,
        technologies: ['html5', 'css3', 'JavaScript', 'React', 'Redux']
    },
    {
        title: 'Social Network',
        description: 'Lorem ipsum dolor sit amet.',
        link: 'https://bogagree.github.io/samurai-way-main/#/profile',
        linkTitle: 'allthaiherbs.com',
        img: allthaiHerbs,
        technologies: ['html5', 'css3', 'JavaScript', 'React', 'Redux']
    },
    {
        title: 'Allthaiherbs.com',
        description: 'internet shop with Thai traditional medicine and natural cosmetic',
        link: 'https://allthaiherbs.com/ru',
        linkTitle: 'Allthaiherbs.com',
        img: allthaiHerbs,
        technologies: ['html5', 'css3', 'JavaScript', 'React', 'Redux']
    },
]


const Projects: React.FC = () => {

    return (
        <div className={style.projectsBlock}>

            <div className={`${styleContainer.container} ${style.projectsContainer}`}>

                <Title text={'Projects'}/>

                <div className={style.projects}>

                    {myProjects.map(p => <Project
                        title={p.title}
                        description={p.description}
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