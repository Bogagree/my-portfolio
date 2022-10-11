import React from 'react';
import style from './ResumeListBlock.module.scss'


export type ExperienceBlockType = {
    title: string
    period: string
    position?: string
    description: string
}

export const ResumeListBlock: React.FC<ExperienceBlockType> = ({title, period, position, description}) => {
    return (
        <div className={style.resumeListBlock}>
            <p className={style.title}>{title}</p>
            <p className={style.period}>{period}</p>
            <p className={style.position}>{position}</p>
            <p className={style.description}>{description}</p>
        </div>
    );
};