import React from 'react';
import style from './Project.module.css'

export type ProjectType = {
    title: string
    description: string
    img?: string
    link: string
    linkTitle: string
    technologies: string[]
}

const Project = (props: ProjectType) => {
    return (
        <div className={style.projectCard}>

            <img className={style.projectImg} src={props.img} alt="project-img"></img>

            <div className={style.textContainer}>

                <h3 className={style.title}>
                    <a href={props.link}>{props.title}</a>
                </h3>

                <span className={style.description}>{props.description}</span>

                <p>Used stack:</p>

                <ul className={style.tags}>
                    {props.technologies.map(t => <li>{t}</li>)}
                </ul>

                <div className={style.linkWrapper}>
                    <a className={style.link} href={props.link}>{props.linkTitle}</a>
                </div>

            </div>


        </div>
    );
};

export default Project;