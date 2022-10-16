import React from 'react';
import style from './Projects.module.scss';
import Project from './Project/Project';
import {Title} from '../common/Components/Title/Title';
import allThaiHerbs from '../assets/img/projectImg.jpg'
import socialNetwork from '../assets/img/socialNetwork.jpg'
import learningCards from '../assets/img/learningCards.jpg'
import poructivityApp from '../assets/img/Todolist.jpg'
import {Slide} from 'react-awesome-reveal';

const myProjects = [
    {
        date: new Date(2022, 9, 10).toLocaleString('default', {dateStyle: 'long'}),
        title: 'Learning cards',
        description: 'Open Source education project for learning new information. Creat app with team, using git. Redux toolkit refactoring in progress.',
        codeLink: 'https://github.com/Bogagree/cards_project',
        link: 'https://bogagree.github.io/cards_project/#/login',
        linkTitle: 'learning-Cards.com',
        img: learningCards,
        technologies: ['React', 'Redux', 'Typescript', 'React-router-dom', 'Axios', 'Scss', 'Formik', ' Material UI', 'git', 'GitHub Projects', 'Redux toolkit']
    },
    {
        date: new Date(2022, 8, 15).toLocaleString('default', {dateStyle: 'long'}),
        title: 'Social Network',
        description: 'Social network prototype. Refactoring JS to TS.',
        codeLink: 'https://github.com/Bogagree/samurai-way-main',
        link: 'https://bogagree.github.io/samurai-way-main/#/profile',
        linkTitle: 'Samurai-Way.com',
        img: socialNetwork,
        technologies: ['React', 'Redux', 'Typescript', 'React-router-dom', 'Axios', 'Scss', 'Redux-form', 'git']
    },
    {
        date: new Date().toLocaleString('default', {dateStyle: 'long'}),
        title: 'Productivity app',
        description: 'App for weekly/daily planning, todo lists records for better time management and expense optimisation. Redux toolkit refactoring in progress.',
        codeLink: 'https://github.com/Bogagree/samurai-way-main',
        link: 'https://bogagree.github.io/todolist-ts/',
        linkTitle: 'todoList.com',
        img: poructivityApp,
        technologies: ['React', 'Redux', 'Typescript', 'React-router-dom', 'Axios', 'Scss', 'Formik', ' Material UI', 'git', 'Redux toolkit']
    },
    {
        date: new Date().toLocaleString('default', {dateStyle: 'long'}),
        title: 'Allthaiherbs.com',
        description: 'My own internet shop with Thai traditional medicine and natural cosmetic. Refactoring php/Vue to CS-Cart CMS or shop-script.',
        link: 'https://allthaiherbs.com/ru',
        codeLink: 'https://allthaiherbs.com/ru',
        linkTitle: 'Allthaiherbs.com',
        img: allThaiHerbs,
        technologies: ['html5', 'css3', 'JavaScript', 'React', 'Redux']
    },
]

export const Projects: React.FC = () => {

    return (

        <section id={'projects'}>

            <div className={style.container}>

                <Slide direction={'up'} triggerOnce={true} duration={1500}>
                    <div className={style.projectsBlock}>

                        <Title text={'Projects'}/>

                        <div className={style.projects}>

                            {myProjects.map(p => <Project
                                key={p.title}
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

                </Slide>

            </div>

        </section>
    );
};