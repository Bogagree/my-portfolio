import React from 'react';
import style from './Testimonials.module.css'
import SiteButton from "../common/buttons/Site.Button";
import styleContainer from "../common/styles/Container.module.css";

const Testonominals = () => {
    return (
        <div className={style.testimonials}>
            <div className={styleContainer.container}>
                <h2 className={style.title}>Testimonials_</h2>
                <div className={style.testimonialsBlock}><SiteButton>left</SiteButton>
                    <span>slider with testonominals here and considering a distance work with a "hire me" button</span>
                    <SiteButton>right</SiteButton>
                </div>
            </div>

        </div>
    );
};

export default Testonominals;