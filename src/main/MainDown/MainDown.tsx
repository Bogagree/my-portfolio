import React from 'react';
import style from './MainDown.module.scss';
import {Title} from '../../common/Components/Title/Title';
import {AiOutlineDownload} from 'react-icons/ai';

export const MainDown = () => {
    return (

        <div className={style.mainDown}>

            <Title text={'Hi'} color={'#555'}/>

            <p>
                I'm frontend developer, meticulous and innovation-focused. From 2008 till 2011 I
                was working for engineering company. During that period, I’ve gained experience in goods supply phases, including engineering, procurement, preparation for shipment and etc. <br/>
                <br/>
                For the last 10 years I was working in Thailand manager of the Thai traditional medicine project  (supplements made of herbs and plants). This project gave me an opportunity to manage a team 80 people based in different countries Thailand, Russia (CIS), Indonesia and Vietnam. <br/>
                <br/>
                Currently, seeking further challenges in IT. Skilled at writing well-designed, testable and
                efficient code using current best practices in web development.
            </p>

            <div>
                <a className={style.downloadBtn}
                   href={'https://google.com/'}>
                    <AiOutlineDownload/> Download CV
                </a>
            </div>

        </div>
    );
};