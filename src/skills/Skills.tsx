import React from 'react';
import style from './Skills.module.scss'
import Skill from "./Skill/Skill";
import {Title} from '../common/Components/Title/Title';
import {SiRedux, SiTypescript} from 'react-icons/si';
import {FaReact} from 'react-icons/fa';

const skills = [
    {icon: <SiTypescript/>, title: 'Typescript'},
    {icon: <FaReact/>, title: 'React'},
    {icon: <SiRedux/>, title: 'Redux'},
]

const mappedSkills = skills.map(({icon, title}) => {
    return <Skill Icon={icon} title={title}/>
})

export const Skills = () => {

    return (

        <section>
            <div className={style.container}>
                <div className={style.skillsBlock}>
                    <Title text={'Skills'}/>

                    <div className={style.skillsBlock}>

                        <div className={style.skills}>

                            <h3>My Tech Stack</h3>
                            <p>I've tried out lots of different technologies and am always
                                open to new things. Here are the ones I've got most experience
                                with:</p>

                            {mappedSkills}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
//
//
//
//
//
//
//
//
