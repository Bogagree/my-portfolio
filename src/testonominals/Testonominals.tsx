import React from 'react';
import style from './Testimonials.module.css'
import SiteButton from "../common/Components/buttons/Site.Button";
import styleContainer from "../common/styles/Container.module.css";
import {Title} from '../common/Components/Title/Title';

const Testonominals = () => {
    return (
        <div className={style.testimonials}>
            <div className={styleContainer.container}>

                <Title text={'Testimonials'} color={'#555'}/>

                <div className={style.testimonialsBlock}>
                    <SiteButton className={style.sliderBtn}>left</SiteButton>
                    <span>slider with testonominals here and considering a distance work with a "hire me" button</span>
                    <SiteButton className={style.sliderBtn}>right</SiteButton>
                </div>
            </div>

        </div>
    );
};

export default Testonominals;