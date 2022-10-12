import React from 'react';
import style from './Resume.module.scss'
import {Title} from '../common/Components/Title/Title';
import {ResumeList} from './ResumeList/ResumeList';

const education = [
    {
        title: 'IT-INCUBATOR',
        period: 'Mar 2022 - Aug 2022',
        description: 'React / TS / Redux / SPA Development'
    },
    {
        title: 'National University of Science and Technology "MISIS"  (Moscow Institute of Steel and Alloys)',
        period: '2003-2008',
        description: 'Engineer\'s Degree, Metal forming proces (pipes) Technology/Technician'
    }
]

const employment = [
    {
        title: 'AllThaiHerbs, Thailand',
        period: 'since May 2020',
        position: 'Business owner',
        description: 'own business, SEO optimisation, HTML, CSS, customer service'
    },
    {
        title: 'Erawadee, Thailand',
        period: '2015- May 2020',
        position: 'General manager',
        description: '1. Selection, purchase, installation of equipment for the factory and retail stores (equipment for production, HVAC, Telecom) \n\n 2. Recruitment (Thais, Indonesians, Vietnamese, CIS)\n 3. Budget control, cost reduction and optimization.\n4. Interaction with production and building supply chains.\n5. Optimization of warehouse stock.\n6. Development of new products.\n7. Training and development of motivation schemes for employees of partner companies.\n'
    }
]

export const Resume = () => {
    return (

        <section id={'resume'}>
            <div className={style.container}>

                <div className={style.wrapper}>
                    <Title text={'Resume'}/>

                    <div className={style.resume}>
                        <p className={style.description}>I'm a frontend developer with experience in creating SPA using
                            React, Redux, TypeScript, SASS. I have knowledge of best practices in UI, TDD and debug
                            processes. Looking forward to expand my knowledge with new technologies, such as React
                            Native.
                            On my free time I like to read IT literature, complete tasks on <a
                                href='https://www.codewars.com/'>codewars.com</a>, surfing IT memes that are helping me
                            improve my English.
                        </p>
                    </div>
                </div>

                <ResumeList listTitle={'Education'} items={education}/>
                <ResumeList listTitle={'Employment'} items={employment}/>

            </div>
        </section>
    )
        ;
};