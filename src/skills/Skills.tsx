import React from 'react';
import style from './Skills.module.scss'
import {Title} from '../common/Components/Title/Title';
import {AiOutlineSchedule} from 'react-icons/ai'
import {GiAllSeeingEye} from 'react-icons/gi'
import {ReactComponent as Axios} from '../assets/icons/axios.svg'
import {FaKeyboard} from 'react-icons/fa'
import {IoMdPeople} from 'react-icons/io'
import {DiResponsive} from 'react-icons/di'
import {TbBrandReactNative} from 'react-icons/tb'
import {
    SiGit,
    SiJest,
    SiMaterialui,
    SiNodedotjs,
    SiReact,
    SiRedux,
    SiStorybook,
    SiTailwindcss,
    SiTypescript,
} from 'react-icons/si';
import {RiEmpathizeFill, RiEnglishInput, RiGoogleFill} from 'react-icons/ri'
import {SkillsList} from './SkillsList/SkillsList';

const techSkills = {
    title: 'My Tech Stack',
    description: 'I\'ve tried out lots of different technologies and am always open to new things. Here are the ones I\'ve got most experience with:',
    icons: [
        {icon: <SiReact/>, title: 'React'},
        {icon: <SiRedux/>, title: 'Redux'},
        {icon: <SiTypescript/>, title: 'Typescript'},
        {icon: <SiGit/>, title: 'Git'},
        {icon: <SiMaterialui/>, title: 'Material UI'},
        {icon: <DiResponsive/>, title: 'Responsive UI'},
        {icon: <SiStorybook/>, title: 'Storybook'},
        {icon: <TbBrandReactNative/>, title: 'React Native'},
        {icon: <SiJest/>, title: 'Jest'},
        {icon: <SiNodedotjs/>, title: 'Node.js'},
        {icon: <Axios/>, title: 'Axios'},
        {icon: <SiTailwindcss/>, title: 'Tailwind CSS'},
    ]
}

const metaSkills = {
    title: 'My Meta skills',
    description: 'I like exploring the world around by talking to people, learning about their culture and making new connections. Over time I have developed useful skills such as foreng languages, or touch thyping metod. Below  are some of them:',
    icons: [
        {icon: <IoMdPeople/>, title: 'Communication'},
        {icon: <RiEmpathizeFill/>, title: 'Empathy'},
        {icon: <RiEnglishInput/>, title: 'English'},
        {icon: <RiGoogleFill/>, title: 'Googling'},
        {icon: <AiOutlineSchedule/>, title: 'Planning'},
        {icon: <FaKeyboard/>, title: 'Blind typing'},
    ]
}

const personalSkills = {
    title: 'Personal qualities',
    description: '',
    icons: [
        {icon: <GiAllSeeingEye/>, title: 'Pragmatic'},
    ]
}


export const Skills = () => {

    return (

        <section id={'skills'}>
            <div className={style.container}>

                <Title text={'Skills'}/>

                <SkillsList skills={techSkills}/>
                <SkillsList skills={metaSkills}/>
                <SkillsList skills={personalSkills}/>

            </div>
        </section>
    )
}