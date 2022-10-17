import React from 'react';
import style from './MainDown.module.scss';
import {Title} from '../../common/Components/Title/Title';
import {AiOutlineDownload} from 'react-icons/ai';

export const MainDown = () => {
    return (

            <div className={style.mainDown}>

                <Title text={'Hi'} color={'#555'}/>

                <p>
                    I'm Junior Frontend developer, meticulous and innovation-focused individual. From 2008 till 2011 I
                    was working in an engineering company producing plate heat exchangers. During that period, I’ve
                    gained experience in goods supply phases, including engineering, procurement, construction,
                    inspection, preparation for shipment and transportation. <br/>
                    <br/>
                    For last 10 years I was working in Thailand as a General Manager in the project Thai
                    Traditional Medicine (drugs/supplements based on herbs and plants). This project gave me the
                    opportunity to manage teams 50-80 people from different countries Thailand, Russia, Indonesia and
                    Vietnam. <br/>
                    <br/>
                    Currently, seeking further challenges in IT. Skilled at writing well-designed, testable and
                    efficient code using current best practices in web development.
                </p>

                <div>
                    <a className={style.downloadBtn} href={'https://drive.google.com/file/d/1FG3kvS5u0BOcseXud45BEoHXDu0X1HeZ/view?usp=sharing'}> <AiOutlineDownload/> Download CV</a>
                </div>

        </div>
    );
};