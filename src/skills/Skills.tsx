import React from 'react';
import style from './Skills.module.scss'
import Skill from "./skill/Skill";
import {Title} from '../common/Components/Title/Title';

export const Skills = () => {
    return (

        <section>
            <div className={style.container}>

                <div className={style.skillsBlock}>

                    <Title text={'Skills'}/>

                    <div className={style.skills}>
                        <Skill title={'HTML'}
                               description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, possimus!'}/>
                        <Skill title={'CSS'}
                               description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, possimus!'}/>
                        <Skill title={'JS'}
                               description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, possimus!'}/>
                    </div>
                </div>

            </div>
        </section>
    );
};