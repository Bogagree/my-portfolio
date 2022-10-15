import React from 'react';
import style from './SkillsList.module.scss'
import {Skill} from '../Skill/Skill';

type SkillsListPropsType = {
    skills: {
        icons: SkillsType[]
        title: string
        description: string
    }
}

type SkillsType = {
    icon: any
    title: string
}

export const SkillsList: React.FC<SkillsListPropsType> = ({skills}) => {
    return (
        <div className={style.skillsList}>
            <h3>{skills.title}</h3>
            <p>{skills.description}</p>
            <div className={style.skills}>
                {skills.icons.map(({icon, title}) => {
                    return <Skill key={title} Icon={icon} title={title}/>
                })}
            </div>
        </div>
    );
};