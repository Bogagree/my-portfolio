import React from 'react';
import style from './MainUp.module.scss';
import avatar from '../../assets/img/avatar.jpg';
import {SocialLinks} from '../SocialLinks/SocialLinks';
import Typewriter from 'typewriter-effect';
import {Fade} from "react-awesome-reveal"

export const MainUp = () => {
    return (

        <div className={style.mainUp}>

            <div className={style.avatar_container}>
                <Fade delay={500} duration={5500} triggerOnce={true}>
                    <img className={style.avatar} src={avatar} alt="avatar"></img>
                </Fade>
            </div>

            <div className={style.bio}>

                <h2 className={style.title}>
                    <Typewriter
                        options={{
                            cursor: '_'
                        }}
                        onInit={(typewriter) => {
                            typewriter.typeString('Dmitry Bogatyrev_')
                                .pauseFor(50)
                                .deleteChars(1)
                                .start()
                        }}
                    />
                </h2>


                <h3 className={style.position}>frontend developer, QA-engineer</h3>

                <div className={style.contacts}>
                    <dl className={style.contact_list}>
                        <dt>Age:</dt>
                        <dd>36</dd>
                        <dt>Phone:</dt>
                        <dd><a href="tel:+79286114284">+7 (928) 611-42-84</a></dd>
                        <dt>Whatsapp:</dt>
                        <dd><a href="https://wa.me/66845628577">+66 (84) 562-85-77</a></dd>
                        <dt>Email:</dt>
                        <dd><a href="mailto:bogatireshka@gmail.com">bogagree@gmail.com</a></dd>
                        <dt>Address:</dt>
                        <dd>Taganrog (Rostov), Russia / Thailand, Pattaya</dd>
                    </dl>
                </div>

                <SocialLinks/>
            </div>
        </div>
    )
}