import React from 'react';
import style from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css';
import project_img from '../../assets/img/projectImg.jpg';
import project_img2 from '../../assets/img/img_project_2_mono.png';
import Project from "./project/Project";
declare module '*.jpg';


const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Projects_</h2>
                <div className={style.projects}>
                    <Project title={'Allthaiherbs'}
                             description={'Lorem ipsum dolor sit amet.'}
                             link={'https://allthaiherbs.com/ru'}
                             linkTitle={'allthaiherbs.com'}
                    />
                    <Project title={'Social Network'}
                             description={'Lorem ipsum dolor sit amet.'}
                             linkTitle={'tagBogNet.pokaNet'}
                             link={'https://bogagree.github.io/samurai-way-main/'}
                    />
                    <Project title={'Todolist'}
                             description={'Lorem ipsum dolor sit amet.'}
                             linkTitle={'myTodoList.pokaNet'}
                             link={'https://bogagree.github.io/todolist-ts/'}
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;