import React from 'react';
import style from './Skill.module.scss'

type SkillPropsType = {
    Icon: any
    title: string
}

export const Skill: React.FC<SkillPropsType> = ({Icon, title}) => {
    return (
        <div className={style.skillItem}>

            {Icon}
            <p className={style.title}>{title}</p>
        </div>
    );
};