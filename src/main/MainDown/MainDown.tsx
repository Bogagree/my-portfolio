import React from 'react';
import style from './MainDown.module.css';
import {Title} from '../../common/Components/Title/Title';
import SiteButton from '../../common/Components/buttons/Site.Button';
import stylesContainer from '../../common/styles/Container.module.css';

export const MainDown = () => {
    return (
        <div className={stylesContainer.container}>
            <div className={style.mainDown}>

                <Title text={'Hi'} color={'#555'}/>

                <p>
                    I am Junior Frontend developer able to build a Web presence from the ground up - from concept,
                    navigation, layout and programming to UX and SEO. <br/>
                    Meticulous and innovation-focused individual, from 2008 till 2011 I was working in an
                    engineering
                    company producing plate heat exchangers. During that period, I’ve gained experience in goods
                    supply
                    phases, including engineering, procurement, construction, inspection, preparation for shipment
                    and
                    transportation. <br/>
                    <br/>
                    For last 10 years I was working in Thailand as a General Manager in project Thai
                    Traditional Medicine (drugs/supplements based on herbs and plants). This project gave me the
                    opportunity to manage teams 50-80 people from different countries Thailand, Russia, Indonesia
                    and
                    Vietnam. <br/>
                    Currently, seeking further challenges in IT.Skilled at writing well-designed, testable and
                    efficient
                    code using current best practices in Web development.
                </p>

                <SiteButton className={style.downloadBtn}>Download CV</SiteButton>

            </div>
        </div>
    );
};