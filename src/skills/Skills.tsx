import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import {Title} from '../common/Components/Title/Title';

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>

                <Title text={'Skills'}/>

                <div className={style.skills}>
                    <Skill title={'HTML'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, possimus!'}/>
                    <Skill title={'CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, possimus!'}/>
                    <Skill title={'JS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, possimus!'}/>
                </div>
            </div>
        </div>
    );
};