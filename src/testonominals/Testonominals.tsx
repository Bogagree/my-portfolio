import React from 'react';
import style from './Testimonials.module.css'
import SiteButton from "../common/Components/Buttons/Site.Button";
import {Title} from '../common/Components/Title/Title';

const Testonominals = () => {
    return (
        <div className={style.testimonials}>

                <Title text={'Testimonials'}/>

                <div className={style.testimonialsBlock}>
                    <SiteButton className={style.sliderBtn}>left</SiteButton>
                    <span>slider with testonominals here and considering a distance work with a "hire me" button</span>
                    <SiteButton className={style.sliderBtn}>right</SiteButton>
                </div>
            </div>

    );
};

export default Testonominals;