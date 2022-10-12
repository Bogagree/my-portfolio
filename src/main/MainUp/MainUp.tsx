import React from 'react';
import style from './MainUp.module.scss';
import avatar from '../../assets/img/avatar.jpg';
import {SocialLinks} from '../SocialLinks/SocialLinks';

export const MainUp = () => {
    return (

            <div className={style.mainUp}>

                <div className={style.avatar_container}>
                    <img className={style.avatar} src={avatar} alt="avatar"></img>
                </div>

                <div className={style.bio}>

                    <h2 className={style.title}>Dmitry Bogatyrev_</h2>

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