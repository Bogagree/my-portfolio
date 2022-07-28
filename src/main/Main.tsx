import React from 'react';
import style from './Main.module.css'
import styleContainer from './../common/styles/Wrapper.module.css'

import avatar from "../assets/img/avatar.jpg"
import SiteButton from "../common/buttons/Site.Button";

export const Main = () => {
    return (
        <div className={style.main}>


            <div className={styleContainer.wrapper}>
                <div className={style.mainUp}>

                    <div className={style.avatar_container}>
                        <img className={style.avatar} src={avatar} alt="avatar"></img>
                    </div>

                    <div className={style.bio}>
                        <p className={style.name}>Dmitry Bogatyrev_</p>
                        <p className={style.work}>frontend developer, QA-engineer</p>
                        <div className={style.contacts}>
                            <dl className={style.contact_list}>
                                <dt>Age:</dt>
                                <dd>36</dd>
                                <dt>Phone:</dt>
                                <dd><a href="tel:+79286114284">+7 (928) 611-42-84</a></dd>
                                <dt>Whatsapp:</dt>
                                <dd><a href="https://wa.me/66845628577">+66 (84) 562-85-77</a></dd>
                                <dt>Email:</dt>
                                <dd><a href="mailto:bogatireshka@gmail.com">bogatireshka@gmail.com</a></dd>
                                <dt>Address:</dt>
                                <dd>Taganrog, Russia</dd>
                            </dl>
                        </div>
                        <p className={style.social}>
                            <a href="#" target="_blank"><i className={style.github}></i>git</a>
                            <a href="#" target="_blank"><i className={style.linkedin}></i>Li</a>
                            <a href="#" target="_blank"><i className={style.facebook}></i>fb</a>
                            <a href="#" target="_blank"><i className={style.instagram}></i>I</a>
                            <a href="#" target="_blank"><i className={style.VK}></i>VK</a>
                            <a href="#" target="_blank"><i className={style.yandexZen}></i>Zen</a>
                        </p>

                    </div>


                </div>

                <div className={style.mainDown}>
                    <h2>Hi_</h2>
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
                    <SiteButton>Download CV</SiteButton>
                </div>
            </div>
        </div>
    );
};