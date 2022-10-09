import React from 'react';
import style from './Project.module.css'
import project_img from '../../assets/img/projectImg.jpg';
declare module '*.jpg';


type ProjectPropsType = {
    title: string
    description: string
    img?: string
    link: string
    linkTitle: string
}

const Project = (props: ProjectPropsType) => {
    return (
        <div className={style.projectCard}>

            <img className={style.projectImg} src={project_img} alt="project-img"></img>


            <div className={style.textContainer}><h3 className={style.title}><a href="#">{props.title}</a></h3>

                <span className={style.description}>{props.description}</span>

                <p>Used stack:</p>

                <ul className={style.tags}>
                    <li>html5</li>
                    <li>css3</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Redux</li>
                </ul>
                <div className={style.linkWrapper}>
                    <a className={style.link} href={props.link}>{props.linkTitle}</a>
                </div>
            </div>


        </div>
    );
};

export default Project;