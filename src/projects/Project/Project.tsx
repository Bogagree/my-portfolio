import React from 'react';
import style from './Project.module.scss'

export type ProjectType = {
    date: string
    title: string
    description: string
    img?: string
    link: string
    codeLink:string
    linkTitle: string
    technologies: string[]
}

const Project:React.FC<ProjectType> = (props) => {

    return (
        <div className={style.projectCard}>

            <div className={style.projectImg} style={{backgroundImage: `url(${props.img})`}}>
                <a className={style.viewBtn} href={props.link}> look </a>
                <a className={style.viewBtn} href={props.codeLink}> code </a>
            </div>

            <div className={style.textContainer}>

                <p className={style.date}>{props.date}</p>

                <h3>{props.title}</h3>

                <div className={style.description}>{props.description}</div>

                <p className={style.stack}>Used stack:</p>

                <ul className={style.tags}>
                    {props.technologies.map(t => <li key={t}>{t}</li>)}
                </ul>

                <div className={style.linkWrapper}>
                    <a className={style.link} href={props.link}>{props.linkTitle}</a>
                </div>

            </div>


        </div>
    );
};

export default Project;